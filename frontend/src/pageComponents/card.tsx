interface CardProps {
    service: string;
    description: string;
    imageUrl: string;
  };
export default function Card({service,description,imageUrl}:CardProps)
{
    return(
        <div className="flex relative ">
             <div className="justify-center mx-auto flex-col flex">
                <img 
                    src={imageUrl}
                    alt={description}
                    className="w-[350px] lg:w-[450px] h-[700px] lg:h-[900px] rounded-t-lg"
                />
                <button className="bg-black border-gray-500 text-white w-80 mx-auto h-20 m-2 text-xl">
                    {service}
                </button>
             </div>
        </div>
    )
}