function Footer()
{
    return(
        <div className="text-gray-700 bg-gray-300 pb-4 flex flex-col md:flex-row">
            <div className="p-2 mx-auto"> 
                <img
                    src="/images/GreyGraphix.png"
                    alt="Logo"
                    className="w-36 md:w-48"
                />
            </div>
            <div className="flex items-center gap-12 mx-auto md:ml-auto">
                <div className="flex flex-col ">
                    <h2 className="underline my-0 text-center">Services</h2>
                    <ul className="text-left text-black mb-0 no-underline list-none  p-0">
                        <li>Logo Design</li>
                        <li>Screen Printing</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className="underline text-center my-0">Contact Us</h2>
                    <ul className="text-right list-none mb-0 text-black">
                        <li>Julian Fremaint</li>
                        <li className="flex inline-flex"><a href="mailto:greygraphicsprinting@gmail.com" className="flex text-black gap-2 no-underline"><img width={20} src="/icons/gmail.png"/>Gmail</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;