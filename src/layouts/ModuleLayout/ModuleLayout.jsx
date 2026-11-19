import { Outlet, useLocation } from 'react-router';
import ModuleNav from '../../navigation/ModuleNav/ModuleNav';
import FeatureNav from '../../navigation/FeatureNav/FeatureNav';
import { findFeatureGroup, findModule } from '../../navigation/navRegistry';

const ModuleLayout = () => {
  const { pathname } = useLocation();
  const module = findModule(pathname);
  const feature = findFeatureGroup(module, pathname);

  return (
    <>
      <ModuleNav module={module} />
      {feature && <FeatureNav module={module} feature={feature} />}
      <Outlet />
    </>
  );
};

export default ModuleLayout;
