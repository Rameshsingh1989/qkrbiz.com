import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { Form, Button, Spinner, Row, Col } from 'react-bootstrap';

import { VALIDATION_RULES } from '../../utility/validationRules';
import { EMAIL_CONFIG } from '../../utility/emailConfig';
import { EmailTemplates } from '../../utility/emailTemplates';
import { StorageUtils } from '../../utility/storageUtils';
import { sendEmail } from '../../services/EmailApi';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';

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
  const inputClass = `mb-3 ${error ? 'is-invalid' : (touched ? 'is-valid' : '')}`;
  
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
      {/* {error && (
        <div className="invalid-feedback d-block mb-2">
          {error.message}
        </div>
      )} */}
    </>
  );
};

const BlogDemoForm = ({  
  title = "Book Free Demo Now!", 
  className = "blog-free-trial",
}) => {
  const sanitizeHtml = useSanitizeHtml();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [landingPageUrl, setLandingPageUrl] = useState('');

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

      console.log('Emails sent successfully');
      navigate('/thank-you');
      reset();

    } catch (error) {
       console.error("Email sending failed:", error);

      if (error.response?.status === 401) {
        alert("Mail service is currently unavailable. Please try again later.");
      } else {
        alert(
          error.response?.data?.message ||
          error.response?.data?.Message ||
          "Something went wrong. Please try again later."
        );
      }
      
      // console.error('Email sending failed:', error);
      //  alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormReset = () => {
    reset();
  };

  return (
    <div className={className}>
      <h3 dangerouslySetInnerHTML={sanitizeHtml(title)} />
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="name@example.com"
          register={register}
          name="email"
          validation={VALIDATION_RULES.email}
          error={errors.email}
          touched={touchedFields.email}
        />
        
        <FormInput
          type="text"
          placeholder="Name"
          register={register}
          name="name"
          validation={VALIDATION_RULES.name}
          error={errors.name}
          touched={touchedFields.name}
        />
        
        <FormInput
          type="tel"
          placeholder="Mobile No."
          register={register}
          name="mobileNo"
          validation={VALIDATION_RULES.mobileNo}
          error={errors.mobileNo}
          touched={touchedFields.mobileNo}
        />
        
        <FormInput
          type="text"
          placeholder="Company"
          register={register}
          name="company"
          validation={VALIDATION_RULES.company}
          error={errors.company}
          touched={touchedFields.company}
        />
        <Row>
          <Col xl={12} xxl={7}>
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
       
        
        <div className="d-flex gap-2 mt-xl-3 mt-xxl-4">
          <Button 
            variant="btn btn-gradient" 
            type="submit"
            disabled={isSubmitting }>
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
              'Submit'
            )}
          </Button>
          
          <Button 
            variant="outline-secondary" 
            type="button"
            onClick={handleFormReset}
            disabled={isSubmitting}
          >
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BlogDemoForm;