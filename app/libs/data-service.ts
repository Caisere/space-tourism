import { CrewData } from "../api/crew/route"
import { DestinationData} from "../api/destination/route"
import { TechData } from "../api/technology/route"
import { getBaseUrl } from "./constant"


type GetDestination = {
    success: boolean,
    destination: DestinationData[],
    count: number
}

type GetCrew = {
    success: boolean,
    crew: CrewData[],
    count: number
}

type GetTechnology = {
    success: boolean,
    tec: TechData[],
    count: number
}

export async function getDestinationData():Promise<GetDestination> {

    const prodUrl = 'https://space-tourism-mu-snowy.vercel.app/api/destination';
    const localUrl = getBaseUrl()
    const url = `${localUrl}/api/destination` || prodUrl

        const response = await fetch(url, {
            // cache: 'no-store' // for dynamic data
            next: { revalidate: 3600 } // Revalidate every hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch destinations data')
        }
            
        const data = await response.json()
        return data
}



export async function getCrewData():Promise<GetCrew> {

    const prodUrl = 'https://space-tourism-mu-snowy.vercel.app/api/crew';
    const localUrl = getBaseUrl()
    const url = `${localUrl}/api/crew` || prodUrl

        const response = await fetch(url, {
            // cache: 'no-store' // for dynamic data
            next: { revalidate: 3600 } // Revalidate every hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch crews data')
        }
            
        const data = await response.json()
        return data
}

export async function getTechnologyData():Promise<GetTechnology> {

    const prodUrl = 'https://space-tourism-mu-snowy.vercel.app/api/technology';
    const localUrl = getBaseUrl()
    const url = `${localUrl}/api/technology` || prodUrl

        const response = await fetch(url, {
            // cache: 'no-store' // for dynamic data
            next: { revalidate: 3600 } // Revalidate every hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch technologies data')
        }
            
        const data = await response.json()
        return data
}