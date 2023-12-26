import Card from "./card"

export default function Portfolio()
{
    const projects = [
        {
            id:1,
            project:'Taylor Sams',
            location:'Brick, NJ',
            imageUrl:"/images/stock2.jpeg"
        },
        {
            id:2,
            project:'Taylor Sams',
            location:'Brick, NJ',
            imageUrl:"/images/stock2.jpeg"
        },
        {
            id:3,
            project:'Taylor Sams',
            location:'Brick, NJ',
            imageUrl:"/images/stock2.jpeg"
        },
        {
            id:2,
            project:'Taylor Sams',
            location:'Brick, NJ',
            imageUrl:"/images/stock2.jpeg"
        },
        {
            id:3,
            project:'Taylor Sams',
            location:'Brick, NJ',
            imageUrl:"/images/stock2.jpeg"
        }
    ]
    return(
        <div className="flex bg-gray-400 flex-col">
            <div className="bg-gray-400">
                <img 
                    src="/images/banner.jpg"
                    alt='Grey Graphics Banner'
                    className="w-full h-96"
                />
                <div className="absolute h-96 t-96 inset-0 z-10 flex items-center justify-center">
                    <p className="text-5xl text-white ">Our Work</p>
                </div>
                
            </div>
            <div className="flex w-96 md:w-[36rem] lg:w-[43rem] xl:w-[55rem] mx-auto">
                <p className="text-4xl text-center text-black">At Grey Graphix, we prioritize turning every client’s vision into the highest quality product that it can become. We won’t just focus on getting your order done, but working diligently with you to make sure it is everything you are looking for and more.</p>
            </div>
            <div className="flex md:space-y-0 my-5 mx-auto md:ml-24 lg:ml-24 space-y-4 flex-col md:flex-wrap  md:flex-row md:gap-4">
                {projects.map((proj) => (
                    <Card
                        key={proj.id}
                        id={proj.id}
                        project={proj.project}
                        location={proj.location}
                        imageUrl={proj.imageUrl}
                    />
                ))}
            </div> 
        </div>
    )
}