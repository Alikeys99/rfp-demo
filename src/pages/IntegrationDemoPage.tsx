import { useSAPSync } from '../hooks/useSAPSync';
import { useFHIRFetch } from '../hooks/useFHIRFetch';
import '../styles/pages.css';

export default function IntegrationDemoPage() {
  const { status: sapStatus, sapDoc, syncSAP } = useSAPSync();
  const { fhirData, fetchFHIR } = useFHIRFetch();

  const handleSyncSAP = () => syncSAP('Paracetamol', 100);

  return (
    <div className="page">
      <h2>⚡ System Integration & Interoperability (SAP / FHIR)</h2>
      <div className="grid-two">
        <div className="card" style={{ background: '#f0f4ff' }}>
          <h2 style={{ color: '#1d4ed8' }}>SAP S/4HANA</h2>
          <button className="button primary" onClick={handleSyncSAP} disabled={sapStatus === 'loading'}>
            {sapStatus === 'loading' ? '⏳ Syncing...' : '📦 Re-order Stock'}
          </button>
          <p>Status: {sapStatus === 'success' ? `✅ PR Created: ${sapDoc}` : 'Waiting...'}</p>
        </div>
        <div className="card" style={{ background: '#f0fdf4' }}>
          <h2 style={{ color: '#16a34a' }}>HL7 FHIR Lab Results</h2>
          <button className="button secondary" onClick={() => fetchFHIR()}>
            📊 Fetch RBC/Hb
          </button>
          {fhirData && <p>Values: {fhirData.join(', ')}</p>}
        </div>
      </div>
    </div>
  );
}