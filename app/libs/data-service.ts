import { DestinationData} from "../api/destination/route"
import { BASE_URL } from "./constant"

type GetDestination = {
    success: boolean,
    destination: DestinationData[],
    count: number
}

export async function getDestinationData():Promise<GetDestination> {
        const response = await fetch(`${BASE_URL}/api/destination`, {
            // cache: 'no-store' // for dynamic data
            next: { revalidate: 3600 } // Revalidate every hour
        })

        if (!response.ok) {
            throw new Error('Failed to fetch destinations')
        }
            
        const data = await response.json()
        return data
}