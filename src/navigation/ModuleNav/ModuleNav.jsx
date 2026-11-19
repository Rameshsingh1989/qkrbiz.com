import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { buildPath, getModuleNav, header, HEADER_HIDDEN_PATHS, hrLinks, isPathWithin } from '../navRegistry';
import useSanitizeHtml from "../../hooks/useSanitizeHtml";

import './ModuleNav.scss';

const stripTags = (html) => html?.replace(/<[^>]+>/g, "");

// Second-level nav for a product module. Which menus it shows comes from the
// module's `nav` config (navRegistry.getModuleNav).
const ModuleNav = ({ module }) => {
  const sanitizeHtml = useSanitizeHtml();
  const location = useLocation();

  const isActivePath = useCallback(
    (path) => isPathWithin(location.pathname, path),
    [location.pathname]
  );

  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const closeOffcanvas = () => setOffcanvasShow(false);

  const isThirdOutlet = HEADER_HIDDEN_PATHS.includes(location.pathname);

  const [navTopClass, setNavTopClass] = useState(isThirdOutlet ? 'fixed-top' : 'nav-top');

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const next = window.scrollY < 5
        ? (isThirdOutlet ? 'fixed-top' : 'nav-top')
        : (isThirdOutlet ? 'nav-desktop-hide' : 'fixed-top');
      setNavTopClass(prev => (prev === next ? prev : next));
    };

    // Reset to this outlet's resting class when the outlet changes.
    setNavTopClass(isThirdOutlet ? 'fixed-top' : 'nav-top');

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isThirdOutlet]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth > 991) setOffcanvasShow(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!module) return null;

  const nav = getModuleNav(module);
  const baseUrl = module.urls;
  const moduleName = module.title;
  const features = module.ProductList || [];

  const mobileCta = nav.mobileCta === 'login'
    ? <Link to={header.userLogin.loginUrl} className="btn btn-outline-magenta btn-login" target="_blank" rel="noopener">{header.userLogin.title}</Link>
    : <Link to={header.signup.url} className="btn btn-outline-magenta btn-login">{header.signup.title}</Link>;

  const featureItems = features.map((feature, index) => {
    const fullPath = buildPath(baseUrl, feature.urls);
    const itemProps = {
      as: Link,
      to: fullPath,
      className: isActivePath(fullPath) ? 'active' : '',
      onClick: closeOffcanvas,
    };

    if (nav.featuresMenu.variant === 'list') {
      return <NavDropdown.Item key={index} {...itemProps}>{feature.title}</NavDropdown.Item>;
    }

    return (
      <div className="col-lg-6" key={index}>
        <NavDropdown.Item {...itemProps}>
          <span className="logo-part">
            <span className={`logo ${feature.iconClass}`}><img loading="lazy" src={feature.icon} alt={stripTags(feature.title)} /> </span>
            <span className="titles">
              <h5>{feature.title}</h5>
              <p className="xs-d-block">{feature.desc}</p>
            </span>
          </span>
        </NavDropdown.Item>
      </div>
    );
  });

  return (
      <Navbar expand="lg" bg="light" data-bs-theme="light" className={`mobile-fixed-top nav-parent ${navTopClass}`}>
        <Container>
          <span>
            <span>
              <Navbar.Toggle aria-controls="module-offcanvas" onClick={() => setOffcanvasShow(true)} />
              <Navbar.Brand as={Link} to={baseUrl} className="logo-scroll-hide" dangerouslySetInnerHTML={sanitizeHtml(moduleName)} />
            </span>
            <Navbar.Brand as={Link} to={baseUrl} className="logo-scroll-show"><img className="qkr-biz" src={module.logo} alt={stripTags(moduleName)} /></Navbar.Brand>
          </span>
          {mobileCta}
          <Navbar.Offcanvas
            id="module-offcanvas"
            aria-labelledby="module-offcanvas-label"
            placement="start"
            show={offcanvasShow}
            onHide={closeOffcanvas}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="module-offcanvas-label">
                <Link to={baseUrl} className="navbar-brand" onClick={closeOffcanvas}>
                  <img className="qkr-biz" src={module.logo} alt={stripTags(moduleName)} />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto">

                {features.length > 0 && (
                  nav.featuresMenu.variant === 'list' ? (
                    <NavDropdown renderMenuOnMount title={nav.featuresMenu.title} id="features-dropdown" className="resource-menu">
                      {featureItems}
                    </NavDropdown>
                  ) : (
                    <NavDropdown renderMenuOnMount title={nav.featuresMenu.title} id="features-dropdown" className="mega-menu">
                      <div className="row g-2">{featureItems}</div>
                    </NavDropdown>
                  )
                )}

                {nav.showSolutions && (
                  <NavDropdown renderMenuOnMount title="Solutions" id="solution-dropdown" className="company-menu">
                    {nav.showIndustries && (
                      <NavDropdown renderMenuOnMount title="Industry Solutions" id="module-industries-submenu" className="dropdown-submenu">
                        {header.byIndustry.map((indu, index) => (
                          <NavDropdown.Item as={Link} to={indu.urls} className={isActivePath(indu.urls) ? 'active' : ''} key={index} onClick={closeOffcanvas}>
                            {indu.title}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    )}
                    {nav.showCities && (
                      <NavDropdown renderMenuOnMount title="HRMS by Location" id="module-hrms-city-submenu" className="dropdown-submenu">
                        {header.qkrHrmsCityData.map((prData, prIndex) => (
                          <NavDropdown.Item as={Link} to={prData.urls} className={isActivePath(prData.urls) ? 'active' : ''} onClick={closeOffcanvas} key={prIndex}>{prData.title} </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    )}
                    {nav.showComparison && (
                      <NavDropdown renderMenuOnMount title="HRMS Comparisons" id="module-comparison-submenu" className="dropdown-submenu">
                        {header.othervsQkrhr.map((cmp, ci) => (
                            <NavDropdown.Item as={Link} to={cmp.urls} className={isActivePath(cmp.urls) ? 'active' : ''} key={ci} onClick={closeOffcanvas}>
                              {cmp.title}
                            </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    )}
                  </NavDropdown>
                )}

                <NavDropdown renderMenuOnMount title="HR Resources" id="hr-resources-dropdown" className="resource-menu">
                  <NavDropdown renderMenuOnMount title="Platform Features" id="module-platform-features-submenu" className="dropdown-submenu">
                    {header.PlatformFeatureData.map((prData, prIndex) => (
                      <NavDropdown.Item as={Link} to={prData.urls} className={isActivePath(prData.urls) ? 'active' : ''} onClick={closeOffcanvas} key={prIndex}>{prData.title} </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  {/* <NavDropdown renderMenuOnMount title="Free Tools" id="module-free-tools-submenu" className="dropdown-submenu">
                    {header.freeTools.map((tool) => (
                      <NavDropdown.Item as={Link} to={tool.urls} className={isActivePath(tool.urls) ? 'active' : ''} onClick={closeOffcanvas} key={tool.id}>{tool.title}</NavDropdown.Item>
                    ))}
                  </NavDropdown> */}
                  {hrLinks
                    .filter((link) => link.id === 2 || link.id === 3)
                    .map((link, i) => (
                      <NavDropdown.Item as={Link} to={link.fullPath} className={isActivePath(link.fullPath) ? 'active' : ''} key={i} onClick={closeOffcanvas}>
                        {link.title}
                      </NavDropdown.Item>
                  ))}
                </NavDropdown>

                {hrLinks
                  .filter((link) => link.id === 1)
                  .map((link, i) => (
                    <Nav.Link as={Link} to={link.fullPath} className={isActivePath(link.fullPath) ? 'active' : ''} key={i} onClick={closeOffcanvas}>
                      {link.title}
                    </Nav.Link>
                  ))}

                <Nav.Link as={Link} to="/" onClick={closeOffcanvas} className="nav-item-hide">All Products</Nav.Link>
              </Nav>
              {/* Form Buttons (Only on scroll-down) */}
              <form className="nav-form nav-item-scroll-show">
                <Link to={header.userLogin.loginUrl} className="btn btn-outline-magenta" target="_blank" rel="noopener">{header.userLogin.title}</Link>
                <Link to={header.signup.url} className="btn btn-gradient" onClick={closeOffcanvas}>{header.signup.title}</Link>
              </form>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  );
};

export default ModuleNav;
