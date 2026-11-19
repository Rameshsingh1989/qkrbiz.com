import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./FieldForceRequestForm.scss";

import { EMAIL_CONFIG } from "../../utility/emailConfig";
import { EmailTemplates } from "../../utility/emailTemplates";
import { StorageUtils } from "../../utility/storageUtils";
import { sendEmail } from "../../services/EmailApi";
import { VALIDATION_PATTERNS } from "../../utility/validationPatterns";

const validateField = (field, value) => {
  switch (field) {
    case "email":
      if (!value.trim()) return "Email is required";
      if (!VALIDATION_PATTERNS.email.test(value))
        return "Email format is invalid";
      break;
    case "name":
      if (!value.trim()) return "Name is required";
      if (!VALIDATION_PATTERNS.name.test(value))
        return "Name must only contain alphabets";
      break;
    case "mobileNo":
      if (!value.trim()) return "Mobile No. is required";
      if (!VALIDATION_PATTERNS.mobile.test(value))
        return "Enter valid 10-digit mobile starting with 6-9";
      break;
    case "company":
      if (!value.trim()) return "Company Name is required";
      if (!VALIDATION_PATTERNS.company.test(value))
        return "Invalid characters in Company Name";
      break;
    case "noEmployee":
      if (!value.trim()) return "Number of Employees is required";
      break;
    default:
      return "";
  }
};

const FieldForceRequestForm = ({ textCenter, variant, btnClass }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobileNo: "",
    contCode: "+91",
    company: "",
    noEmployee: "",
    myText: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [landingPageUrl, setLandingPageUrl] = useState("");

  const validateForm = useCallback(() => {
    const newErrors = {};
    for (let field in formData) {
      const err = validateField(field, formData[field], formData.contCode);
      if (err) newErrors[field] = err;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  useEffect(() => {
    validateForm();
  }, [formData, validateForm]);

  useEffect(() => {
    const storedUrl = StorageUtils.getStoredLandingPage();
    setLandingPageUrl(storedUrl);

    if (!storedUrl) {
      const currentUrl = window.location.href;
      StorageUtils.setLandingPage(currentUrl);
      setLandingPageUrl(currentUrl);
    }
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, contCode: value }));
    setTouched((prev) => ({ ...prev, contCode: true }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      name: "",
      mobileNo: "",
      contCode: "+91",
      company: "",
      noEmployee: "",
      myText: "",
    });
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // mark all fields touched
  const allTouched = Object.fromEntries(Object.keys(formData).map(k => [k, true]));
  setTouched(allTouched);

  // validate form before submit
  if (!validateForm() || isSubmitting) return;

  setIsSubmitting(true);

  try {
    const adminBody = EmailTemplates.generateAdminEmailBody(formData, landingPageUrl);
    const mailOptionsAdmin = {
      ...EMAIL_CONFIG.admin, 
      MailSubj: `Enquiry received from ${formData.name}`,
      Message: adminBody,
    };

    const mailOptionsUser = {
      SendTo: formData.email,
      MailSubj: EMAIL_CONFIG.user.subject,
      Message: EmailTemplates.generateUserEmailBody({ name: formData.name }),
    };

    await Promise.all([
      sendEmail(mailOptionsAdmin),
      sendEmail(mailOptionsUser),
    ]);

    navigate("/thank-you");
    resetForm();
  } catch (err) {
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
      
    // console.error("❌ sendEmail error:", err); // show the actual error
    // alert("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  const renderInput = (name, label, type = "text") => {
    const isFilled = formData[name]?.trim() !== "";
    return (
      <div className="mb-4">
        <label
          className={`input-material ${isFilled ? "has-value" : ""}`}
        >
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form-control form-control-lg ${
              errors[name] && touched[name]
                ? "is-invalid"
                : touched[name]
                ? "is-valid"
                : ""
            }`}
          />
          <span className="label-material">
            {label}
            {["name","email","mobileNo","company","noEmployee"].includes(name) && (
              <span className="text-danger">*</span>
            )}
          </span>
        </label>
      </div>
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={12} xl={6}>{renderInput("name", "Name")}</Col>
        <Col lg={12} xl={6}>{renderInput("email", "Work Email")}</Col>
      </Row>
      <Row>
        <Col xs={4} sm={3} md={2} lg={5} xl={3}>
          <input
              type="text"
              name="contCode"
              value={formData.contCode}
              onChange={handlePhoneChange}
              readOnly
              className="form-control form-control-lg"
            />
        </Col>
        <Col xs={8} sm={9} md={10} lg={7} xl={9}>
          {renderInput("mobileNo", "Mobile")}
        </Col>
      </Row>
      <Row>
        <Col lg={12} xl={6}>{renderInput("company", "Company Name")}</Col>
        <Col lg={12} xl={6}>
          <div className="mb-4">
            <label
              className={`input-material select ${formData.noEmployee ? "has-value" : ""}`}
            >
              <select
                name="noEmployee"
                value={formData.noEmployee}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={`form-control form-control-lg ${
                  errors.noEmployee && touched.noEmployee
                    ? "is-invalid"
                    : touched.noEmployee
                    ? "is-valid"
                    : ""
                }`}
              >
                <option value="">Please Select</option>
                <option value="1-50">1-50</option>
                <option value="51-100">51-100</option>
                <option value="101-200">101-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1000+">1000+</option>
              </select>
              <span className="label-material">
                NO. of Employees<span className="text-danger">*</span>
              </span>
            </label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="mb-4">
            <label
              className={`input-material ${formData.myText ? "has-value" : ""}`}
            >
              <textarea
                name="myText"
                value={formData.myText}
                onChange={handleInputChange}
                className="form-control form-control-lg"
              />
              <span className="label-material">Message</span>
            </label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={`mt-2 ${textCenter}`}>
          <Button variant={variant} type="submit" className={btnClass} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Now"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FieldForceRequestForm;
