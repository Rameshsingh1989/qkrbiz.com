import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Col, Row,Spinner, Button, Form } from 'react-bootstrap';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import ClientLogoScroll from '../../components/ClientLogoScroll/ClientLogoScroll.jsx';
import { ClientStories } from '../../components/ClientStories/ClientStories.jsx';
import { CustomerAllData } from '../Customers/CustomersAllData.js';
import { VALIDATION_RULES } from '../../utility/validationRules.js';
import { EMAIL_CONFIG } from '../../utility/emailConfig.js';
import { EmailTemplates } from '../../utility/emailTemplates.js';
import { StorageUtils } from '../../utility/storageUtils.js';
import { sendEmail, getEmailErrorMessage } from '../../services/EmailApi.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import signupSchemaData from './signupSchemaData.js';

const SignupMeta = {
  title: "Sign Up for Qkrbiz Free Demo: Get Started",
  description: "Sign up for Qkrbiz today and schedule your free demo. Discover how our cloud HRMS, payroll, field force, and business management software scales your team.",
};

import "./Signup.scss";

const FormInput = ({
  type = "text",
  placeholder,
  register,
  name,
  validation,
  error,
  touched,
  as,
  rows
}) => {
  const inputClass = `mb-2 ${error ? 'is-invalid' : (touched ? 'is-valid' : '')}`;

  return (
    <>
      <Form.Control
        type={type}
        as={as}
        rows={rows}
        className={inputClass}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </>
  );
};


const Signup = () => {

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [landingPageUrl, setLandingPageUrl] = useState('');

  const socialImage = ImagesUrl_ogImages.SignUp;

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    const storedUrl = StorageUtils.getStoredLandingPage();
    setLandingPageUrl(storedUrl);

    if (!storedUrl) {
      const currentUrl = window.location.href;
      StorageUtils.setLandingPage(currentUrl);
      setLandingPageUrl(currentUrl);
    }
  }, []);

  const onSubmit = async (formData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const emailBody = EmailTemplates.generateAdminEmailBody(formData, landingPageUrl);

      const mailOptionsAdmin = {
        ...EMAIL_CONFIG.admin,
        MailSubj: `Enquiry received from ${formData.name}`,
        Message: emailBody
      };

      const thankYouBody = EmailTemplates.generateUserEmailBody({ name: formData.name });

      const mailOptionsUser = {
        SendTo: formData.email,
        MailSubj: EMAIL_CONFIG.user.subject,
        Message: thankYouBody
      };

      await Promise.all([
        sendEmail(mailOptionsAdmin),
        sendEmail(mailOptionsUser)
      ]);
      navigate('/thank-you');
      reset();

    } catch (error) {
      console.error("Email sending failed:", error.response?.status, error.response?.data || error.message);
      alert(getEmailErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormReset = () => {
    reset();
  };

  return (
    <>
      <RouteSpecificMeta
        title={SignupMeta.title}
        description={SignupMeta.description}
        image={socialImage}
        SchemaData={signupSchemaData}
      />

      <div className="window-top-banner signup-area">
        <div className="container-fluid signup">
          <Row>
            <Col lg={5} className="mx-auto py-0 px-0 position-relative order-lg-1 order-2 bg-gray-dark">

              <ClientStories cls="signup-stories pt-lg-0 pb-5" count1={2} count2={1} count3={1} />
              <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={true} count1={4} count2={3} count3={2} count4={2} count5={2} />
            </Col>
            <Col lg={4} className="mx-auto px-lg-0 order-lg-2 order-1 mb-4">
              <div className="heading-title mb-4 mt-0 text-left">
                <h1 className="under-line mb-0"> Get Started with <span className="text-magenta">Smart HR</span> Today</h1>
              </div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="ft_source" />
                <input type="hidden" name="ft_medium" />
                <input type="hidden" name="ft_campaign" />
                <input type="hidden" name="ft_referrer" />
                <input type="hidden" name="ft_landing" />

                <Row>
                  <Col lg={10}>

                    <label htmlFor="inputEmail" className="col-form-label">Email<span className="text-danger">*</span></label>
                    <FormInput
                      type="email"
                      placeholder=""
                      register={register}
                      name="email"
                      validation={VALIDATION_RULES.email}
                      error={errors.email}
                      touched={touchedFields.email}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <label htmlFor="inputName" className="col-form-label">Name<span className="text-danger">*</span></label>
                    <FormInput
                      type="text"
                      placeholder=""
                      register={register}
                      name="name"
                      validation={VALIDATION_RULES.name}
                      error={errors.name}
                      touched={touchedFields.name}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <label htmlFor="inputMobileNo" className="col-form-label">Mobile<span className="text-danger">*</span></label>
                    <FormInput
                      type="tel"
                      placeholder=""
                      register={register}
                      name="mobileNo"
                      validation={VALIDATION_RULES.mobileNo}
                      error={errors.mobileNo}
                      touched={touchedFields.mobileNo}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <label htmlFor="inputCompany" className="col-form-label">Company Name<span className="text-danger">*</span></label>
                    <FormInput
                      type="text"
                      placeholder=""
                      register={register}
                      name="company"
                      validation={VALIDATION_RULES.company}
                      error={errors.company}
                      touched={touchedFields.company}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                      <label htmlFor="inputnoEmployee" className="col-form-label">Number of Employees<span className="text-danger">*</span></label>
                      <div className='mb-2'>
                        <Form.Select aria-label="Default select example"
                            className={`form-control ${errors.noEmployee ? 'is-invalid' : (touchedFields.noEmployee ? 'is-valid' : '')}`}
                            {...register("noEmployee", { 
                              required: "Number of Employees is required" 
                            })}>
                              <option value="">Please Select--</option>
                              <option value="1-50">1-50</option>
                              <option value="51-100">51-100</option>
                              <option value="101-200">101-200</option>
                              <option value="201-500">201-500</option>
                              <option value="501-1000">501-1000</option>
                              <option value="1000+">1000+</option>
                          </Form.Select>
                      </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={10}>
                    <label htmlFor="textareaMyText" className="col-form-label">Message</label>
                    <FormInput
                      as="textarea"
                      rows={2}
                      placeholder="Message (optional)"
                      register={register}
                      name="myText"
                      validation={{}}
                      error={errors.myText}
                      touched={touchedFields.myText}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={10}>
                    <div className="d-flex gap-3">
                      <Button
                        variant="gradient mt-4"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Submitting...
                          </>
                        ) : (
                          'Submit Now'
                        )}
                      </Button>

                      <Button
                        variant="outline-secondary mt-4"
                        type="button"
                        onClick={handleFormReset}
                        disabled={isSubmitting}
                      >
                        Reset
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>

            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Signup;