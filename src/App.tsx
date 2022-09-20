import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/sharedC/mainLayout/mainLayout';
import { MainPage, ProfilePage, LikedPage, SubscriptionPage, EditorPage } from './pages';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
