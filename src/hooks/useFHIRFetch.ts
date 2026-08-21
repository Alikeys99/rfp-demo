import { useState, useCallback } from 'react';
import axios from 'axios';
import { FHIRObservationBundle } from '../types';

export function useFHIRFetch() {
  const [fhirData, setFhirData] = useState<number[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFHIR = useCallback(async (patientId: string = '123') => {
    setIsLoading(true);
    try {
      const res = await axios.get<FHIRObservationBundle>(`/api/fhir/patient/${patientId}/observation`);
      const values = (res.data.entry || []).map((e) => e.resource.valueQuantity.value);
      setFhirData(values);
      setError(null);
    } catch (err) {
      setError('Failed to fetch FHIR data');
      console.error('FHIR fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fhirData, isLoading, error, fetchFHIR };
}