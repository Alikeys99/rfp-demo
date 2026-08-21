import { useState, useEffect } from 'react';
import axios from 'axios';
import { SyncStatusResponse } from '../types';

export function useSyncStatus() {
  const [syncPending, setSyncPending] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<SyncStatusResponse>('/api/sync/status');
        setSyncPending(res.data.pending);
        setError(null);
      } catch (err) {
        setError('Failed to fetch sync status');
        console.warn('Sync status error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  return { syncPending, isLoading, error };
}