import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { LoginPage, TodoPage, NotFound } from '../pages';

export default function App() {
  return (
    <div className={css.todoApp}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
