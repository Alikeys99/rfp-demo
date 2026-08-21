import { TriagePatient, OHSPatient } from '../types';

export const EMERGENCY_PATIENTS: TriagePatient[] = [
  { id: 1, name: 'Grace Moyo', triage: 'Red', condition: 'Chest Pain', status: 'In Triage' },
  { id: 2, name: 'John Banda', triage: 'Yellow', condition: 'Fracture', status: 'Waiting' },
  { id: 3, name: 'Mary Phiri', triage: 'Green', condition: 'Mild Fever', status: 'Discharged' },
];

export const OHS_PATIENTS: OHSPatient[] = [
  { id: 101, name: 'Peter Kamanga', exposure: 'Pesticides', lastSpirometry: '92%', risk: 'High' },
];

export const USER_ROLES = ['Nurse', 'Doctor', 'Pharmacist', 'Cashier', 'Admin'] as const;