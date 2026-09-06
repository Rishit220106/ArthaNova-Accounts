import { apiRequest } from './apiClient';

export interface DataRightsPayload {
  name: string;
  email: string;
  requestType: 'Access' | 'Correction' | 'Erasure' | 'Withdrawal of Consent' | 'Grievance';
  details: string;
  referenceId?: string;
  consentGiven: boolean;
  policyVersion?: string;
}

export const dataRightsService = {
  async submitRequest(payload: DataRightsPayload): Promise<any> {
    return await apiRequest('/data-rights', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
};
