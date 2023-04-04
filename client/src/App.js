import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  SIGNIN
} from './routes';

import {
  SignIn
} from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path={SIGNIN}
          element={
            <SignIn />
          }
        />
        <Route path='*' element={<Navigate to={SIGNIN} />} />
      </Routes>
    </BrowserRouter>
  );
};