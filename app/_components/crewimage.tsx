import Image from "next/image";

const images = ['/image-douglas.png', '/image-ansari.png', '/image-mark.png', '/image-victor.png']

function CrewImage({filter}:{filter:string}) {
    let image = images[0];

    if(filter === 'Douglas Hurley') image = images[0]
    
    if(filter === 'Anousheh Ansari') image = images[1]

    if(filter === 'mark shuttleworth') image = images[2]

    if(filter === 'Victor Glover') image = images[3]


    return (
        <div className="flex-1 relative aspect-square">
            <Image src={image} alt="destionation Image" fill className="object-cover flex-1" />
            {/* <div>Close</div> */}
        </div>
    );
}

export default CrewImage;
