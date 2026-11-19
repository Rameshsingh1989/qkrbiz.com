import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { BonusData, ChooseBestHrmsData, ComparisonData, FeatureData, FinalThoughtsData, HappensWithoutData, NeedHRSoftwareData, OverlookedData, QkrHRApartData, SmallMediumSizedData, SmeFaqData , SmallMediumSizedMeta } from "./SmallMediumSizedData"
import RouteSpecificMeta from "../../../../components/Seo/RouteSpecificMeta";
import QkrHeroSectionRow from "../../../../components/QkrHeroSectionRow/QkrHeroSectionRow";
import ClientLogoScroll from "../../../../components/ClientLogoScroll/ClientLogoScroll";
import { CustomerAllData } from "../../../../pages/Customers/CustomersAllData";
import { ogImages as ImagesUrl_ogImages } from '../../../../assets/images';
import FaqComponent from "../../../../components/FaqComponent/FaqComponent";
import { SmallSizedSchemaData } from "./SmallSizedSchemaData";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import SectionHeading from "../../../../components/SectionHeading/SectionHeading";
import BlogCard from "../../HrmsBlogs/BlogComponent/BlogCard/BlogCard";
import { HrmsBlogCardData } from "../../QkrhrHome/HrmsBlogCardData";

import './SmallMediumSized.scss';

