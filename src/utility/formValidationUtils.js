export const VALIDATION_PATTERNS = {
  email: /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  mobile: /^[6-9]\d{9}$/,
  name: /^[a-zA-Z\s]+$/,
  company: /^[a-zA-Z0-9\s&.-]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  website: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  pincode: /^[1-9][0-9]{5}$/,
};

export const VALIDATION_MESSAGES = {
  email: {
    required: "Email is required",
    invalid: "Please enter a valid email address"
  },
  name: {
    required: "Name is required",
    minLength: "Name must be at least 2 characters long",
    pattern: "Name can only contain letters and spaces"
  },
  mobile: {
    required: "Mobile number is required",
    invalid: "Please enter a valid 10-digit mobile number"
  },
  company: {
    required: "Company name is required",
    minLength: "Company name must be at least 2 characters long",
    pattern: "Company name can only contain letters, numbers, spaces, &, ., and -"
  },
  password: {
    required: "Password is required",
    minLength: "Password must be at least 8 characters long",
    pattern: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  },
  phone: {
    required: "Phone number is required",
    invalid: "Please enter a valid phone number"
  },
  website: {
    required: "Website URL is required",
    invalid: "Please enter a valid website URL"
  },
  pincode: {
    required: "Pincode is required",
    invalid: "Please enter a valid 6-digit pincode"
  }
};

export const createValidationRules = (fieldType, options = {}) => {
  const isRequired = options.required !== false;
  const baseRules = {
    required: isRequired ? VALIDATION_MESSAGES[fieldType]?.required : false,
  };

  switch (fieldType) {
    case 'email':
    case 'mobile':
    case 'phone':
    case 'website':
    case 'pincode':
      return {
        ...baseRules,
        pattern: {
          value: VALIDATION_PATTERNS[fieldType],
          message: options.message || VALIDATION_MESSAGES[fieldType].invalid,
        },
      };

    case 'name':
    case 'company':
      return {
        ...baseRules,
        minLength: {
          value: options.minLength || 2,
          message: options.minMessage || VALIDATION_MESSAGES[fieldType].minLength,
        },
        pattern: {
          value: VALIDATION_PATTERNS[fieldType],
          message: options.message || VALIDATION_MESSAGES[fieldType].pattern,
        },
      };

    case 'password':
      return {
        ...baseRules,
        minLength: {
          value: options.minLength || 8,
          message: options.minMessage || VALIDATION_MESSAGES.password.minLength,
        },
        pattern: {
          value: VALIDATION_PATTERNS.password,
          message: options.message || VALIDATION_MESSAGES.password.pattern,
        },
      };

    default:
      return baseRules;
  }
};
