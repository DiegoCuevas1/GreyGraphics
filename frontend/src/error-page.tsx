import { Link, useRouteError} from "react-router-dom";
import NavBar from "./pageComponents/nav-bar";


interface CustomRouteError{
  statusText: string;
}

export default function ErrorPage() {
  const error = useRouteError() as CustomRouteError;
  console.error(error.statusText);

  return (
    <div className="bg-[#B5b5b5]">  
      <div className="flex"><NavBar /></div>
      <div className="bg-[#B5b5b5] h-screen">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred. Return to our <Link to={'/'} className="text-gray-600 hover:text-gray-800 active:text-gray-500">Home Page</Link>.</p>
        {error && (<p>
            <i>{error.statusText}</i>
        </p>)}
      </div>
      
    </div>
  );
}
