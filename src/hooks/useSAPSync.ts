import { useState, useCallback } from 'react';
import axios from 'axios';
import { SAPRequisitionResponse } from '../types';

export function useSAPSync() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [sapDoc, setSapDoc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const syncSAP = useCallback(async (item: string, qty: number) => {
    setStatus('loading');
    try {
      const res = await axios.post<SAPRequisitionResponse>('/api/sap/requisition', { item, qty });
      setSapDoc(res.data.sapDocumentNumber);
      setStatus('success');
      setError(null);
    } catch (err) {
      setStatus('error');
      setError('Failed to sync with SAP');
      console.error('SAP sync error:', err);
    }
  }, []);

  return { status, sapDoc, error, syncSAP };
}