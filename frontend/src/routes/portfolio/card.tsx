import { Link } from "react-router-dom";

interface CardProps {
    id:number;
    project:string;
    location:string;
    imageUrl:string;
}


export default function Card({id,project,location,imageUrl}:CardProps)
{
    return(
        <div className="relative rounded-xl overflow-hidden bg-white shadow-lg">
            <Link to={`/portfolio/${id}`}>
                <div className="group relative">
                    <img
                        src={imageUrl}
                        alt={project}
                        className="w-96 md:w-max h-96 object-cover transition-transform duration-300 group-hover:bg-transparent group-hover:opacity-0"
                    />
                    <div className="absolute inset-0 flex z-10 items-center justify-center transition-opacity duration-300  opacity-100 group-hover:opacity-100">
                        <div className="text-center text-white text-center p-4 bg-black group-hover:bg-opacity-0 bg-opacity-25 group-hover:text-black rounded-xl">
                            <h2 className="text-2xl font-bold">{project}</h2>
                            <p className="text-xl ml-8 group-hover:flex hidden text-center">{location}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}