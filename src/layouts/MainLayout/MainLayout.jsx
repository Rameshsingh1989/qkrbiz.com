import { useEffect } from "react";
import { useLocation, Outlet } from "react-router";
import MainNav from "../../navigation/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";
import { FOOTER_HIDDEN_PATHS, HEADER_HIDDEN_PATHS } from "../../navigation/navRegistry";

const MainLayout = () => {
  const location = useLocation();

  const isNotDisplayHeader = HEADER_HIDDEN_PATHS.includes(location.pathname);
  const isNotDisplayFooter = FOOTER_HIDDEN_PATHS.includes(location.pathname);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      {!isNotDisplayHeader && <MainNav />}
      <main className="main-content">
        <Outlet />
      </main>
      {!isNotDisplayFooter && <Footer />}
    </>
  );
};

export default MainLayout;
