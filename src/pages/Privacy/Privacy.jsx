import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import privacySchemaData from "./privacySchemaData";

const PrivacyMeta = {
  title: "Privacy Policy & Data Protection Terms | Qkrbiz",
  description: "Read the Qkrbiz Privacy Policy to understand how we collect, use, and protect your personal data.",
};

const Privacy = () => {

   const socialImage = ImagesUrl_ogImages.Privacy;
   const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={PrivacyMeta.title}
    description={PrivacyMeta.description}
    image={socialImage}
	SchemaData={privacySchemaData}
    />
    <section className="window-top-banner">
        <div className="container" dangerouslySetInnerHTML={sanitizeHtml(`<div class="row">
                <div class="col-lg-12">
                    <div class="heading-title text-left">
                        <h1 class="under-line">Privacy Policy</h1>
                    </div>
                    <p>When registering with Qkrbiz, you can be assured of the implementation of all industry standard
                        security practices. We take your online security concerns seriously and continuously strive to
                        provide an improved customer experience. Qkrbiz ensures the security of the product and your
                        information, at all times, with the Trustworthy Computing approach. Under the Trustworthy Computing
                        approach, multi-level security is maintained, such as the Physical Layers and Logical Layers. All in
                        all, protection is given over physical controls, access control and video surveillance. Data
                        isolation, hosted application security, single sign on, identity and access management is also taken
                        care of.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 bg-white text-justify">
                    <p>qkrbiz.com is committed to respecting your online privacy and recognizes your need for appropriate protection and management of any personally identifiable information ("Personal Information") you share with us. </p>
                    <p>Qkrbiz collects personally identifiable information and data about individuals when you provide information to qkrbiz.com such as when you register or sign up for any of our services such as e-mails or newsletters or other communications. </p>
                    <p>Qkrbiz reserves the right to update, change or modify this policy at any time. The policy shall come to effect from the date of such update, change or modification. </p>
                    <p>Qkrbiz or its third party partners may place a \"cookie\" in the browser of a user\'s computer. The cookie itself does not contain any personally identifying information, except when such information has been supplied by a subscriber or registered user. </p>
                    <p>If you have registered with qkrbiz.com
                    , the information in your \"cookie\" is used to provide a more personalized experience on our Web site. This cookie identifies you as a unique user by means of a tracking ID. However, if you have not registered on our site, we cannot link that user ID with Personal Information and data about you such as your name or e-mail address.</p>
                    <p> You can set the browser on your computer to warn you each time a cookie is being sent, block third party cookies or block all cookies.  However, by blocking all cookies you may not have access to certain features on our web sites. </p>
                    <p>We also use web beacons (invisible images often referred to as pixel tags or clear GIFs) on our sites in order to recognize users and assess traffic patterns, and we include web beacons and cookies in our e-mail messages, including newsletters, in order to count how many e-mail messages have been opened.</p>
                    <p>The aggregated information we collect is used for a number of purposes including the following</p>
                    
                    <ul>
                        <li>We will collect information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                        <li>for the purposes for which you specifically provided it including, without limitation, to enable us to process and fulfill your registration or other requests.</li>
                        <li>To send you information about your relationship or transactions with us.</li>
                        <li>To notify you about our products like tools listing, partner programs, services, and special offers.</li>
                        <li>To otherwise contact you with information that we believe will be of interest to you.</li>
                        <li>To enhance or develop features, products and services</li>
                        <li>To provide advertisers and other third parties with aggregate information about our web site user base and usage patterns.</li>
                        <li>To allow us to personalize the content and advertising that you and others see on our web sites.</li>
                        <li>To allow other select companies to send you promotional materials about their products and services (that is, unless you've told us not to do so).</li>
                    </ul>
                    <p>Information about your activities on our sites and other non-personally identifiable information about you may be used to limit the online ads you encounter to those we believe are consistent with your interests.</p>
                    <p>Users should be aware that when they disclose personal information (e.g., user name, address, company name, telephone number, demographic information, buying information, other data and E-mail address) in discussion forums, chat rooms or other areas that are publicly accessible by others, that information can be collected and used by others and may result in unsolicited messages from other posters or parties. Qkrbiz
                    nor its parent company or any of its subsidiaries or affiliates are not responsible for any information that you provide in the above areas.</p>
                    <h2 class="text-magenta mt-3 mb-3 fn-4">Sharing your Information</h2>
                    <p>We may share your Personal Information with companies that are affiliated with us. We may use other companies to perform services including, without limitation, facilitating some aspects of our web sites, sending e-mail, fulfilling purchase requests, serving, customizing or delivering marketing or ads, and auditing.  These other companies may be supplied with or have access to your Personal Information solely for the purpose of providing these services to us or on our behalf.</p>
                    <p>In the event that part or all of the ownership of Qkrbiz or any of its products are sold or transferred, all lists and data which contains personally information and data including  for  example user name, address, company  name, telephone number, demographic information, buying information, other data and e-mail address, will be transferred to the new owner.</p>
                    <p>If you have any questions, comments or concerns about our Privacy Policy, you may contact us at <a href="mailto: sales@qkrbiz.com" target="_top">sales@qkrbiz.com </a>.</p>
                    <h3 class="text-magenta mt-4 mb-3 fn-4">Mobile App</h3>
                    <div class="pl-0">
                       <ul>
                         <li>We will collect information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                         <li>The Application obtains the information you provide when you download the mobile application. When you download the Qkrbiz App and start to use, you need to provide your email address.</li>
                         <li>The Application obtains the information you provide when you download the mobile application. When you download the Qkrbiz App and start to use, you need to provide your email address.</li>
                       </ul>
                        <h4 class="text-magenta mt-3 mb-2 fn-3">Changes to the agreement </h4>
                        <p>It remains our goal to not do continuous recording of GPS location of the end users. Only in case of users company requirement, the location of the field agent is picked automatically after certain intervals . All such continuous location data is only used to track user location during his/her working hours.</p>
                        <h5 class="text-magenta mt-3 mb-3 fn-3">Current Location</h5>
                        <p>In some specific use cases where the current location is required for the backend agents to show the current address and location while attendance, sales, service, project and task check-in check-out</p>
                        <h6 class="text-magenta mt-3 mb-3 fn-3">Map View of Current Location</h6>
                        <p>Current Address captured with location can also be presented as a map view on specific interfaces on the platform.</p>
                        <h6 class="text-magenta mt-3 mb-3 fn-3">Read Contact Details</h6>
                        <p>Mobile Contact Details is accessed to show the contact list while making sales and service check-ins.</p>
                        <h6 class="text-magenta mt-3 mb-3 fn-3">Read Contact Details</h6>
                        <p>Mobile Contact Details is accessed to show the contact list while making sales and service check-ins.</p>
                        <h6 class="text-magenta mt-3 mb-3 fn-3">Scope of Device Data Capturing</h6>
                        <p>The Qkrbiz app captures device data such as device manufacturer name, device model, battery status on every login, operating system version and Google Play Services version. This helps us troubleshoot any issues reported by users and also continually assess the app’s performances against available resources on the device. Such data is also visible to the company (Qkrbiz's customer and direct/indirect employer of Qkrbiz users) personnel.</p>
                       
                        <div class="d-flex py-2">
                            <div class="flex-grow-1 ms-2">If you have any questions regarding privacy while using the Qkrbiz App, or have questions about our practices, please contact us via email at
                            <a href="mailto:sales@qkrbiz.com" target="_top"> sales@qkrbiz.com</a> </div>
                        </div>

                    </div>
                </div>
            </div>`)}>
        </div>
    </section>

    </>
  )
}

export default Privacy