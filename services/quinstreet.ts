// NOTE: This service uses `navigator.userAgent` and must run client-side.
// Add 'use client' directive to any component that imports this service.


/**
 * QuinStreet Lead Post API Service
 * Handles integration with Personal Loan and Debt Settlement lead endpoints
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

const STAGE_ENDPOINT = process.env.NEXT_PUBLIC_QUINSTREET_ENDPOINT || 'https://guidetolenders.quinstage.com/plpost.jsp';
const AUTH_HEADER = process.env.NEXT_PUBLIC_QUINSTREET_AUTH_HEADER || '';

export const QuinStreetService = {
  /**
   * Posts a lead to QuinStreet and returns offers or a redirect link
   */
  async postLead(payload: Partial<QuinStreetLeadPayload>, type: 'loan' | 'debt' = 'loan') {
    // Campaign Specific Credentials from PDF
    const credentials = type === 'loan'
      ? {
          AF: process.env.NEXT_PUBLIC_QUINSTREET_LOAN_AF || '79649044',
          AFN: process.env.NEXT_PUBLIC_QUINSTREET_LOAN_AFN || 'offerconversion'
        }
      : {
          AF: process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AF || '20763533',
          AFN: process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AFN || 'm3diabuy'
        };

    const fullPayload: QuinStreetLeadPayload = {
      LoanPurpose: payload.LoanPurpose || 'Debt Consolidation',
      CashOut: payload.CashOut || '15000',
      Income: payload.Income || '75000',
      Email: payload.Email || '',
      Dob: payload.Dob || '01/01/1990',
      Fname: payload.Fname || '',
      Lname: payload.Lname || '',
      HomePhone: payload.HomePhone || '',
      PostalCode: payload.PostalCode || '',
      Street: payload.Street || '',
      City: payload.City || '',
      State: payload.State || '',
      OwnHome: payload.OwnHome || 'Renter',
      TimeAtResidence: payload.TimeAtResidence || 'More 3 years',
      EmploymentStatus: payload.EmploymentStatus || '7',
      PhoneConsentLang: 'TCPA Text',
      getTYLink: 'no',
      AID: process.env.NEXT_PUBLIC_QUINSTREET_AID || '104523',
      ...credentials,
      ...payload
    };

    try {
      const response = await fetch(STAGE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': AUTH_HEADER,
          'True-Client-IP': '1.1.1.1',
          'User-Agent': navigator.userAgent
        },
        body: JSON.stringify(fullPayload)
      });

      if (!response.ok) {
        throw new Error(`QuinStreet API responded with status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('QuinStreet API Error:', error);
      throw error;
    }
  }
};
