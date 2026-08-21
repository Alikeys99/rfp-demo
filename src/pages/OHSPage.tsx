import { OHS_PATIENTS } from '../constants/mockData';
import '../styles/pages.css';

export default function OHSPage() {
  return (
    <div className="page">
      <h2>🌾 Occupational Health - Farm Environmental Exposure</h2>
      <div className="grid-two">
        <div className="card">
          <h3>Risk Assessment</h3>
          {OHS_PATIENTS.map((p) => (
            <div key={p.id} className="patient-card">
              <h4>{p.name}</h4>
              <p>Exposure: {p.exposure}</p>
              <p>
                Spirometry: {p.lastSpirometry} <span className="badge">{p.risk}</span>
              </p>
              <button className="button secondary">View OHS History</button>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Equipment Integration (Audio/Vision/Spirometry)</h3>
          <div className="widget">🔊 Audiometry: Pending</div>
          <div className="widget">👁️ Vision Test: Normal</div>
          <div className="widget">💨 Spirometry: FEV1 = 3.2L (92%)</div>
          <button className="button primary">Generate OHS Report</button>
        </div>
      </div>
    </div>
  );
}