import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../features/auth/context/AuthContext';
import { useOfflineQueue } from '../hooks/useOfflineQueue';
import { useSyncStatus } from '../hooks/useSyncStatus';
import SyncQueuePanel from '../features/offline/SyncQueuePanel';
import '../styles/layout.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { processSyncQueue } = useOfflineQueue();
  const { syncPending } = useSyncStatus();

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <strong>🏥 RFP EMR</strong>
          <span className="badge">v2.0</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/emergency">🚨 Emergency</Link>
          <Link to="/ohs">🌾 OHS</Link>
          <Link to="/medical">🩺 Medical</Link>
          <Link to="/surgical">🔪 Surgical</Link>
          <Link to="/integration-demo">⚡ Integrations</Link>
        </nav>
        <div className="nav-right">
          <button className="sync-btn" onClick={processSyncQueue}>
            📡 Sync ({syncPending} pending)
          </button>
          <div className="sync-panel-divider">
            <SyncQueuePanel />
          </div>
        </div>
      </header>
      <main className="main-content">{children}</main>
    </>
  );
}