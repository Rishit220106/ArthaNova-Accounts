import { apiRequest } from './apiClient';
import { Contact, ActivityItem } from './mockData';

export interface DashboardStatsResponse {
  totalContacts: number;
  newContacts: number;
  readContacts: number;
  archivedContacts: number;
  todayContacts: number;
}

export interface GetContactsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}

export interface GetContactsResponse {
  success: boolean;
  count: number;
  pagination: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalRecords: number;
  };
  data: any[];
}

export interface PublicContactPayload {
  name: string;
  email: string;
  company: string;
  country: string;
  services?: string[];
  service?: string;
  message: string;
}

export const mapBackendContactToFrontend = (item: any): Contact => {
  if (!item) return {} as Contact;

  let status: Contact['status'] = 'New';
  if (item.status === 'Read' || item.status === 'Contacted') {
    status = 'Contacted';
  } else if (item.status === 'Archived' || item.status === 'Closed') {
    status = 'Closed';
  } else if (item.status === 'In Progress') {
    status = 'In Progress';
  } else if (item.status === 'New') {
    status = 'New';
  }

  const rawServices: string[] = Array.isArray(item.services) && item.services.length > 0
    ? item.services
    : (item.service ? [item.service] : []);

  const serviceFormatted = rawServices.length > 0 ? rawServices.join(' · ') : (item.service || 'Corporate Inquiry');

  return {
    id: item._id || item.id || '',
    name: item.name || 'Anonymous',
    email: item.email || '',
    phone: item.phone || '',
    company: item.company || 'N/A',
    country: item.country || 'N/A',
    service: serviceFormatted,
    services: rawServices,
    message: item.message || '',
    status: status,
    createdDate: item.createdAt || item.createdDate || new Date().toISOString(),
    notes: item.notes || []
  };
};

export const contactService = {
  // Public POST /api/contact endpoint
  async submitPublicContact(payload: PublicContactPayload): Promise<any> {
    const res = await apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    return res;
  },

  // GET /admin/dashboard
  async getDashboardStats(): Promise<DashboardStatsResponse> {
    const res = await apiRequest('/admin/dashboard', { method: 'GET' });
    return res.data;
  },

  // GET /admin/contacts
  async getAllContacts(params: GetContactsQueryParams = {}): Promise<{
    contacts: Contact[];
    pagination: GetContactsResponse['pagination'];
  }> {
    const queryParts: string[] = [];
    if (params.page) queryParts.push(`page=${params.page}`);
    if (params.limit) queryParts.push(`limit=${params.limit}`);
    if (params.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);
    
    if (params.status && params.status !== 'All') {
      let backendStatus = params.status;
      if (params.status === 'Contacted') backendStatus = 'Read';
      if (params.status === 'Closed') backendStatus = 'Archived';
      queryParts.push(`status=${encodeURIComponent(backendStatus)}`);
    }

    const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
    const res = await apiRequest(`/admin/contacts${queryString}`, { method: 'GET' });

    const rawList = Array.isArray(res.data) ? res.data : [];
    const contacts = rawList.map(mapBackendContactToFrontend);

    return {
      contacts,
      pagination: res.pagination || {
        currentPage: params.page || 1,
        limit: params.limit || 10,
        totalPages: 1,
        totalRecords: contacts.length
      }
    };
  },

  // GET /admin/contact/:id
  async getContactById(id: string): Promise<Contact> {
    const res = await apiRequest(`/admin/contact/${id}`, { method: 'GET' });
    return mapBackendContactToFrontend(res.data);
  },

  // PATCH /admin/contact/:id
  async updateStatus(id: string, status: Contact['status']): Promise<Contact> {
    let backendStatus: string = status;
    if (status === 'Contacted') backendStatus = 'Read';
    if (status === 'Closed') backendStatus = 'Archived';

    try {
      const res = await apiRequest(`/admin/contact/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: backendStatus })
      });
      return mapBackendContactToFrontend(res.data);
    } catch (err: any) {
      const res = await apiRequest(`/admin/contact/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status })
      });
      return mapBackendContactToFrontend(res.data);
    }
  },

  // DELETE /admin/contact/:id
  async deleteContact(id: string): Promise<boolean> {
    const res = await apiRequest(`/admin/contact/${id}`, {
      method: 'DELETE'
    });
    return res.success || true;
  }
};
