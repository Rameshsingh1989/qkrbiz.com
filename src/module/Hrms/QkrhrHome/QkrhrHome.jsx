import { Fragment} from 'react';
import { Link} from 'react-router';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import { BenefitsData, HrHeadData, HrmsFAQ, PayrollProblemsData, WhatMakesUs, businessSolutionsData,sliderData, builtEveryStakeholderData  , QkrhrHomeMeta } from './QkrhrHomeData';
import QkrHeroSectionRow from '../../../components/QkrHeroSectionRow/QkrHeroSectionRow';
import SliderViewMulti from '../../../components/SliderViewMulti/SliderViewMulti';
import FaqComponent from '../../../components/FaqComponent/FaqComponent';
import ClientLogoScroll from '../../../components/ClientLogoScroll/ClientLogoScroll';
import { CustomerAllData } from '../../../pages/Customers/CustomersAllData';
import ProductMenusImg from '../../../components/ProductMenusImg/ProductMenusImg';
import { HeaderMenuData } from '../../../navigation/data/HeaderMenuData';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { citiesIndia } from '../HrmsLocation/DelhiHrms/DelhiHrmsData';
// import PlatformFeatures from "../../../components/PlatformFeatures/PlatformFeatures";
import { ClientStories } from '../../../components/ClientStories/ClientStories';
import BenefitsSection from '../../../components/BenefitsSection/BenefitsSection';
import RouteSpecificMeta from "../../../components/Seo/RouteSpecificMeta";
import { ogImages as ImagesUrl_ogImages } from '../../../assets/images';
import { QkrhrHomeSchemaData } from './QkrhrHomeSchema';
import useSanitizeHtml from '../../../hooks/useSanitizeHtml';
import OnehrSoftware from './OnehrSoftware';
import BlogCard from '../HrmsBlogs/BlogComponent/BlogCard/BlogCard';
import { HrmsBlogCardData } from './HrmsBlogCardData';

import './QkrhrHome.scss';

