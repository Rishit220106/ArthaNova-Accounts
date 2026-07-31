import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Contact, ActivityItem } from '../services/mockData';
import { contactService, GetContactsQueryParams } from '../services/contactService';

interface ContactContextType {
  contacts: Contact[];
  activities: ActivityItem[];
  stats: {
    total: number;
    newCount: number;
    contactedCount: number;
    closedCount: number;
    todayCount: number;
  };
  pagination: {
    currentPage: number;
    limit: number;
    totalPages: number;
    totalRecords: number;
  };
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  fetchDashboardStats: () => Promise<void>;
  fetchContacts: (params?: GetContactsQueryParams) => Promise<void>;
  updateStatus: (id: string, status: Contact['status'], note?: string) => Promise<void>;
  deleteContact: (id: string) => Promise<void>;
  getContact: (id: string) => Promise<Contact | undefined>;
  refreshContacts: () => Promise<void>;
  clearError: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10,
    totalPages: 1,
    totalRecords: 0
  });

  const [stats, setStats] = useState({
    total: 0,
    newCount: 0,
    contactedCount: 0,
    closedCount: 0,
    todayCount: 0
  });

  // Fetch real Dashboard Stats from GET /admin/dashboard
  const fetchDashboardStats = useCallback(async () => {
    try {
      const data = await contactService.getDashboardStats();
      setStats({
        total: data.totalContacts || 0,
        newCount: data.newContacts || 0,
        contactedCount: data.readContacts || 0,
        closedCount: data.archivedContacts || 0,
        todayCount: data.todayContacts || 0
      });
    } catch (err: any) {
      console.error('Error fetching dashboard stats:', err);
    }
  }, []);

  // Fetch real Contacts from GET /admin/contacts
  const fetchContacts = useCallback(async (params: GetContactsQueryParams = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await contactService.getAllContacts({
        page: params.page || 1,
        limit: params.limit || 10,
        search: params.search !== undefined ? params.search : searchQuery,
        status: params.status !== undefined ? params.status : statusFilter
      });

      setContacts(response.contacts);
      setPagination(response.pagination);

      // Generate activity log items dynamically from contact data for UI presentation
      const generatedActivities: ActivityItem[] = response.contacts.slice(0, 5).map((c, i) => ({
        id: `act-${c.id}-${i}`,
        user: 'Admin',
        action: c.status === 'New' ? 'received contact inquiry' : `updated status to '${c.status}'`,
        target: `${c.name} (${c.company})`,
        timestamp: new Date(c.createdDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: c.status === 'New' ? 'new_contact' : 'status_change'
      }));
      setActivities(generatedActivities);

    } catch (err: any) {
      setError(err.message || 'Failed to load contacts from server.');
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery, statusFilter]);

  const refreshContacts = useCallback(async () => {
    await Promise.all([fetchDashboardStats(), fetchContacts()]);
  }, [fetchDashboardStats, fetchContacts]);

  useEffect(() => {
    refreshContacts();
  }, [refreshContacts]);

  // Update Status via PATCH /admin/contact/:id
  const updateStatus = async (id: string, status: Contact['status'], note?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const updated = await contactService.updateStatus(id, status);
      
      // Update local state
      setContacts((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: updated.status } : c))
      );

      // Refresh stats & contacts
      await refreshContacts();
    } catch (err: any) {
      setError(err.message || 'Failed to update contact status.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Delete Contact via DELETE /admin/contact/:id
  const deleteContact = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await contactService.deleteContact(id);

      setContacts((prev) => prev.filter((c) => c.id !== id));
      await refreshContacts();
    } catch (err: any) {
      setError(err.message || 'Failed to delete contact.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const getContact = async (id: string): Promise<Contact | undefined> => {
    // Check local state first
    const existing = contacts.find((c) => c.id === id);
    if (existing) return existing;

    try {
      return await contactService.getContactById(id);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch contact details.');
      return undefined;
    }
  };

  const clearError = () => setError(null);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        activities,
        stats,
        pagination,
        isLoading,
        error,
        searchQuery,
        setSearchQuery,
        statusFilter,
        setStatusFilter,
        fetchDashboardStats,
        fetchContacts,
        updateStatus,
        deleteContact,
        getContact,
        refreshContacts,
        clearError
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within a ContactProvider');
  }
  return context;
};
