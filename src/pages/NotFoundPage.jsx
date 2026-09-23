import { useLocation, useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StatusBlock
      emoji="🍂"
      title="Такой страницы нет"
      subtitle={`Путь "${location.pathname}" не совпал ни с одним маршрутом.`}
      actionLabel="Вернуться на главную"
      onAction={() => navigate('/')}
    />
  );
}
