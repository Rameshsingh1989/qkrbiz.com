import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import Notfound from '../components/NotFound/Notfound';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { LAYOUTS, ROUTE_GROUPS } from './routeManifest';

// Routes are defined per module in src/module/**/<name>.routes.js and listed in
// routeManifest.js. Lazy components are created once here at module load —
// never per render — so each page keeps its own chunk and stable identity.
const Layouts = Object.fromEntries(
  Object.entries(LAYOUTS).map(([name, load]) => [name, lazy(load)])
);

const groups = ROUTE_GROUPS.map((group) => ({
  ...group,
  Layout: group.layout ? Layouts[group.layout] : null,
  routes: group.routes.map((route) => ({ ...route, Page: lazy(route.page) })),
}));

// Only the SSR-fetched props a page asked for via `ssrProps`.
const pickProps = (names = [], props) =>
  Object.fromEntries(names.map((name) => [name, props[name]]));

// Props: initialBlogs, initialBlog, initialGlossaryData, initialGlossary
// (SSR payload, forwarded to pages that list them in `ssrProps`).
function AppRoutes(props) {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {groups.map(({ basePath, Layout, routes }) => (
          // No layout → no element: React Router renders the child route directly.
          <Route key={basePath} path={basePath} element={Layout ? <Layout /> : undefined}>
            {routes.map((route) => (
              <Route
                key={route.index ? 'index' : route.path}
                index={route.index}
                path={route.index ? undefined : route.path}
                element={<route.Page {...pickProps(route.ssrProps, props)} />}
              />
            ))}
          </Route>
        ))}

        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
