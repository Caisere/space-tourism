import { NextResponse } from "next/server";

export interface CrewData {
    id: number,
    position: string
    name: string;
    description: string;

}

export type ReadonlyCrewData = Readonly<CrewData[]>;

const crewData:ReadonlyCrewData   = [
    {
        id: 1,
        name: 'Douglas Hurley',
        position: 'commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
        id: 2,
        name: 'mark shuttleworth',
        position: 'mission specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

    },
    {
        id: 3,
        name: 'Victor Glover',
        position: 'pilot',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
        
    },
    {
        id: 4,
        name: 'Anousheh Ansari',
        position: 'pilot engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
        
    },
];

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json({
            success: true,
            crew: crewData 
        });
    } catch (error) {
        console.error("Error fetching crews:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to fetch crews",
        },
        { status: 500 }
        );
    }
}
