import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';

const Home = () => <h1>Home / Dashboard</h1>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
