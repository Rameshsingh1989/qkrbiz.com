export const EmailTemplates = {

  generateAdminEmailBody: (formData, landingPageUrl) => {
    const employeeRow = formData.noEmployee
      ? `<tr>
           <td colspan="2">
             <span style="font-weight:700; padding-right:10px;">Number of Employees:</span>${formData.noEmployee}
           </td>
         </tr>`
      : '';

    const landingPageRow = landingPageUrl
      ? `<tr>
           <td colspan="2">
             <span style="font-weight:700; padding-right:10px;">Landing Page Url:</span>${landingPageUrl}
           </td>
         </tr>`
      : '';

    const messageText = formData.myText
    ? `<tr>
          <td colspan="2">
            <span style="font-weight:700; padding-right:10px;">Message:</span>${formData.myText}
          </td>
      </tr>` :'';


    return `
      <table border="1" cellpadding="5" cellspacing="0" width="650" style="word-break:break-word; width:650px; border-width:2px; border-color:antiquewhite;font-size: 14px;">
        <tr><td colspan="2"><span style="font-weight:700; padding-right:10px;">Email:</span>${formData.email}</td></tr>
        <tr>
            <td width="45%"><span style="font-weight:700; padding-right:10px;">Name: </span>${formData.name}</td>
            <td width="55%"><span style="font-weight:700; padding-right:10px;">Mobile No: </span>${formData.mobileNo}</td>
          </tr>
          <tr><td colspan="2"><span style="font-weight:700; padding-right:10px;">Company Name:</span>${formData.company}</td></tr>
          
          ${employeeRow}

          ${messageText}

          ${landingPageRow}

      </table>
    `;
  },
  generateUserEmailBody: (formData) => {
    return `
    <p>Dear ${formData.name},</p>
    <p style='margin:0px; color: #212832;'>Thank you for reaching out to QkrHR!</p>
    <p style='margin:0px;color: #212832;'>We're thrilled that you're taking the first step towards revolutionizing your HR operations.</p>
    <h5 style="font-size:13px; color: #212832;margin-bottom: 0px;margin-top: 10px;">Our Team Will Connect with You Within 24 Hours To:</h5>
    <ul style='padding-left: 10px;'>
        <li style="color: #212832;">Dive Deep into Your Unique HR Challenges</li>
        <li style="color: #212832;">Schedule a personalized demo</li>
        <li style="color: #212832;">Explore how QkrHR can streamline your HR processes</li>
    </ul>
    <div style="display: inline-block;width: 100%;"> 
      <p style='margin:0px;color: #212832;'>Get Ready to Reimagine HR!</p>
      <p style='margin:0px;color: #212832;'>Best Regards</p>
      <p style='margin:0px;color: #212832;'>QkrHR Team</p>
      <p style="color: #212832;">Qkrbiz | Intec Infonet Pvt. Ltd.</p>
    </div>
    <div style="display: inline-block;width: 100%;">    
      <a href='https://www.facebook.com/qkrhr.software/' style="float: left;margin-right:7px;">
          <img src="https://www.qkrbiz.com/userthank-social/user-facebook-icon.png" alt="Facebook" style="width: 30px;height: 30px"/>
      </a>
      <a href='https://www.instagram.com/qkrbiz/' style="float: left;margin-right:7px;">
          <img src="https://www.qkrbiz.com/userthank-social/user-instragam-icon.png" alt="Instagram" style="width: 30px;height: 30px" />
      </a>
      <a href='https://www.youtube.com/@QkrHR/' style="float: left;margin-right:7px;">
          <img src="https://www.qkrbiz.com/userthank-social/user-youtube-icon.png" alt="YouTube" style="width: 30px;height: 30px" />
      </a>
      <a href='https://www.linkedin.com/company/qkrhr-hrms/' style="float: left;margin-right:7px;">
          <img src="https://www.qkrbiz.com/userthank-social/user-linkedin-icon.png" alt="Linkedin" style="width: 30px;height: 30px" />
      </a>
      <a href='https://x.com/QkrBiz' style="float: left;margin-right:7px;">
          <img src="https://www.qkrbiz.com/userthank-social/user-twitter-icon.png" alt="Twitter" style="width: 30px;height: 30px" />
      </a>
      <a href='https://in.pinterest.com/qkrbiz/' style="float: left;">
          <img src="https://www.qkrbiz.com/userthank-social/user-pinteresticon.png" alt="Twitter" style="width: 30px;height: 30px" />
      </a>
    </div>
    `;
  },
  generateUserEmailSubject: (name) => {
    return `Thanks for Signing Up for QkrHR, ${name}! Let's Get Started!`;
  }
};
