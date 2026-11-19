import { useEffect } from 'react';
import { Outlet } from 'react-router'; 

const WebstoriesLayout = () => {
  
  useEffect(() => {
    document.body.classList.add("pd-t");
    return () => {
      document.body.classList.remove("pd-t");
    };
  }, []);

  return (
    <>  
          <Outlet />
    </>
  )
}

export default WebstoriesLayout;