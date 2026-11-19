import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { HeaderMenuData } from '../data/HeaderMenuData';
import { hrLinks, navRouteUrls } from '../navRegistry';
import NavigationImg from '../../assets/NavigationImg';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';

import './MainNav.scss';

function MainNav() {
  const sanitizeHtml = useSanitizeHtml();
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const location = useLocation();
  const [navClass, setNavClass] = useState('');

  const isActivePath = useCallback((path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  }, [location.pathname]);
  
  const isModuleHome = navRouteUrls.includes(location.pathname);

  // Only module home pages restyle the nav on scroll; elsewhere skip the
  // listener entirely instead of setting '' on every scroll tick.
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!isModuleHome) {
      setNavClass('');
      return;
    }

    const updateClass = () => {
      setNavClass(window.scrollY > 5 ? 'nav-desktop nav-desktop-hide' : 'nav-desktop');
    };

    updateClass();
    window.addEventListener('scroll', updateClass, { passive: true });
    return () => window.removeEventListener('scroll', updateClass);
  }, [isModuleHome]);

  useEffect(() => {
     if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth > 991) setOffcanvasShow(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <Navbar fixed="top" expand="lg" bg="light" className={navClass}>
        <Container>
          <span>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand" onClick={() => setOffcanvasShow(true)} />
            <Navbar.Brand as={Link} to="/" className="qkrbiz-logo"><img className="img-fluid qkr-biz" src={NavigationImg.menuImg.qkrbizLogo} alt="Qkrbiz Logo" /></Navbar.Brand>
          </span>
          <Link to={HeaderMenuData[0].signup.url} className="btn btn-outline-magenta btn-login">{HeaderMenuData[0].signup.title}</Link>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="start"
            show={offcanvasShow}
            onHide={() => setOffcanvasShow(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                <Link to="/" className="navbar-brand qkr-biz" onClick={() => setOffcanvasShow(false)}><img className="img-fluid qkr-biz" src={NavigationImg.menuImg.qkrbizLogo} alt="Qkrbiz Logo" /></Link>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setOffcanvasShow(false)}>
                  Home
                </Nav.Link>

                <NavDropdown renderMenuOnMount title="Products" id="products-dropdown" className="mega-menu fullscreen-menu">
                  <div className="container">
                    {(() => {
                      const header = HeaderMenuData[0];
                      return (
                      <div className="row">
                        <div className="col-lg-6 product-feature">
                          <h4>{header.head1}</h4>
                          <div className="row g-2">
                            {header.ProductMenuData.map((productItem, productindex) => (
                              <div className="col-lg-6" key={productindex}>
                                <NavDropdown.Item as={Link} to={productItem.urls}
                                  className={isActivePath(productItem.urls) ? 'active' : ''}
                                  onClick={() => setOffcanvasShow(false)}
                                >
                                  <span className="logo-part">
                                    <span className={`logo ${productItem.productClass}`}><img loading="lazy" src={productItem.icon} alt={productItem.title?.replace(/<[^>]+>/g, "")} /> </span>
                                    <span className="titles">
                                      <h5 dangerouslySetInnerHTML={sanitizeHtml(productItem.title)}></h5>
                                      <p>{productItem.desc}</p>
                                    </span>
                                  </span>
                                </NavDropdown.Item>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="col-lg-6 platform-feature">
                          <h4>{header.head2}</h4>
                          <div className="row g-2">
                            {header.PlatformFeatureData.map((pData, Pindex) => (
                              <div className="col-lg-6" key={Pindex}>
                                <NavDropdown.Item as={Link} to={pData.urls} className={isActivePath(pData.urls) ? 'active' : ''} onClick={() => setOffcanvasShow(false)}>
                                  <span className="logo-part">
                                    <span className={`logo ${pData.classNames}`}><img loading="lazy" src={pData.icon} alt={pData.title?.replace(/<[^>]+>/g, "")} /> </span>
                                    <span className="titles">
                                      <h5>{pData.title}</h5>
                                      <p>{pData.desc}</p>
                                    </span>
                                  </span>
                                </NavDropdown.Item>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      );
                    })()}
                  </div>
                </NavDropdown>

                <NavDropdown renderMenuOnMount title="Company" id="company-dropdown" className="company-menu">
                  {HeaderMenuData[0].CompanyData.map((prData, prindex) => (
                    <NavDropdown.Item as={Link} to={prData.urls} className={isActivePath(prData.urls) ? 'active' : ''} key={prindex} onClick={() => setOffcanvasShow(false)}>
                      {prData.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                <NavDropdown renderMenuOnMount title="Resources" id="resources-dropdown" className="resource-menu">
                  <NavDropdown renderMenuOnMount title="Platform Features" id="platform-features-submenu" className="dropdown-submenu">
                    {HeaderMenuData[0].PlatformFeatureData.map((prData, prIndex) => (
                      <NavDropdown.Item as={Link} to={prData.urls} className={isActivePath(prData.urls) ? 'active' : ''} onClick={() => setOffcanvasShow(false)} key={prIndex}>
                        {prData.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>

                  {/* <NavDropdown renderMenuOnMount title="Free Tools" id="free-tools-submenu" className="dropdown-submenu">
                    {HeaderMenuData[0].freeTools.map((tool) => (
                      <NavDropdown.Item as={Link} to={tool.urls} className={isActivePath(tool.urls) ? 'active' : ''} onClick={() => setOffcanvasShow(false)} key={tool.id}>
                        {tool.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown> */}

                   {hrLinks
                    .filter((link) => link.id === 2 || link.id === 3)
                    .map((link, i) => (
                      <NavDropdown.Item as={Link} to={link.fullPath} className={isActivePath(link.fullPath) ? 'active' : ''} key={i} onClick={() => setOffcanvasShow(false)}>
                        {link.title}
                      </NavDropdown.Item>
                    ))}

                    {/* <NavDropdown renderMenuOnMount title="HRMS by City" id="hrms-city-submenu" className="dropdown-submenu">
                          {HeaderMenuData[0].qkrHrmsCityData.map((prData, prIndex) => (
                              <NavDropdown.Item as={Link} to={prData.urls} className={isActivePath(prData.urls) ? 'active' : ''} onClick={() => setOffcanvasShow(false)} key={prIndex}>{prData.title} </NavDropdown.Item>
                          ))}
                    </NavDropdown> */}

                    {/* {HeaderMenuData[0].othervsQkrhr.map((cmp, ci) => (
                      <NavDropdown.Item as={Link} to={cmp.urls} className={isActivePath(cmp.urls) ? 'active' : ''} key={ci} onClick={() => setOffcanvasShow(false)}>
                        {cmp.title}
                      </NavDropdown.Item>
                    ))} */}

                </NavDropdown>

                {hrLinks
                  .filter((link) => link.id === 1)
                  .map((link, i) => (
                    <Nav.Link as={Link} to={link.fullPath} className={isActivePath(link.fullPath) ? 'active' : ''} key={i} onClick={() => setOffcanvasShow(false)}>
                      {link.title}
                    </Nav.Link>
                  ))}
              </Nav>

              <form className="ms-auto nav-form">
                <Link to={HeaderMenuData[0].userLogin.loginUrl}  className="btn btn-outline-magenta" target="_blank" rel="noopener">
                  {HeaderMenuData[0].userLogin.title}
                </Link>
                <Link  to={HeaderMenuData[0].signup.url} className="btn btn-gradient" onClick={() => setOffcanvasShow(false)}>
                  {HeaderMenuData[0].signup.title}
                </Link>
                {/* <Link onClick={toggleTheme}> {isDark ? "Light" : "Dark"} Theme </Link> */}
              </form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNav;
