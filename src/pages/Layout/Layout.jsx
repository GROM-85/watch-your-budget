import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Fallback } from 'components/Fallback/Fallback';
const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Fallback/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
