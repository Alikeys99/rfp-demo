import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext, createAuthValue, type UserRole } from './features/auth/context/AuthContext';
import Layout from './components/Layout';

export default function App() {
  const [role, setSelectedRole] = useState<UserRole>('Doctor');
  const authValue = useMemo(() => createAuthValue(role, setSelectedRole), [role]);

  return (
    <AuthContext.Provider value={authValue}>
      <Layout>
        <Outlet />
      </Layout>
    </AuthContext.Provider>
  );
}