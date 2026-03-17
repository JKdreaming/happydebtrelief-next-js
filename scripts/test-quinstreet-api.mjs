#!/usr/bin/env node
/**
 * Quick test of QuinStreet API connection.
 * Uses test data - run with: node --env-file=.env scripts/test-quinstreet-api.mjs
 */

const ENDPOINT = process.env.NEXT_PUBLIC_QUINSTREET_ENDPOINT;
const AUTH_HEADER = process.env.NEXT_PUBLIC_QUINSTREET_AUTH_HEADER;
const DEBT_AF = process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AF;
const DEBT_AFN = process.env.NEXT_PUBLIC_QUINSTREET_DEBT_AFN;
const AID = process.env.NEXT_PUBLIC_QUINSTREET_AID;

if (!ENDPOINT || !AUTH_HEADER) {
  console.error('Missing env vars. Run with: node --env-file=.env scripts/test-quinstreet-api.mjs');
  process.exit(1);
}

const testPayload = {
  LoanPurpose: 'Debt Consolidation',
  CashOut: '15000',
  Income: '75000',
  Email: 'test@example.com',
  Dob: '01/01/1990',
  Fname: 'TEST',
  Lname: 'USER',
  HomePhone: '5551234567',
  PostalCode: '90272',
  Street: '123 TEST ST',
  City: 'LOS ANGELES',
  State: 'CA',
  OwnHome: 'Renter',
  TimeAtResidence: 'More 3 years',
  EmploymentStatus: '7',
  PhoneConsentLang: 'TCPA Text',
  getTYLink: 'no',
  AF: DEBT_AF || '119433544',
  AFN: DEBT_AFN || 'YukonProject_BetterDebt_PLDP',
  AID: AID || '104523',
};

console.log('Testing QuinStreet API...');
console.log('Endpoint:', ENDPOINT);
console.log('Auth header present:', !!AUTH_HEADER);
console.log('');

try {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': AUTH_HEADER,
      'True-Client-IP': '1.1.1.1',
      'User-Agent': 'Mozilla/5.0 (Test Script)',
    },
    body: JSON.stringify(testPayload),
  });

  console.log('Status:', res.status, res.statusText);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  console.log('Response:', typeof data === 'object' ? JSON.stringify(data, null, 2) : data);

  if (res.ok) {
    console.log('\n✓ API connection successful');
  } else {
    console.log('\n✗ API returned error status');
    process.exit(1);
  }
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
