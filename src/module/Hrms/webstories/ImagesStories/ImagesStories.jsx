import { Image } from "react-bootstrap";
import { storyGroupsData } from "../storyGroupsData";
import { Link } from "react-router";
import useSanitizeHtml from "../../../../hooks/useSanitizeHtml";
import "./ImagesStories.scss";
const ImagesStories = () => {
   
  const sanitizeHtml = useSanitizeHtml();

  return (
    <div className="stories-container-list">
      <div className="container mb-5">
        <p className="fn-5 mb-0">HRMS, Payroll management, Attendance, Field Force Management</p>
        <h1 className="text-pink mt-0 mb-5">TRENDS STORIES</h1>
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
          {storyGroupsData.map((group) => (
            <div className="col-lg-4 d-flex" key={group.id}>
              <div className="card mb-3 w-100 border">
                  <Link to={`/hrms-software/web-stories/${group.storyUrl}`} className="story-card-link">
                    <Image
                      fluid
                      rounded
                      loading="lazy"
                      src={group.cover}
                      alt={group.name}
                      className="stories-thumb"
                    />
                    <div className="card-body">
                    <h3 className="text-magenta story-title mb-0" dangerouslySetInnerHTML={sanitizeHtml(group.name)} />
                    <p className="text-black story-title mt-3 mb-0" dangerouslySetInnerHTML={sanitizeHtml(group.desc)} />
                    </div>
                  </Link>
                
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="col-lg-3 d-flex">
          <div className="card card-supercharg-img mb-3 w-100 shadow-2 border">
              <div className="card-body">
                <h3 className="mb-4"><span dangerouslySetInnerHTML={sanitizeHtml("Supercharge your HR <p>with <span class='text-magenta'>QkrHR</span></p>")}></span></h3>
                <Link to="/signup" className='btn btn-gradient mb-2'>Request a demo</Link>
              </div>
          </div>
        </div>
      </div>
        

      </div>
    </div>
  );
};

export default ImagesStories;
