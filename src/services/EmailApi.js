import API from "./api";

export const sendEmail = async (data) => {
  try {
    // Same-origin relay in server.js (not the QkrBiz host) — override baseURL.
    const response = await API.post("/api/send-mail", data, { baseURL: "" });
    return response.data;
  } catch (error) {
    console.error(
      "Error in sendEmail API:", error.response?.data || error.message
    );
    throw error;
  }
};

/**
 * User-facing message for a failed sendEmail() call. The relay in server.js
 * responds with { error, detail } — `detail` is raw upstream text (may be
 * HTML), so it is logged, never shown.
 */
export const getEmailErrorMessage = (error) => {
  const status = error?.response?.status;

  if (!error?.response) {
    // No response at all: offline, DNS, or the 15s axios timeout.
    return error?.code === "ECONNABORTED"
      ? "The request timed out. Please check your connection and try again."
      : "Unable to reach the server. Please check your connection and try again.";
  }

  switch (status) {
    case 400:
      return "Some required details are missing. Please check the form and try again.";
    case 404:
      // /api/send-mail not routed (e.g. proxy missing the /api location).
      return "Mail service could not be found. Please try again later or contact us directly.";
    case 502:
    case 503:
    case 504:
      // Relay reached, but the QkrBiz mail API failed upstream.
      return "Mail service is temporarily unavailable. Please try again in a few minutes.";
    default:
      return "Something went wrong. Please try again later.";
  }
};


// import axios from "axios";

// export const sendEmail = async (data) => {
//   try {
//     const response = await axios.post("/api/send-mail", data, {
//       headers: { "Content-Type": "application/json" },
//       timeout: 15000,
//     });
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error in sendEmail API:", error.response?.data || error.message
//     );
//     throw error;
//   }
// };

