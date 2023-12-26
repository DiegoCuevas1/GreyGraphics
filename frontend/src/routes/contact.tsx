import {BiLogoGmail, BiLogoInstagram} from 'react-icons/bi'
import { IconContext } from "react-icons";


export default function Contact()
{
    return(
        <div className="text-gray-800 flex-col flex py-2 gap-2 md:px-20 h-screen">
            <div className="flex flex-col mx-auto space-y-2 md:ml-48">
                <h2 className="text-4xl my-2 p-0">Contact Us</h2>
                <h3 className="text-2xl">Grey Graphix</h3>
                <p className="text-xl text-black"><a className='text-black hover:text-gray-500 active:text-gray-700' href='https://maps.app.goo.gl/WJbXahgshDsvHq417' target='_blank' title='Link to Google Maps location of Grey Graphix Co.'>1747 Hooper Ave, Toms River, NJ 08753 </a><br/> (732) 703-5339 <br /><a href='mailto:someone@yourcompany.com' className='text-black no-underline'> Email@GreyGraphixCo.com </a></p>
                <div className='flex space-x-4'>
                    <IconContext.Provider value={{ size:'1.5em' }}>
                    <a className='text-black' href='mailto:someone@yoursite.com'>
                        <BiLogoGmail />
                    </a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size:'1.5em' }}>
                        <a className='text-black' target="_blank" href='https://www.instagram.com/'>
                        <BiLogoInstagram />
                    </a>
                    </IconContext.Provider>
                </div>
                
            </div>
            <div className='mx-auto'><img className="w-[500px] md:w-full" src="https://via.placeholder.com/1000x500" /></div>
        </div>
    )
}