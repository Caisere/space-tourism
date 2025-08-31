import Image from "next/image";
import React from "react";


const images = ['/image-moon.png', '/image-mars.png', '/image-titan.png', '/image-europa.png']

function DestinationImg({filter}:{filter:string}) {
    let image = images[0];

    if(filter === 'moon') image = images[0]

    if(filter === 'mars') image = images[1]

    if(filter === 'titan') image = images[2]

    if(filter === 'europa') image = images[3]

    return (
        <div className="flex-1 relative aspect-square">
            <Image src={image} alt="destionation Image" fill className="object-cover flex-1" />
            {/* <div>Close</div> */}
        </div>
    );
}

export default DestinationImg;
