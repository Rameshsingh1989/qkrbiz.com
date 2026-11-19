import { VALIDATION_PATTERNS } from './validationPatterns';

export const VALIDATION_RULES = {
  email: {
    required: "Email is required",
    pattern: {
      value: VALIDATION_PATTERNS.email,
      message: "Please enter a valid email address"
    }
  },
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
    pattern: {
      value: VALIDATION_PATTERNS.name,
      message: "Name can only contain letters and spaces"
    }
  },
  mobileNo: {
    required: "Mobile number is required",
    pattern: {
      value: VALIDATION_PATTERNS.mobile,
      message: "Please enter a valid 10-digit mobile number",
    },
  },
  company: {
    required: "Company name is required",
    minLength: {
      value: 2,
      message: "Company name must be at least 2 characters long"
    }
  },
  message: {
    maxLength: {
      value: 500,
      message: "Message cannot exceed 500 characters"
    }
  }
};