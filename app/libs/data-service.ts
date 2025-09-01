import { DestinationData} from "../api/destination/route"
// import { getBaseUrl } from "./constant"


type GetDestination = {
    success: boolean,
    destination: DestinationData[],
    count: number
}

export async function getDestinationData():Promise<GetDestination> {

    const url = 'https://space-tourism-mu-snowy.vercel.app/api/destination';

        const response = await fetch(url, {
            // cache: 'no-store' // for dynamic data
            next: { revalidate: 3600 } // Revalidate every hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch destinations')
        }
            
        const data = await response.json()
        return data
}