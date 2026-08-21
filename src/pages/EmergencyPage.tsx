import { EMERGENCY_PATIENTS } from '../constants/mockData';
import '../styles/pages.css';

export default function EmergencyPage() {
  return (
    <div className="page">
      <h2>🚨 Emergency Case Flow</h2>
      <div className="grid-two">
        <div className="card">
          <h3>Triage Queue</h3>
          <ul className="patient-list">
            {EMERGENCY_PATIENTS.map((p) => (
              <li key={p.id} className={`triage-${p.triage.toLowerCase()}`}>
                <span>
                  <b>{p.name}</b> - {p.condition}
                </span>
                <span className="badge">
                  {p.triage} | {p.status}
                </span>
              </li>
            ))}
          </ul>
          <button className="button secondary">Admit to Observation</button>
        </div>
        <div className="card">
          <h3>Real-time Vitals</h3>
          <p className="muted">(Integration with Biometrics/OHS Devices)</p>
          <div>❤️ HR: 88 bpm | 💨 SpO2: 98% | 📈 BP: 120/80</div>
          <button className="button primary">Complete Emergency Assessment</button>
        </div>
      </div>
    </div>
  );
}