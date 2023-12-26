function AboutUs() {

    return (
      <div className="flex flex-col space-y-4 mb-8 items-center justify-center mt-2 mx-auto">
            <div className="flex justify-center">
                <h2 className="text-gray-800 font-semibold text-4xl">About Us</h2>
            </div>
            <div className="flex flex-col space-y-2 md:flex-row-reverse md:m-auto md:justify-center md:gap-4 md:items-center">
                <div className="w-96"><img className="h-80  md:h-[50%]" src="https://via.placeholder.com/1920x1080" />
                </div>
                <div className="w-96 mx-auto">
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                
            </div>
            <div className="flex flex-col space-y-2 md:flex-row md:m-auto md:justify-center md:gap-4 md:items-center">
                <div className=""><img className="mx-auto " src="https://via.placeholder.com/300x450" />
                </div>
                <div className="w-96 mx-auto">
                    <p className="text-gray-800 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                
            </div>
      </div>
    )
  }
  
  export default AboutUs;
   