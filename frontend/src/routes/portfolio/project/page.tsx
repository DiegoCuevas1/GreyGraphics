import { useParams } from "react-router-dom";

export default function Project()  {
    const { projectid } = useParams();
  
    // Use projectid to fetch or display project details
    // For example:
    return (
      <div>
        <h1>Project ID: {projectid}</h1>
        {/* Other project details */}
      </div>
    );
  };

  