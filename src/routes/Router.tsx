import { Routes, Route } from 'react-router-dom';
import { Exercises } from '@/features/Exercises/pages/Exercises';
import { AppLayout } from '@/ui/layout/AppLayout';

const Home = () => <h1>Home / Dashboard</h1>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios" element={<Exercises />} />
      </Route>
    </Routes>
  );
};
