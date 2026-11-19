import { Fragment } from 'react';
import QkrHeroSection from '../../components/QkrHeroSection/QkrHeroSection.jsx';
import RouteSpecificMeta from "../../components/Seo/RouteSpecificMeta";
import { CustomersMeta } from "./CustomersAllData";
import { CustomerAllData, CustomersHeadData } from './CustomersAllData.js';
import useSanitizeHtml from '../../hooks/useSanitizeHtml.js';
import { ogImages as ImagesUrl_ogImages } from '../../assets/images';
import customersSchemaData from './customersSchemaData.js';
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx';
import './Customers.scss';

const Customers = () => {

  const sanitizeHtml = useSanitizeHtml();
  const socialImage = ImagesUrl_ogImages.Customers;

  return (
    <>
	<RouteSpecificMeta
	title={CustomersMeta.title}
	description={CustomersMeta.description}
	image={socialImage}
	SchemaData={customersSchemaData}
	/>
    <QkrHeroSection HeroSectionData={CustomersHeadData} col1={5} col2={5} xl1={6} xl2={6}/>
	
      <div className="wrapper-area">
            <div className="container">
					{CustomerAllData.map((cliList, CliIndex) =>(
						<Fragment key={CliIndex}>
							<div className="row">
								<div className="col-lg-12 mb-4">
									<div className="heading-title text-center">
										 <SectionHeading subTitle="" title={cliList.title} description={cliList.desc} subTitleCenter={false} headingUnderLine={false} /> 
									</div>
								</div> 
							</div>
							<div className="row">
								<div className="form-row">
									{cliList.CustomersList.map((client, index) => (
										<div className="col-lg-2 col-sm-4 col-6 px-0" key={index}>
											<div className={`clients__logo ${client.unsetBorder}`}>
												<img loading="lazy" src={client.imgUrl} alt={client.alt} className={client.cls} />
											</div>
										</div> 
									))}
								</div>   
							</div>
						</Fragment>
					))}
            </div> 
        </div>
    </>
  )
}

export default Customers;