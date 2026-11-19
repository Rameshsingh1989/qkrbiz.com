// import {useState, useEffect} from 'react';
import { Link } from 'react-router'; 
import { Col, Container, Row } from "react-bootstrap";
// import { FaChevronUp } from 'react-icons/fa6';
import { SocialNetwork } from '../SocialNetwork/SocialNetwork';
import { AppleIcon as ImagesUrl_AppleIcon, GooglePlay as ImagesUrl_GooglePlay, logos as ImagesUrl_logos } from '../../assets/images';

import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import './Footer.scss';

function Footer() {
  // const [isScrolled, setIsScrolled]=useState(false);
  // const handleScrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }
  //  useEffect (()=> {
  //    const handleScroll =()=> {
  //       setIsScrolled(window.scrollY >= 50);
  //    }
  //    window.addEventListener('scroll', handleScroll);
  //    return()=>{
  //     window.removeEventListener('scroll',handleScroll);
  //    }
  //  },[]);

    return (
        <>
          <footer className="footer-section pb-0">    
                {/* <div style={{display: isScrolled ? 'block':'none'}}>
                      <button  className="bottomTop" onClick={handleScrollTop} aria-label="Scroll to top" style={{border: 'none' }}>
                          <FaChevronUp/>
                      </button>  
                </div> */}
                <Container>
                <Row>
                      <Col lg="4">
                          <Link to="/" className="d-flex footer-logo">
                            <img src={ImagesUrl_logos.QkrbizLogo} alt="Qkrbiz" loading="lazy" decoding="async" />
                          </Link>
                          <p className="mt-4">Qkrbiz’s all-in-one software centralizes your business operations in a single platform. Tailored for small and mid-sized businesses, it simplifies HR, field tracking, sales, expenses, customer support, and tender management. Streamline every aspect of your business with ease.</p>
                          <p className="mb-0 mt-1 fn-4 fn-sb">Qkrbiz</p>
                          <p className="mb-3 mt-1 fn-2 fn-sb">Intec Infonet Pvt. Ltd.</p>
                          <p className="mb-1 text-white">Sales</p>
                          <p className="mb-0"><Link to="tel:+917428174445" className='touch-target'>+91 7428174445</Link></p>
                          <p><Link to="mailto:sales@qkrbiz.com" className='touch-target'>sales@qkrbiz.com</Link></p>
                          <p className="mb-1">For Support</p>
                          <p className="mb-0"><Link to="tel:+919217708850" className='touch-target'>+91 9217708850</Link></p>
                          <p className="mb-0"><Link to="mailto:support@qkrbiz.com" className='touch-target'>support@qkrbiz.com</Link></p>
                          <WhatsAppButton />
                          <SocialNetwork socialNetwork="social-network" />
                          <div className="apps-link mt-4">
                              <a href="https://play.google.com/store/apps/details?id=com.intec.qkrbiz" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="d-flex play-store" 
                                style={{ marginRight: '1rem' }}>
                                <span className="flex-shrink-0">
                                  <img src={ImagesUrl_GooglePlay} alt="Google Play" loading="lazy" decoding="async" />
                                </span>
                                <span className="flex-grow-1">
                                  <p>GET IT ON </p>
                                  <p className="fn-app">GOOGLE PLAY </p>
                                </span>
                              </a>

                              <a href="https://apps.apple.com/app/id1570623057" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="d-flex play-store">
                                <span className="flex-shrink-0">
                                  <img src={ImagesUrl_AppleIcon} alt="Apple Icon" loading="lazy" decoding="async" />
                                </span>
                                <span className="flex-grow-1">
                                  <p>GET IT ON</p>
                                  <p className="fn-app">APP STORE</p>
                                </span>
                              </a>
                          </div>
                      </Col>
                      <Col lg={2} sm={6} xs={6}>
                          <div className="headings"> 
                            <h3>Products</h3>
                          </div>
                          <ul className="list-unstyled footer-list">
                            <li><Link to="/hrms-software">QkrHR</Link></li>
                             <li><Link to="/payroll-software">QkrPayroll</Link></li>
                            <li><Link to="/field-force-management-software">QkrVisit</Link></li>
                            <li><Link to="/qkrexpense">QkrExpense</Link></li>
                            <li><Link to="/qkrdesk">QkrDesk</Link></li>
                            <li><Link to="/qkrprojects">QkrProjects</Link></li>
                            <li><Link to="/qkrsales">QkrSales</Link></li>
                            <li><Link to="/qkrtenders">QkrTenders</Link></li>
                            <li><Link to="/qkrtasks">QkrTasks</Link></li>
                          </ul>
                      </Col>
                      <Col lg={2} sm={6} xs={6}>
                          <div className="headings">
                            <h3>More</h3>
                          </div>
                          <ul className="list-unstyled footer-list">
                              <li><Link to="/hrms-software/core-hr">Core HR</Link></li>
                              <li><Link to="/hrms-software/leave-and-attendance-management">Time and Attendance</Link></li>
                              <li><Link to="/hrms-software/field-force-automation">Field Force Automation</Link></li>
                              <li><Link to="/hrms-software/employee-expense-management">Expenses Management</Link></li>
                              {/* <li><Link to="/hrms-software/hr-payroll-software">Payroll</Link></li> */}
                              <li><Link to="/hrms-software/employee-task-management">Tasks Management</Link></li>
                              {/* <li><Link to="/qkrsales">Sales Order</Link></li>
                              <li><Link to="/qkrsales/sales-management">Sales Management</Link></li>
                              <li><Link to="/qkrsales/billing-payment">Billing & Payment Terms</Link></li>
                              <li><Link to="/qkrsales/sales-performance">Sales Performance</Link></li>
                              <li><Link to="/qkrsales/tender-deposit">Tender Terms</Link></li>
                              <li><Link to="/qkrsales/invoicing">Invoicing</Link></li> */}
                          </ul>
                      </Col>
                      <Col lg={2} sm={6} xs={6}>
                          <div className="headings"> 
                            <h3>Features</h3>
                          </div>
                          <ul className="list-unstyled footer-list">
						              	<li><Link to="/unified-view">Unified View</Link></li>
                            <li><Link to="/alert-notification">Alerts & Notifications</Link></li>
                            <li><Link to="/workflow">Workflow Automation</Link></li>
                            <li><Link to="/documents">Documents</Link></li>
                            <li><Link to="/data-security">Data Security</Link></li>
                            <li><Link to="/bi-analytics">BI & Analytics</Link></li>
                            <li><Link to="/customizations">Customizations</Link></li>
                            <li><Link to="/views">Views</Link></li>
                            <li><Link to="/board-view">Board View</Link></li>
                          </ul>
                      </Col>
                      <Col lg={2} sm={6} xs={6}>
                            <div className="headings">
                              <h3>Company</h3>
                            </div>
                            <ul className="list-unstyled footer-list">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/hrms-software/qkrhr-blogs">Blogs</Link></li>
                                <li><Link to="/hrms-software/hr-glossary">HR Glossary</Link></li>
                                <li><Link to="/customers">Customers</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/security">Security</Link></li>
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                            </ul>
                      </Col>
                </Row>

                  {/* <Row>
                    <Col lg="4">
                    </Col>
                    <Col lg="8">
                      <Row>
                          <Col lg="3">
                            <h5>Connect with us</h5>
                            <SocialNetwork socialNetwork="social-network" />
                          </Col>
                          <Col lg="4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>
                                  Sales - <Link to="mailto: sales@qkrbiz.com" className='touch-target'>sales@qkrbiz.com</Link></li>
                                <li>Support - <Link to="mailto: support@qkrbiz.com" className='touch-target'>support@qkrbiz.com</Link></li>
                            </ul>
                          </Col>
                          <Col lg="4">
                            <h5>Call Us On</h5>
                            <ul className="list-unstyled">
                                <li> Sales - +91 7428174445</li>
                                <li>(Mon - Fri 9:30 AM - 6:30 PM)</li>
                            </ul>
                          </Col>
                      </Row>
                    </Col>
                  </Row> */}
                </Container>
                <div className="bg-copyright">
                  <Container>
                    <Row>
                    <Col lg="12">
                        <p className='py-4 mb-0 text-center'>Copyright © 2026. Intec Infonet Pvt. Ltd. All Rights Reserved.</p>
                    </Col>
                  </Row>
                  </Container>
                </div>
          </footer>
        </>
    )
}

export default Footer