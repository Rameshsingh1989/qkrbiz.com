
import { Link } from 'react-router';
import { Container,Row,Col,Image} from "react-bootstrap";
import thankYou from "@/assets/images/contact/thankYou.svg";
import youAllSet from "@/assets/images/contact/YouAllSet.svg";
import checkYourInbox from "@/assets/images/contact/CheckYourInbox.svg";
import demoComingUp from "@/assets/images/contact/DemoComingUp.svg";
import getReady from "@/assets/images/contact/GetReady.svg";
import didYouKnow from "@/assets/images/contact/DidYouKnow.svg";
import linkdin from "@/assets/images/contact/linkdin.svg";
import youtube from "@/assets/images/contact/Youtube.svg";
import blog from "@/assets/images/contact/blog.svg";
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import useSanitizeHtml from '../../hooks/useSanitizeHtml';

import "./ThankYou.scss";

// import { getUsers } from '../../services/userService';

const ThankYouMeta = {
  title: "You're One Step Closer to Smarter Business Solutions",
  description: "Thank you for connecting with Qkrbiz! We're excited to help streamline your business operations. Our team will reach out soon. Stay tuned for more updates and solutions!",
};


const ThankYou = () => {

    const sanitizeHtml = useSanitizeHtml();

    const socialImage = ImagesUrl_ogImages.Home;

    const stepsData = [
        {
            img: checkYourInbox,
            title: "Check Your Inbox",
            desc: "Watch for our welcome email with your getting-started guide",
            cls: "bg-pink-light"
        },
        {
            img: demoComingUp,
            title: "Demo Coming Up",
            desc: "Our experts will reach out within 24 hours to schedule your personalized tour",
            cls: "bg-info-light"
        },
        {
            img: getReady,
            title: "Get Ready",
            desc: "Prepare to experience HR management like never before",
            cls: "bg-pink-light"
        }
    ];
    const SocialData = [
        {
           title: "While You Wait...",
           desc: `Explore our <span class="text-pink">Resource Hub </span> to discover expert HR insights, best practices, and success stories from companies just like yours.`,
           SocialLinks:[
                {
                    img: linkdin,
                    text: "Follow us on LinkedIn",
                    url: "https://www.linkedin.com/company/qkrhr-hrms/"
                },
                {
                    img: youtube,
                    text: "Watch our Videos",
                    url: "https://www.youtube.com/@QkrHR/"
                },
                {
                    img: blog,
                    text: "Read our Blog",
                    url: "/hrms-software/qkrhr-blogs"
                }
            ]
        }
    ];

  return (
    <>
        <RouteSpecificMeta
        title={ThankYouMeta.title}
        description={ThankYouMeta.description}
        image={socialImage}
        SchemaData="" 
        />
      <section className="window-top-banner">
        <Container>

            <Row className="row justify-content-center align-items-center w-height text-center">
                <Col lg="12" className="text-center">
                    <Image loading="lazy" src={thankYou} alt="You're All Set!" className="mb-2"/>
                    <h1 className="header-title mb-3 text-magenta">You're All Set! <img loading="lazy" src={youAllSet} alt="You're All Set!" /></h1>
                    <p className="header-text mb-5" dangerouslySetInnerHTML={sanitizeHtml(`You’re One Step Closer to Smarter HR!`)}></p>
                </Col>
                <Col lg="6">
                    <div className='card thnak-you'>
                        <div className="card-body">
                            <h3 className="text-pink">Fantastic News!</h3>
                            <p dangerouslySetInnerHTML={sanitizeHtml(`Thank you for choosing QkrHR for your HR management needs. We're thrilled to have you on board and can't wait to show you how we can transform your HR operations.`)}></p>
                        </div>
                    </div>
                </Col>
                <Col xl="12" xxl="9" className="thank-sec">
                    <Row className="row row-space-1_5">
                        {stepsData.map((item, index) => (
                            <Col lg="4" key={index}>
                                <div className={`card ${item.cls}`}>
                                    <div className="card-body">
                                        <img loading="lazy" src={item.img} alt={item.text} className="mb-3" />
                                        <h3 dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                                        <p dangerouslySetInnerHTML={sanitizeHtml(item.desc)}></p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row className="row row-space-1_5 my-lg-5">
                        <Col xl="12" xxl="12">
                            <div className='card bg-info-light'>
                                <div className="card-body bg-br-unset">
                                    <h3 className="text-pink"><span dangerouslySetInnerHTML={sanitizeHtml('Did You Know?')} />
                                    <img loading="lazy" src={didYouKnow} alt="You're All Set!" className="mb-3" /></h3>
                                    <p dangerouslySetInnerHTML={sanitizeHtml(`Organizations using QkrHR save an average of 15 hours per week on HR tasks. That's over 780 hours a year you can reinvest in growing your business!`)}></p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {SocialData.map((item, index) => (
                        <Row className="row justify-content-center row-space-1_5 thankyou-social mb-5"  key={index}>
                            <Col xl="12" xxl="82" className="text-center mb-3">
                                <h3 className="text-pink mb-3" dangerouslySetInnerHTML={sanitizeHtml(item.title)}></h3>
                                <p dangerouslySetInnerHTML={sanitizeHtml(item.desc)}></p>
                            </Col>
                            {item.SocialLinks.map((items, index) => (
                                <Col lg="3" key={index}>
                                    <Link to={items.url} target="_blank" className="d-flex align-items-center" rel="noopener">
                                        <div className="flex-shrink-0">
                                            <img loading="lazy" src={items.img} alt={items.text} />
                                        </div>
                                        <div className="flex-grow-1" dangerouslySetInnerHTML={sanitizeHtml(items.text)}></div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                     ))}
                    <h5 className='mt-4'><span dangerouslySetInnerHTML={sanitizeHtml(`Need immediate assistance? Reach out to us at`)}/> 
                    &nbsp;<Link to="mailto:sales@qkrbiz.com">sales@qkrbiz.com</Link></h5>
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}
export default ThankYou;
