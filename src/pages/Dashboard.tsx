import { useMemo, useState, useCallback } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../features/auth/context/AuthContext';
import { useOfflineQueue } from '../hooks/useOfflineQueue';
import PatientWidget from '../features/dashboard/PatientWidget';
import { USER_ROLES } from '../constants/mockData';
import '../styles/dashboard.css';

export default function Dashboard() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Dashboard must be used within AuthContext.Provider');

  const { role, permissions } = context;
  const { savePatientOffline } = useOfflineQueue();

  const hasAccess = useCallback(
    (feature: string) => permissions.includes('all') || permissions.includes(feature),
    [permissions]
  );

  const handleSavePatient = useCallback(() => {
    savePatientOffline({
      name: `Offline_${Date.now()}`,
      nationalId: `9001${Math.floor(Math.random() * 10000)}`,
      clinicalNotes: 'Saved offline at ' + new Date().toISOString(),
    });
  }, [savePatientOffline]);

  return (
    <div className="page">
      <div className="dashboard-grid">
        {/* Role Selector */}
        <div className="card role-card">
          <h3>👤 Practice Legality (3.1.1)</h3>
          <div className="role-toggle">
            {USER_ROLES.map((option) => (
              <button
                key={option}
                className={`role-chip ${role === option ? 'active' : ''}`}
                onClick={() => context.setRole(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="muted">Current Permissions: {permissions.join(', ')}</p>
        </div>

        {/* Offline Demo */}
        <div className="card">
          <h3>📴 Offline Patient Capture</h3>
          <button className="button primary" onClick={handleSavePatient}>
            Save Patient Offline
          </button>
          <p className="muted">Check the Sync button in the navbar.</p>
        </div>

        {/* Patient Widget */}
        <PatientWidget />

        {/* Dynamic Widget based on Role */}
        <div className="card">
          <h3>📋 Role-Specific Widget</h3>
          {hasAccess('prescribe') && <div className="widget">💊 <b>Prescription Pad</b> (Doctor only)</div>}
          {hasAccess('billing') && <div className="widget">💰 <b>Cashier Terminal</b> (Cashier only)</div>}
          {hasAccess('pharmacy') && <div className="widget">📦 <b>Inventory Stock</b> (Pharmacist only)</div>}
          {hasAccess('audit_logs') && <div className="widget">🔐 <b>Audit Trail Viewer</b> (Admin only)</div>}
        </div>
      </div>
    </div>
  );
}