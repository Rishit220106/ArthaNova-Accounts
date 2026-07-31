export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  country: string;
  service?: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Closed';
  createdDate: string;
  notes?: string[];
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  type: 'status_change' | 'new_contact' | 'delete' | 'system';
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  lastLogin: string;
}

export const INITIAL_ADMIN_USER: AdminUser = {
  id: 'usr_001',
  name: 'Alexander Wright',
  email: 'admin@arthanov.com',
  role: 'Senior Managing Partner',
  department: 'Tax & Corporate Advisory',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
  lastLogin: '2026-07-26 18:42:00'
};

export const INITIAL_CONTACTS: Contact[] = [
  {
    id: 'CNT-1001',
    name: 'Marcus Vance',
    email: 'm.vance@vanceholdings.co.uk',
    phone: '+44 20 7946 0912',
    company: 'Vance Holdings Ltd',
    country: 'United Kingdom',
    service: 'Corporate Restructuring & Tax Planning',
    message: 'We are seeking guidance on cross-border tax optimization and corporate restructuring for our European operations.',
    status: 'New',
    createdDate: '2026-07-26T10:15:00Z',
    notes: ['Initial inquiry received via web portal. High-priority client candidate.']
  },
  {
    id: 'CNT-1002',
    name: 'Elena Rostova',
    email: 'elena@rostovagroup.com',
    phone: '+41 22 819 3000',
    company: 'Rostova Capital AG',
    country: 'Switzerland',
    service: 'Audit & Compliance',
    message: 'Looking for a comprehensive audit of our asset management subsidiary prior to Q3 board meeting.',
    status: 'Contacted',
    createdDate: '2026-07-26T08:30:00Z',
    notes: ['Follow-up email sent by Senior Consultant. Scheduled introductory call for tomorrow.']
  },
  {
    id: 'CNT-1003',
    name: 'David Chen',
    email: 'dchen@apextech.sg',
    phone: '+65 6789 4321',
    company: 'Apex Tech Solutions',
    country: 'Singapore',
    service: 'Transfer Pricing & Financial Reporting',
    message: 'We require transfer pricing documentation and ongoing tax advisory for our expanding APAC entities.',
    status: 'In Progress',
    createdDate: '2026-07-25T14:45:00Z',
    notes: ['Engagement proposal drafted. Awaiting financial statements review.']
  },
  {
    id: 'CNT-1004',
    name: 'Sophia Al-Mansoor',
    email: 's.almansoor@gulfventures.ae',
    phone: '+971 4 312 8899',
    company: 'Gulf Ventures LLC',
    country: 'United Arab Emirates',
    service: 'International Tax Structuring',
    message: 'Interested in setting up a regional holding company with optimal tax efficiency across UAE and Europe.',
    status: 'Closed',
    createdDate: '2026-07-24T11:20:00Z',
    notes: ['Contract signed successfully. Account transferred to Onboarding Team.']
  },
  {
    id: 'CNT-1005',
    name: 'Robert Miller',
    email: 'rmiller@bluecrest.com',
    phone: '+1 212 555 0198',
    company: 'Bluecrest Real Estate',
    country: 'United States',
    service: 'Real Estate Tax Valuation',
    message: 'Requesting valuation and tax compliance services for our commercial portfolio in North America.',
    status: 'New',
    createdDate: '2026-07-26T16:05:00Z',
    notes: ['Form submitted today.']
  },
  {
    id: 'CNT-1006',
    name: 'Amara Okafor',
    email: 'amara@africorp.ng',
    phone: '+234 1 271 9000',
    company: 'AfriCorp Logistics',
    country: 'Nigeria',
    service: 'Forensic Accounting',
    message: 'We require independent forensic auditing services for a recent joint venture audit.',
    status: 'Contacted',
    createdDate: '2026-07-23T09:10:00Z',
    notes: ['Phone consultation completed on July 24.']
  },
  {
    id: 'CNT-1007',
    name: 'Jean-Pierre Dubois',
    email: 'jp.dubois@duboislux.lu',
    phone: '+352 24 55 12 00',
    company: 'Dubois Asset Management',
    country: 'Luxembourg',
    service: 'Private Client Wealth Tax',
    message: 'Need specialized advice regarding cross-border estate planning and wealth structuring for UHNW families.',
    status: 'In Progress',
    createdDate: '2026-07-22T15:40:00Z',
    notes: ['Drafting wealth advisory roadmap.']
  },
  {
    id: 'CNT-1008',
    name: 'Hiroshi Tanaka',
    email: 'tanaka@nippondevelopments.jp',
    phone: '+81 3 5555 0143',
    company: 'Nippon Developments',
    country: 'Japan',
    service: 'M&A Due Diligence',
    message: 'We are evaluating an acquisition of a UK-based logistics enterprise and need financial & tax due diligence.',
    status: 'Closed',
    createdDate: '2026-07-20T13:00:00Z',
    notes: ['Due diligence report delivered. Retained for transaction closing.']
  },
  {
    id: 'CNT-1009',
    name: 'Camila Rodriguez',
    email: 'c.rodriguez@latambank.co',
    phone: '+57 1 310 9988',
    company: 'LatAm FinTech Holdings',
    country: 'Colombia',
    service: 'Regulatory Compliance',
    message: 'Seeking corporate tax advisory for our expansion into international payment gateways.',
    status: 'New',
    createdDate: '2026-07-26T12:00:00Z',
    notes: ['Pending initial review.']
  },
  {
    id: 'CNT-1010',
    name: 'Klaus Lindner',
    email: 'k.lindner@bavariainnovations.de',
    phone: '+49 89 2018 4400',
    company: 'Bavaria Innovations GmbH',
    country: 'Germany',
    service: 'R&D Tax Incentives',
    message: 'Inquiring about international R&D tax credit eligibility and claims filing assistance.',
    status: 'Contacted',
    createdDate: '2026-07-21T10:45:00Z',
    notes: ['Sent preliminary assessment questionnaire.']
  }
];

export const INITIAL_ACTIVITIES: ActivityItem[] = [
  {
    id: 'act-1',
    user: 'Alexander Wright',
    action: 'updated status to In Progress',
    target: 'David Chen (Apex Tech Solutions)',
    timestamp: '10 minutes ago',
    type: 'status_change'
  },
  {
    id: 'act-2',
    user: 'System',
    action: 'received new contact form submission',
    target: 'Robert Miller (Bluecrest Real Estate)',
    timestamp: '3 hours ago',
    type: 'new_contact'
  },
  {
    id: 'act-3',
    user: 'Alexander Wright',
    action: 'closed contact case',
    target: 'Sophia Al-Mansoor (Gulf Ventures LLC)',
    timestamp: '5 hours ago',
    type: 'status_change'
  },
  {
    id: 'act-4',
    user: 'Alexander Wright',
    action: 'added follow-up note to',
    target: 'Elena Rostova (Rostova Capital AG)',
    timestamp: '1 day ago',
    type: 'system'
  },
  {
    id: 'act-5',
    user: 'System',
    action: 'received new contact form submission',
    target: 'Marcus Vance (Vance Holdings Ltd)',
    timestamp: '1 day ago',
    type: 'new_contact'
  }
];