const SmallMediumSized = () => {

    const socialImage = ImagesUrl_ogImages.QkrHr;
    const sanitizeHtml = useSanitizeHtml();

  return (
    <div className="smes-page">
        <RouteSpecificMeta
        title={SmallMediumSizedMeta.title}
        description={SmallMediumSizedMeta.description}
        image={socialImage}
        SchemaData={SmallSizedSchemaData}
        />
        <QkrHeroSectionRow HeroSectionData={SmallMediumSizedData} col1={12} col2={12} xl1={12} xl2={12}/>

        <ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />

        <section className="py-3 mb-5">
            {NeedHRSoftwareData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={12} xl={12} className="text-center">
                            <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                </Container>
            ))}
        </section>

        <section className="happens-without bg-gray-extralight">
            {HappensWithoutData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={12} xl={10} className="text-center">
                            <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="row">
                        {head.List .map((list, index)=>(
                            <Col lg={4} xl={4} className="text-center d-flex"  key={index}>
                                <Card className="w-100">
                                    <Card.Body>
                                    {list.icon && <Image loading="lazy" className="icons" src={list.icon} alt={list.alt} /> }
                                    {list.head && <h3><span dangerouslySetInnerHTML={sanitizeHtml(list.head)}></span></h3>}
                                    {list.desc && <p className="text-magenta"><span dangerouslySetInnerHTML={sanitizeHtml(list.desc)}></span></p>}
                                    <p className="mb-0"><span dangerouslySetInnerHTML={sanitizeHtml(list.desc)}></span></p>
                                    </Card.Body>
                                </Card>
                                
                            </Col>
                        ))}
                    </Row>
                    <p className="fn-4 text-center">{head.subDesc}</p>
                </Container>
            ))}
        </section>

        <section className="mt-5">
            {ComparisonData.map((comp, iIndex) => (
                <Container key={iIndex}>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={10} xl={10} className="text-center">
                             <SectionHeading subTitle="" title={comp.title} description={comp.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={10} xl={10} className="text-center">
                            <div style={{overflow: 'hidden', borderRadius: '8px', border: '1px solid #f1f1f1ff' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ backgroundColor: '#F0F0F0', borderBottom: '2px solid #dee2e6' }}>
                                            <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '1rem' , color: '#495057' }}>
                                                Software
                                            </th>
                                            <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '1rem', color: '#495057' }}>
                                                Pricing
                                            </th>
                                            <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '1rem', color: '#495057' }}>
                                                Key Focus
                                            </th>
                                            <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '1rem', color: '#495057' }}>
                                                Ideal For
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comp.List.map((item, index) => (
                                            <tr key={index} style={{
                                                backgroundColor: item.highlighted ? '#96006B' : index % 2 === 0 ? 'white' : '#fff', fontWeight: '600',
                                                borderBottom: '1px solid #dee2e6'
                                            }}>
                                                <td style={{ padding: '1rem 1.5rem', color: item.highlighted ? '#fff' : '#212529' }}>{item.software}</td>
                                                <td style={{ padding: '1rem 1.5rem', color: item.highlighted ? '#fff' : '#495057' }}>{item.pricing}</td>
                                                <td style={{ padding: '1rem 1.5rem', color: item.highlighted ? '#fff' : '#495057' }}>{item.keyFocus}</td>
                                                <td style={{ padding: '1rem 1.5rem', color: item.highlighted ? '#fff' : '#495057' }}>{item.idealFor}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="fn-4 text-center mt-4">{comp.subDesc}</p>
                        </Col>
                    </Row>
                </Container>
            ))}
        </section>

        <section className="sme-feature">
            {FeatureData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={10} xl={10} className="text-center">
                            <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row>
                        {head.List .map((list, index)=>(
                            <Col lg={4} xl={3}  key={index} className="d-flex">
                                <Card className="w-100">
                                    <Card.Body>
                                    {list.icon && <Image loading="lazy" className="icons" src={list.icon} alt={list.head} /> }
                                    {list.head && <h3 className="fn-4"><span dangerouslySetInnerHTML={sanitizeHtml(list.head)}></span></h3>}
                                    <p className="mb-0"><span dangerouslySetInnerHTML={sanitizeHtml(list.desc)}></span></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <p className="fn-4 text-center">{head.subDesc}</p>
                </Container>
            ))}
        </section>

        <section className="py-5 bg-gray">
               {OverlookedData.map((head, hIndex)=>(
                    <Container key={hIndex}>
                        <Row className="justify-content-center align-items-center row">
                            <Col lg={10} xl={7} className="text-center">
                                <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                            </Col>
                        </Row>
                    </Container>
               ))}
        </section>

        <section className="choose-best-hrms">
            {ChooseBestHrmsData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={10} xl={10} className="text-center">
                            <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                    <Row>
                        {head.List .map((list, index)=>(
                            <Col lg={4} xl={3}  key={index}>
                                <Card className="w-100">
                                    <Card.Body>
                                     <Image loading="lazy" className="icons" src={list.icon} alt={list.head} /> 
                                    {head && <h3><span dangerouslySetInnerHTML={sanitizeHtml(list.head)}></span></h3>}
                                    <p className="mb-0"><span dangerouslySetInnerHTML={sanitizeHtml(list.desc)}></span></p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="justify-content-center align-items-center row">
                        <Col lg={7} xl={7} className="text-center">
                            <p className="fn-4 text-center"><span dangerouslySetInnerHTML={sanitizeHtml(head.subDesc)}></span></p>
                        </Col>
                    </Row>
                </Container>
            ))}
        </section>

         <section className="qkrhr-apart mb-3 mt-3">
            {QkrHRApartData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <Row className="justify-content-between align-items-center row">
                        <Col lg={6} xl={5} className="order-lg-1 order-2">
                            <Image loading="lazy" fluid src={head.imageUrl} alt={head.title.replace(/<\/?[^>]+(>|$)/g, "")}  />
                        </Col>
                        <Col lg={6} xl={6} className="order-lg-2 order-1">
                            <SectionHeading subTitle="" title={head.title} description={head.desc} subTitleCenter={false} headingUnderLine={false} />
                            {head.List .map((list, index)=>(
                               <div className="d-flex justify-content-start align-items-start"  key={index}>
                                    <span className="flex-shrink-0 p-2 rounded-2"><Image loading="lazy" fluid src={list.icon} alt={list.head} /></span>
                                    <div className="flex-shrink-1 ms-3">
                                        <h3 className="mb-2" dangerouslySetInnerHTML={sanitizeHtml(list.head)} />
                                        <p className="mb-0 text-muted fn-3" dangerouslySetInnerHTML={sanitizeHtml(list.desc)} />
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            ))}
        </section>

        <section className="will-love mb-3">
            {BonusData.map((head, hIndex)=>(
                <Container key={hIndex}>
                    <SectionHeading subTitle="" title={head.title} description="" headingUnderLine={false} />
                    <Row className="justify-content-center align-items-center">
                        {head.List .map((list, index)=>(
                            <Col lg={4} xl={4} key={index}>
                                <div className="d-flex justify-content-start align-items-center">
                                        <span className="flex-shrink-0 p-2"><Image loading="lazy" fluid src={list.icon} alt={list.head} /></span>
                                        <div className="flex-shrink-1 ms-3">
                                            <h3 className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(list.head)} />
                                        </div>
                                    </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ))}
        </section>

        <section className="py-5 bg-gray">
            {FinalThoughtsData.map((head, hIndex)=>(
                <Container key={hIndex}>

                    <Row className="justify-content-center align-items-center">
                        <Col lg={12} xxl={10} className="text-center">
                             <SectionHeading subTitle="" title={head.title} description={head.desc} headingUnderLine={false} />
                        </Col>
                    </Row>
                </Container>
            ))}
        </section>
       
        <BlogCard BlogCardData={HrmsBlogCardData} componentSec=""/>
        
        {SmeFaqData && (
			<FaqComponent subTitle="" title="Every Small Business Compliance Law. <span class='text-gradient'>Automated.</span>" description="Small businesses carry the same statutory duties as large ones. One missed filing can mean penalties and notices. QkrHR automates PF, ESI, Professional Tax and TDS from live attendance data." FaqData ={SmeFaqData} />
		)}
        
    </div>
  )
}

export default SmallMediumSized