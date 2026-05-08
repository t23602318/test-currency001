import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { DashboardPage } from './pages/DashboardPage';
import { CurrencyQueryPage } from './pages/CurrencyQueryPage';
import { CurrencyAdminPage } from './pages/CurrencyAdminPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/currency" element={<CurrencyQueryPage />} />
      <Route path="/currency/admin" element={<CurrencyAdminPage />} />
    </Routes>
  );
}

export default App;