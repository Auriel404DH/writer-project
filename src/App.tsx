import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { MainPage, ProfilePage } from './pages';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
