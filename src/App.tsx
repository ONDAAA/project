import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PeriodicTablePage from './pages/PeriodicTablePage';
import GuidePage from './pages/GuidePage';
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';
import NotFoundPage from './pages/NotFoundPage';
import CompoundsPage from './pages/CompoundsPage';
import PrivacyPage from './pages/PrivacyPage';
import ToCPage from './pages/ToCPage';
import OxidyPage from './pages/GuidePages/OxidyPage';
import ScrollToTop from './components/ScrollToTop'; // Importuj komponentu ScrollToTop


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="periodic-table" element={<PeriodicTablePage />} />
          <Route path="guide" element={<GuidePage />} />
          <Route path="tests" element={<TestPage />} />
          <Route path="compounds" element={<CompoundsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="toc" element={<ToCPage />} />
          <Route path="oxidy" element={<OxidyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;