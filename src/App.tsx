import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/sharedC/mainLayout/mainLayout';
import { MainPage, ProfilePage, LikedPage, SubscriptionPage, EditorPage} from './pages';
import ArticlePage from './pages/articlePage/articlePage';
import Settings from './pages/SettingsPage/SettingsPage';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/subscriptions" element={<SubscriptionPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/Profile/settings" element={<Settings />} />
        <Route path='/articlePage' element={<ArticlePage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
