
import { Link } from "react-router-dom";
import Services from "./pageComponents/services-component";

function App() {
  return (
    <div className="relative flex bg-gray-400 flex-col">

      <img 
        src="/images/banner.jpg"
        alt='Grey Graphics Banner'
        className="w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 h-screen pt-48 w-full flex flex-col items-center text-white z-10">
        <p className="text-4xl  mx-4 text-center mb-4">Welcome to Grey Graphix Co.</p>
        
        <Link className='hover:scale-125 no-underline transition-all text-white text-xl border-4 border-black py-2  px-4 rounded-lg active:scale-110 cursor-pointer bg-gray-600 border-solid' to='/quotes'>Get a Quote</Link>



      </div>

      <div className="mx-3 my-2 mt-8  md:mx-auto">
        <Services />
      </div>

    </div>
  );
}

export default App;
