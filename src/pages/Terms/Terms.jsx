import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import useSanitizeHtml from '../../hooks/useSanitizeHtml';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import termsSchemaData from "./termsSchemaData";

const TermsMeta = {
  title: "Terms & Conditions of Service Agreement | Qkrbiz",
  description: "Read Qkrbiz terms and conditions covering service usage, software access, user rights, data privacy, and customer agreements. Learn more about our terms.",
};

const Terms = () => {

   const socialImage = ImagesUrl_ogImages.Term;
   const sanitizeHtml = useSanitizeHtml();

  return (
    <>
    <RouteSpecificMeta
    title={TermsMeta.title}
    description={TermsMeta.description}
    image={socialImage}
    SchemaData={termsSchemaData} />

    <section className="window-top-banner">
        <div className="container" dangerouslySetInnerHTML={sanitizeHtml(`<div class="row">
                <div class="col-lg-12">
                    <div class="heading-title text-left">
                        <h1 class="under-line">Terms and Conditions</h1>
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
                <div class="col-lg-12 text-justify">
                <p>These terms constitute a binding agreement between you and qkrbiz.com
                    and are deemed accepted by you each time that you use or access qkrbiz.com.
                    If you do not accept the terms stated here, please do not use qkrbiz.com
                    and its services. If you agree to be bound by the terms of this Agreement, you should click on the "I AGREE" check box at the registration page. If you do not agree to be bound by the terms of this Agreement, do not select the "I agree to the Terms &amp; Conditions" option during registration. By not selecting this option, you will not be able to proceed with the registration process for the Service and become a registered user.</p>
                <h2 class="text-magenta mt-3 mb-3 fn-4">Changes to the agreement</h2>
                <p>qkrbiz.com may revise these terms at any time by posting an updated version to this Web page. You should visit this page periodically to review the most current Terms because they are binding on you. You signify that you agree to be bound by such changes by using the Service after changes are made to this Agreement. Users who violate these Terms may have their access and use of the qkrbiz.com
                    site suspended or terminated, at its discretion.</p>
                <p><strong>Privacy policy and Your Profile: </strong>Registration data and other information about you are subject to our Privacy Policy. Your information may be stored and processed in any country, and by using the Service, you consent to the transfer of information outside of your country. All users including advertiser and vendors are responsible for maintaining the confidentiality of their passwords. We require you to register to have access to the Service. It is your responsibility to choose your password wisely. We reserve the right to disclose any information about you, including data in your Profile, in order to comply with any applicable laws and/or requests under legal process, to operate our systems properly, to protect our property or rights, and to safeguard the interests of others.</p>
                <h3 class="text-magenta mt-3 mb-3 fn-4">Content posting</h3> 
                <p><strong>Authors:</strong> If you are an author or content contributor posting an article, you represent to us that the Article is unique and not copied from some 3rd party website or company documents. You agree not to copy, scrape or otherwise use any articles or tools for the purpose of redistributing or sending such information.</p>
                <p><strong>Fees and Payments. </strong>If you are an advertiser, vendor, recruiter or employer posting an ad, tool, service or job posting, you agree to pay the fees and any other charges incurred in connection with your user name and password in posting ad, tools, services or jobs through the Service (including any applicable taxes) at the rates in effect when the charges were incurred. All fees and charges are nonrefundable. We may change the fees and charges then in effect, or add new fees or charges, by giving you notice in advance.</p>
                <h4 class="text-magenta mt-3 mb-3 fn-4">General Restrictions</h4> 
                <p>You agree that qkrbiz.com
                    in its sole discretion, may terminate your access to or use of the Site, for any reason, including, without limitation, our belief that you have violated or acted inconsistently with the letter or spirit of these Terms. You agree that any termination of your access to the Site under any provision of these Terms may occur without prior notice to you, and you also agree that qkrbiz.com will not be liable to you for any termination of your access to the Site.</p>
                <h5 class="text-magenta mt-3 mb-3 fn-4">Links to other Web Sites</h5> 
                <p>The Site may contain links to other sites, whose terms of use and privacy policies will be different from ours. Qkrbiz is not responsible for the contents, terms of use, or privacy policies of external sites.</p>
                <h5 class="text-magenta mt-3 mb-3 fn-4">Disclaimers of Warranties</h5>
                <p> YOU AGREE THAT THE SITE AND CONTENTS ARE PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. QkrBiz
                    does not warrant that the Site will be available at any given time, secure, or free of error. You use the Site at your own risk, and you assume the risk that any material downloaded by you from the Site may cause loss of data or damage to your computer system.
                    YOU UNDERSTAND AND AGREE THAT IN NO EVENT WILL Qkrbiz BE LIABLE TO YOU FOR ANY DIRECT OR INDIRECT DAMAGES, EVEN IF Qkrbiz
                    IS AWARE OF THE POSSIBILITY OF SUCH DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS OR FOR ANY OTHER SPECIAL, CONSEQUENTIAL, EXEMPLARY OR INCIDENTAL DAMAGES, HOWEVER CAUSED, WHETHER BASED UPON CONTRACT, NEGLIGENCE, STRICT LIABILITY IN TORT, WARRANTY, OR ANY OTHER LEGAL THEORY </p>
                <h5 class="text-magenta mt-3 mb-3 fn-4">Indemnification</h5> 
                <p>You agree to indemnify, defend and hold harmless Qkrbiz, and its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these Terms, or any negligent or wrongful activity related to the use of the Site, by you or any other person accessing the Site using your account.</p>
                <h6 class="text-magenta mt-3 mb-3 fn-4">Governing Law and Entire Agreement</h6> 
                <p> This Agreement shall be governed by and construed in accordance with the laws of New Delhi, as applied to contracts entered into and performed within New Delhi. You agree to grant jurisdiction over yourself to the courts of New Delhi and designate it as the forum for resolution of all disputes arising under this Agreement.
                    These Terms constitute the entire agreement between the parties, and there are no promises, terms, conditions, or obligations between the parties other than those contained in these Terms. Subject to Qkrbiz
                    's right to modify these Terms, no modification of these Terms will be valid unless in writing and signed by both parties. </p>
                </div>
            </div>`)}>
        </div>
    </section>

    </>
  )
}

export default Terms