import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { buildPath, header } from '../navRegistry';

// Third-level nav for a feature group with sub-pages (navRegistry.findFeatureGroup).
const FeatureNav = ({ module, feature }) => {

  const [isScrollNav, setScrollNav] = useState('nav-top');
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const next = window.scrollY > 0 ? 'nav-scroll-fixed' : 'nav-top';
      setScrollNav(prev => (prev === next ? prev : next));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!module || !feature) return null;

  return (
    <Navbar bg="light" data-bs-theme="light" className={`nav-parent nav-scroll ${isScrollNav}`}>
      <Container>
        <Navbar.Brand as={Link} to={buildPath(module.urls, feature.urls)}>{feature.title}</Navbar.Brand>
        <Nav className="ms-auto">
          {feature.ListData.map((item, index) =>
            item?.urls && (
              <NavLink className="nav-link" to={buildPath(module.urls, item.urls)} key={index}>
                {item.title}
              </NavLink>
            )
          )}
        </Nav>
        <form className="nav-form nav-item-scroll-show">
          {header.userLogin?.loginUrl && (
            <Link to={header.userLogin.loginUrl} className="btn btn-outline-magenta" target="_blank" rel="noopener">
              {header.userLogin.title}
            </Link>
          )}
          {header.signup?.url && (
            <Link to={header.signup.url} className="btn btn-gradient">
              {header.signup.title}
            </Link>
          )}
        </form>
      </Container>
    </Navbar>
  );
};

export default FeatureNav;
