import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Close from '@mui/icons-material/Close';
function NavBar() {
    const [isModalOpen,setIsModalOpen]=useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    useEffect(() => {
      const handleEsc = (event:KeyboardEvent) => {
        if (event.code === 'Escape') {
          closeModal();
        }
      };
  
      window.addEventListener('keydown', handleEsc);
  
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }, []);
    return (
      // <div className="flex bg-[#808080] w-screen flex-col space-y-2 md:flex-row">
      //   <div className="justify-center flex mx-auto md:ml-4 w-96">
      //     <Link to="/">
      //       <img
      //         src="/images/GreyGraphix.png"
      //         alt="Logo"
      //         className="w-36 md:w-48"
      //       />
      //     </Link>
      //   </div>
      //   <div className="flex mx-auto md:ml-auto md:mr-20">
      //     <ul className="font-semibold my-auto flex space-x-4 text-gray-700 text-lg pb-4 ">
      //       <Link to='/about-us'><li className='transition-all bg-gray-300 rounded-xl shadow-lg p-2 hover:bg-gray-500 hover:text-white active:bg-gray-600 active:scale-95 my-auto cursor-pointer'>About Us</li></Link>
      //       <Link to='/quotes'><li className='transition-all bg-gray-300 rounded-xl shadow-lg p-2 hover:bg-gray-500 hover:text-white active:bg-gray-600 active:scale-95 my-auto cursor-pointer'>Quotes</li></Link>
      //       <li className='transition-all bg-gray-300 rounded-xl shadow-lg p-2 hover:bg-gray-500 hover:text-white active:bg-gray-600 active:scale-95 my-auto cursor-pointer'>Services</li>
      //       <Link to='/contact'><li className='transition-all bg-gray-300 rounded-xl shadow-lg p-2 hover:bg-gray-500 hover:text-white active:bg-gray-600 active:scale-95 my-auto cursor-pointer'>Contact</li></Link>
      //     </ul>
      //   </div>
      // </div>
      // <div className="drawer">
      //   <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      //   <div className="drawer-content flex flex-col">
      //   {/* Navbar */}
      //     <div className="w-full navbar bg-[#B0B0B0]">
      //     <div className="flex-none lg:hidden">
      //     <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
      //       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      //     </label>
      //     </div> 
      //     <div className="flex-1 px-2 items-center justify-center lg:ml-60 ">
      //       <img
      //         src="/images/GreyGraphix.png"
      //         alt="Logo"
      //         className="w-36 md:w-48"
      //       />
      //     </div>
      //     <div className="flex-none hidden lg:block">
      //     <ul className="menu menu-horizontal">
      //       {/* Navbar menu content here */}
      //       <li><a>Navbar Item 1</a></li>
      //       <li><a>Navbar Item 2</a></li>
      //     </ul>
      //     </div>
      //     </div>
       
      //     </div> 
      //     <div className="drawer-side">
      //     <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
      //     <ul className="menu p-4 w-80 items-center justify-center min-h-full bg-base-200">
      //       {/* Sidebar content here */}
      //       <li><a>Sidebar Item 1</a></li>
      //       <li><a>Sidebar Item 2</a></li>
      //       <button className="button" >open/close</button>
          
      //     </ul>
      //   </div>
      // </div>
      <div className="flex w-full  bg-[#B5b5b5]  ">
           <Link to="/" className='xl:ml-40'>
          <img
            src="/images/GreyGraphix.png"
            alt="Logo"
            className="w-36 md:w-48"
            />
            </Link>
          <ul className="text-xl hidden lg:flex lg:ml-auto lg:mr-24 xl:mr-60 lg:text-2xl lg:gap-16 list-none items-center gap-6">
            <li className='transition-all transform hover:scale-110'><Link to="/about-us" className='text-black'>About Us</Link></li>
            <li className='transition-all transform hover:scale-110'><Link to="/quotes" className='text-black'>Quote</Link></li>
          <li className='transition-all transform hover:scale-110'><Link to='/' className='text-black'>Services</Link></li>
          <li className='transition-all transform hover:scale-110'><Link to="/portfolio" className='text-black'>Our Work</Link></li>
            <li className='transition-all transform hover:scale-110'><Link to="/contact" className='text-black'>Contact</Link></li>
          </ul>
         
            <div className='w-48 flex ml-24  items-center lg:hidden'>
              <IconButton  onClick={openModal}>
                <MenuIcon fontSize='large' />
              </IconButton>
              {isModalOpen && (
                <div className={`fixed inset-0 p-0 z-50 overflow-x-hidden bg-[#909090] flex flex-col items-center justify-center `}>
                    <div className="absolute top-0 right-0 p-6">
                      {/* Close button */}
                      <IconButton onClick={closeModal} size='large' >
                        <Close fontSize='large' className='text-black'/>
                      </IconButton>
                    </div>
                    <ul className='flex flex-col list-none justify-center text-center text-3xl w-screen p-0 space-y-2 '>
                    
                        <li className='text-black transition-all transform hover:scale-125'> <Link onClick={closeModal} to="/" className='text-black'>Home</Link></li>
                    <li className='text-black transition-all transform hover:scale-125'><Link onClick={closeModal} to="/contact" className='text-black'>About Us</Link></li>
                      <li className='text-black transition-all transform hover:scale-125'><Link onClick={closeModal} to="/contact" className='text-black'>Services</Link></li>
                      <li className='text-black transition-all transform hover:scale-125'><Link onClick={closeModal} to="/portfolio" className='text-black'>Our Work</Link></li>
                      <li className='text-black transition-all transform hover:scale-125'><Link onClick={closeModal} to="/quotes" className='text-black'>Quote</Link></li>
                      <li className='text-black transition-all transform hover:scale-125'><Link onClick={closeModal} to="/contact" className='text-black'>Contact</Link></li>
                    </ul>

                    <div className='flex p-0 justify-center text-lg'>
                      <Link  to="https://www.instagram.com/" target='_blank' className='text-black transition-all transform hover:scale-125'>
                      <InstagramIcon fontSize='large'/>
                      </Link>
                    </div>

                    
                  </div>
        )}
            </div>
          </div>
    

  
    );
  }
  
  export default NavBar;
  