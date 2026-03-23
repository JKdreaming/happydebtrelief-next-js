// NOTE: This service runs client-side and proxies through our API route to avoid CORS.
// Add 'use client' directive to any component that imports this service.


/**
 * QuinStreet Lead Post API Service
 * Proxies to /api/quinstreet to avoid CORS (QuinStreet blocks browser requests)
 */

export interface QuinStreetLeadPayload {
  LoanPurpose: string;
  CashOut: string;
  Income: string;
  Email: string;
  Dob: string;
  Fname: string;
  Lname: string;
  HomePhone: string;
  PostalCode: string;
  Street: string;
  City: string;
  State: string;
  OwnHome: string;
  TimeAtResidence: string;
  EmploymentStatus: string;
  PhoneConsentLang: string;
  getTYLink: 'yes' | 'no';
  AF: string;
  AFN: string;
  AID: string;
  SSN?: string;
  DataCaptureKey?: string;
  postStep?: string;
}

export interface QuinStreetOffer {
  rank: string;
  displayname: string;
  logo: string;
  clickurl: string;
  offer_details: {
    loanAmount: string;
    apr: string;
    monthlyPayment: string;
    loanTerm: string;
    interestRate: string;
    originationFee: string;
  };
}

export const QuinStreetService = {
  /**
   * Posts a lead via our API proxy (avoids CORS - QuinStreet blocks browser requests)
   */
  async postLead(payload: Partial<QuinStreetLeadPayload>, type: 'loan' | 'debt' = 'loan') {
    try {
      const response = await fetch('/api/quinstreet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload, type })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Request failed with status ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('QuinStreet API Error:', error);
      throw error;
    }
  }
};
