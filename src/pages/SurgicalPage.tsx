import '../styles/pages.css';

export default function SurgicalPage() {
  return (
    <div className="page">
      <h2>🔪 Surgical Admission</h2>
      <div className="grid-two">
        <div className="card">
          <h3>Theatre Scheduler</h3>
          <ul>
            <li>🟢 OT 1: Appendectomy - 10:00 AM</li>
            <li>🟡 OT 2: Cesarean - 11:30 AM</li>
            <li>🔴 OT 3: Emergency Laparotomy - NOW</li>
          </ul>
          <button className="button secondary">Book Slot</button>
        </div>
        <div className="card">
          <h3>Pre-op Checklist</h3>
          <ul>
            <li>✅ Consent Signed</li>
            <li>⏳ Blood Cross-match</li>
            <li>✅ NBM Status</li>
          </ul>
          <button className="button primary">Send to Theatre</button>
        </div>
      </div>
    </div>
  );
}