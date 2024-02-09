
export interface ResponseData {
    status: string;
    data: Data;
    msg: string;
}

export interface Data {
    count: number;
    next: string | null;
    previous: string | null;
    results: Result[];
}

export interface Result {
    id: number;
    photos: any[]; // Assuming photos can be of any type
    city: City;
    neighborhood: Neighborhood;
    uuid: string;
    created: string;
    modified: string;
    title: string;
    description: string | null;
    status: number;
    activate_date: string;
    deactivate_date: string | null;
    featured: boolean;
    num_record: number | null;
    intent: string;
    obs: string;
    price: string;
    conditions: string;
    user: number;
}


export interface City {
    id: number;
    title: string;
}

export interface Neighborhood {
    id: number;
    title: string;
    city: City;
}



async function getData():Promise<ResponseData> {
    const res = await fetch('http://localhost:8000/api/property/list', { next: { revalidate: 3600 }})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
     const data: ResponseData = await res.json();
     console.log('Fetched data:', data.data);
     return data
  }
 
export default async function Page() {
    try {
        // const responsedata = await getData()
        // console.log("from utils:"+responsedata.status)
        // return responsedata.data
        // Log the entire response object
        const responseData: ResponseData = await getData()
        console.log('Response Data:', responseData);

        // Check if status, msg, and data are nested within another property
        if (responseData.data === undefined) {
            console.error('Data is undefined');
        } else {
            // Access nested properties if they exist
            console.log('Status:', responseData.data.status);
            console.log('Message:', responseData.data.msg);
            console.log('Data:', responseData.data.data); // Make sure this is the correct path to data
        }

        // Access nested properties if needed
        if (responseData.data.data) {
            console.log('Count:', responseData.data.data.count);
            console.log('Results:', responseData.data.data.results);
        }

        return responseData.data.data.results;
    } catch (error) 
    {
        console.error('Error fetching data:', error);
    }
}


