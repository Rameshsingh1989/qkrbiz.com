import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router';
import './SocialNetwork.scss';


export const SocialNetwork = ({socialNetwork}) => {
  return (
    <>
        <ul className={`list-unstyled ${socialNetwork}`}>
            <li><Link to="https://x.com/QkrBiz" target='_blank' className="icoTwitter" title="Twitter"  rel="noopener"><FaXTwitter/></Link></li>
            <li><Link to="https://www.facebook.com/qkrhr.software/" target='_blank' className="icoFacebook" title="Facebook"  rel="noopener"><FaFacebookF/></Link></li>
            <li><Link to="https://www.instagram.com/qkrbiz/" target='_blank' className="icoInstagram" title="Instagram"  rel="noopener"><FaInstagram/></Link></li>
            <li><Link to="https://www.linkedin.com/company/qkrhr-hrms/" target='_blank' className="icoLinkedin" title="LinkedIn"  rel="noopener"><FaLinkedinIn/></Link></li>
            <li><Link to="https://www.youtube.com/@QkrHR/" target='_blank' className="icoYoutube" title="YouTube"  rel="noopener"><FaYoutube/></Link></li>
            <li><Link to="https://in.pinterest.com/qkrbiz/" target='_blank' className="icoYoutube" title="pinterest"  rel="noopener"><FaPinterestP/></Link></li>
        </ul>	
    </>
  )
}
