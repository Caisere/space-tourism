import Image from "next/image";

const images = ['/image-launch-vehicle-portrait.png', '/image-spaceport-portrait.png', '/image-space-capsule-portrait.png']

function TechnologyImage({filter}:{filter:string}) {
    let image = images[0];

    if(filter === 'launch vehicle') image = images[0]
    
    if(filter === 'spaceport') image = images[1]

    if(filter === 'space capsule') image = images[2]


    return (
        <div className="flex-1 relative aspect-square">
            <Image src={image} alt="destionation Image" fill className="object-cover flex-1" />
            {/* <div>Close</div> */}
        </div>
    );
}

export default TechnologyImage;
