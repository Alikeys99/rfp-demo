import '../styles/pages.css';

export default function MedicalPage() {
  return (
    <div className="page">
      <h2>🩺 Medical Admission</h2>
      <div className="card">
        <h3>Patient Demographics & Admission Form</h3>
        <p>
          <b>Name:</b> Sarah Mwale | <b>ID:</b> 20260819
        </p>
        <p>
          <b>Diagnosis:</b> Malaria (Severe) | <b>Ward:</b> Medical B3
        </p>
        <div className="inline-values">
          <span>📄 Consent Form Uploaded</span>
          <span>🩸 Labs: CBC, Malaria Smear</span>
        </div>
        <button className="button primary">Admit Patient</button>
      </div>
    </div>
  );
}