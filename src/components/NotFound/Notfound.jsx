import { useHead } from "@unhead/react";
import { Link } from 'react-router';
import ErrorPage from '@/assets/images/error-page.webp';
import { useSetSsrStatus } from '../../utility/ssrStatus';
import './Notfound.scss';

function Notfound() {

	// Bubble a 404 up to the SSR renderer so crawlers see a real
	// 404 status, not a soft-200. No-op on the client.
	useSetSsrStatus(404);

	// Minimal head: noindex, no canonical (don't index broken URLs).
	useHead({
		title: "Qkrbiz | Page Not Found",
		meta: [
			{ name: "robots",    content: "noindex, nofollow" },
			{ name: "googlebot", content: "noindex, nofollow" },
		],
	});

    return(
        <>
           <div className="welcome-page">
			<div className="container">
			   <div className="row">
				  <div className="col-lg-12 text-center">
					  <img loading="lazy" src={ErrorPage} className="img-fluid"  alt="Error page"/>
					  <div className="leads">
						<h2><span className="text-magenta">Oops!</span> Page Not Found.</h2>
						<p className="fn-1">The page you are looking for is not available or has been moved. Try a different page <br/> or go to homepage with the button below.</p>
					  </div>
					  <p className="leads">
					     <Link to="/" className="btn btn-outline-magenta">Back to Home</Link>
					  </p>
				  </div>
				</div>
			  </div>
		  </div>
        </>
    )
        
}
export default Notfound;