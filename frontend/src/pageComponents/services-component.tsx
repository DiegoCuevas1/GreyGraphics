import Card from "./card";

export default function Services()
{  
    const projects= [
        {
          id: 1,
          title: 'Custom Apparel',
          description: 'Colorful blanks hanging on a clothing rack.',
          imageUrl: '/images/custom_apparel.png',
        },
        {
          id: 2,
          title: 'Graphic Design',
          description: 'Color Theory',
          imageUrl: '/images/graphic_design.png',
        },
        {
            id: 3,
            title: 'Brand Building',
            description: 'Colorful blanks hanging on a clothing rack.',
            imageUrl: '/images/brand_building.png',
          },
          
      ];
    
    return(
        <div className="flex flex-col lg:grid lg:gap-36 lg:grid-cols-3">
             {projects.map((project) => (
                <Card
                key={project.id}
                service={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                />
             ))}
        </div>
    )
}
