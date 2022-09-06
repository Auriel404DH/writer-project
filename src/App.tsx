import { Routes, Route } from 'react-router-dom';
import { MainPage, ProfilePage } from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;
