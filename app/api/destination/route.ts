import { NextResponse } from "next/server";

export interface DestinationData {
    id: number;
    name: string;
    description: string;
    averageDis: number;
    month: number;
    image: string;
}

export type ReadonlyDesData = Readonly<DestinationData>;

const destinationData: DestinationData[] = [
    {
        id: 1,
        name: "moon",
        description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        averageDis: 384400,
        month: 3,
        image: "public/images/destination/image-moon.png",
    },
    {
        id: 2,
        name: "mars",
        description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        averageDis: 225,
        month: 9,
        image: "public/images/destination/image-mars.png",
    },
    {
        id: 3,
        name: "europa",
        description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        averageDis: 628,
        month: 3,
        image: "public/images/destination/image-europa.png",
    },
    {
        id: 4,
        name: "titan",
        description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        averageDis: 1.6,
        month: 7,
        image: "public/images/destination/image-titan.png",
    },
];

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json({
            success: true,
            destination: destinationData,
            count: destinationData.length,
        });
    } catch (error) {
        console.error("Error fetching destination:", error);
        return NextResponse.json({
            success: false,
            error: "Failed to fetch destination",
        },
        { status: 500 }
        );
    }
}
