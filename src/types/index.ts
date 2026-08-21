// Patient Types
export interface Patient {
  id: number;
  name: string;
  nationalId?: string;
  clinicalNotes?: string;
}

export interface TriagePatient extends Patient {
  triage: 'Red' | 'Yellow' | 'Green';
  condition: string;
  status: string;
}

export interface OHSPatient extends Patient {
  exposure: string;
  lastSpirometry: string;
  risk: 'Low' | 'Medium' | 'High';
}

// API Response Types
export interface SyncStatusResponse {
  pending: number;
}

export interface SAPRequisitionResponse {
  sapDocumentNumber: string;
}

export interface FHIRObservation {
  resource: {
    valueQuantity: {
      value: number;
    };
  };
}

export interface FHIRObservationBundle {
  entry: FHIRObservation[];
}

// Auth Types
export type UserRole = 'Nurse' | 'Doctor' | 'Pharmacist' | 'Cashier' | 'Admin';

export interface AuthContextType {
  role: UserRole;
  permissions: string[];
  setRole: (role: UserRole) => void;
}
