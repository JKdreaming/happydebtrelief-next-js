import { NextRequest, NextResponse } from 'next/server';

const QUINSTREET_ENDPOINT = process.env.QUINSTREET_ENDPOINT || process.env.NEXT_PUBLIC_QUINSTREET_ENDPOINT || 'https://securegtl.quinstreet.com/plpost.jsp';
const AUTH_HEADER = process.env.QUINSTREET_AUTH_HEADER || process.env.NEXT_PUBLIC_QUINSTREET_AUTH_HEADER || '';

export async function POST(request: NextRequest) {
  try {
    const { payload, type } = await request.json();
    const credentials = type === 'loan'
      ? {
          AF: process.env.QUINSTREET_LOAN_AF || process.env.NEXT_PUBLIC_QUINSTREET_LOAN_AF || '79649044',
          AFN: process.env.QUINSTREET_LOAN_AFN || process.env.NEXT_PUBLIC_QUINSTREET_LOAN_AFN || 'offerconversion'
        }
      : {
          AF: process.env.QUINSTREET_DEBT_AF || process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AF || '20763533',
          AFN: process.env.QUINSTREET_DEBT_AFN || process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AFN || 'm3diabuy'
        };

    const fullPayload = {
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
      getTYLink: 'no' as const,
      AID: process.env.QUINSTREET_AID || process.env.NEXT_PUBLIC_QUINSTREET_AID || '104523',
      ...credentials,
      ...payload
    };

    const response = await fetch(QUINSTREET_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTH_HEADER,
        'True-Client-IP': request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '1.1.1.1',
        'User-Agent': request.headers.get('user-agent') || 'Mozilla/5.0'
      },
      body: JSON.stringify(fullPayload)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        { error: data.Reason || `QuinStreet API responded with status: ${response.status}` },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('QuinStreet API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