function QkrhrHome() {

	const socialImage = ImagesUrl_ogImages.QkrHr;

	const sanitizeHtml = useSanitizeHtml();
	
	return (
		<>
			<RouteSpecificMeta
			title={QkrhrHomeMeta.title}
			description={QkrhrHomeMeta.description}
			image={socialImage}
			SchemaData={QkrhrHomeSchemaData}
			/>
           <QkrHeroSectionRow HeroSectionData={HrHeadData} headerModal={true} col1={12} col2={12} xl1={12} xl2={12}/>

			<ClientLogoScroll logoSlider="logo-scroll logo-slider" ClientLogo={CustomerAllData} hide={false} show={false} count1={6} count2={4} count3={2} count4={2} count5={2} />
			
			<section className="hrms-problems">
				{PayrollProblemsData.map((data, index) => (
					<Container key={index}>
						<Row>
							<Col lg={12} xxl={10} className="mx-auto text-center">
							  	<SectionHeading subTitle={data.subTitle} title={data.title} description={data.description} headingUnderLine={false} />
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Col lg={12} xxl={12}>
								<Row className="g-4">
									{data.problems.map((problem, pIndex) => (
										<Col lg={problem.full ? 12 : 4} key={pIndex}>
											<div className={`problem-card h-100 ${problem.bGcolor}`}>
												<div className="problem-head">
													<div className="problem-icon">
														<img src={problem.icon} alt={problem.title} loading="lazy" decoding="async" />
													</div>
													<h3 className="mb-0" dangerouslySetInnerHTML={sanitizeHtml(problem.title)} />
												</div>
												<div className="problem-content">
													<span className="problem-subtitle" dangerouslySetInnerHTML={sanitizeHtml(problem.subtitle)} />
													<p className="mb-0 mt-3" dangerouslySetInnerHTML={sanitizeHtml(problem.description)} />
												</div>
											</div>
										</Col>
									))}
								</Row>
							</Col>
						</Row>
					</Container>
				))}
			</section>

		   <ProductMenusImg headerData={HeaderMenuData} appsClass="apps-hr" filterType="isHrms" subFilterType="" />

		   <SliderViewMulti slidersData={sliderData} />

			{builtEveryStakeholderData?.map((data, index) => (
				<OnehrSoftware key={index} data={data} sectionCls="onehr-software" />
			))}

			<section className="what-makes-us">
				{WhatMakesUs.map((item, index)=>(
					<Container className="what-makes-us-bg" key={index}>
						<Row className="justify-content-center">
							<Col lg={12} className="text-center mb-5">
								<SectionHeading subTitle="" title={item.title} description={item.description} headingUnderLine={false} />
							</Col>
						</Row> 
						<Row className="justify-content-center">
							<Col lg={4} className="item-end">
								{item.UList.slice(0, 2).map((list, uIndex) => (
									<Card className={`${list.pcls}`} key={uIndex}>
										<Card.Body>
											<div className={`text-right ${list.cls1}`}>
												<h3>{list.head}</h3>
												<ul className="ul-icon mb-0">
													{list.List.map((text, liIndex)=> (
													<li className="tick-icon-magenta" key={liIndex}>{text.li}</li>
													))}
												</ul>
											</div>
										</Card.Body>
									</Card>
								))}
							</Col>
							<Col lg={3} className="text-center bottom-space">
							    <img src={item.imgUrl} className="img-fluid" alt={item.alt} loading="lazy" decoding="async"/>
							</Col>
							<Col lg={4} className="item-end item-start">
								{item.UList.slice(2).map((list, uIndex) => (
									<Card className={`${list.pcls}`} key={uIndex}>
										<Card.Body>
											<div className={`text-right ${list.cls1}`}>
												<h3>{list.head}</h3>
												<ul className="ul-icon mb-0">
													{list.List.map((text, liIndex)=> (
													<li className="tick-icon-magenta" key={liIndex}>{text.li}</li>
													))}
												</ul>
											</div>
										</Card.Body>
									</Card>
								))}
							</Col>
						</Row>
					</Container>
				))}
			</section>

			{businessSolutionsData.map((section, index) => (
				<section key={index} className="business-solutions py-5">
					<Container>
						<Row className="justify-content-center text-center">
							<Col lg={12} xl={10}>
								<SectionHeading subTitle="" title={section.title} description={section.description} headingUnderLine={false} />
							</Col>
						</Row>
						<Row>
							{section.industries.map((item) => (
								<Col lg={3} md={6} key={item.id}>
									{item.link?.trim()? (
										<Link to={item.link} className="text-decoration-none text-dark d-block h-100">
											<Card className="h-100 text-center shadow-sm border-1 rounded-4">
												<Card.Body>
													<img src={item.icon} alt={item.title} width={60} className="mb-3" loading="lazy" decoding="async" />
													<h3>{item.title}</h3>
													<p className="text-muted small">{item.description} </p>
												</Card.Body>
											</Card>
										</Link>
									):(
										<Card className="h-100 text-center shadow-sm border-1 rounded-4">
											<Card.Body>
												<img src={item.icon} alt={item.title} width={60} className="mb-3" loading="lazy" decoding="async" />
												<h3>{item.title}</h3>
												<p className="text-muted small">{item.description} </p>
											</Card.Body>
										</Card>
									) }
								</Col>
							))}
						</Row>
						<Row className="justify-content-center">
							<Col lg={12} xl={12} xxl={12}>
								<Card className="shadow-sm border-1 rounded-4  mt-5">
									<Card.Body className="p-4">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<SectionHeading subTitle="" title={`${section.cta.title} <span className="text-gradient fn-sb"> ${section.cta.highlight} </span>`} description="" subTitleCenter={false} headingUnderLine={false} />
											</div>
											<div className="text-end mt-3 mt-md-0 col-lg-8">
												<Button as={Link} to={section.cta.buttonLink} className="rounded-pill btn btn-magenta px-4">
													{section.cta.buttonText}
												</Button>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			))}
			
			<section className="hrms-city text-center mt-4 bg-magenta">
				<Container>
					<Row className="justify-content-center text-center">
						<Col lg={12} xl={11} xxl={9}>
							{citiesIndia.map((cityText, cidx) => (
								<div key={cidx}>
									<SectionHeading subTitle="" title={cityText.title} description={cityText.description} headingUnderLine={false} />

									<div className="d-flex flex-wrap justify-content-center gap-3 mt-4 city-category-btn">
										{cityText.cities.map((city, idx) => (
										    <Fragment key={idx}>
												<Link to={city.url} className="btn btn-outline-light rounded-5 m-2" title={city.name}>
													<img src={city.icon} alt={city.name} className="icons" loading="lazy" decoding="async" />
													{city.name}
												</Link>
											</Fragment>
										))}
									</div>
								</div>
							))}
						</Col>
					</Row>
				</Container>
			</section>

			<BlogCard BlogCardData={HrmsBlogCardData} componentSec="pb-0"/>

			{/* <PlatformFeatures /> */}

			<ClientStories cls="" count1={3} count2={2} count3={1} />

			<BenefitsSection addClss="hrms-benift" data={BenefitsData} title="Benefits of HRMS Software" subtitle="Why Indian businesses choose QkrHR to run HR, payroll and compliance on one platform" />

			{HrmsFAQ && (
				<FaqComponent subTitle="" title="Frequently Asked Questions" description="Haven't got your answer? <span class='text-gradient text-underline'>Contact our support now</span>" FaqData ={HrmsFAQ} />
			)}

		</>
	)
}

export default QkrhrHome;
