export interface Photo {
    id: number;
    image: string[];
    uuid: string;
    created: string;
    modified: string;
    title: string;
    description: string | null;
    status: number;
    activate_date: string;
    deactivate_date: string | null;
    order: number;
    property: number;
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
  
  export interface Result {
    id: number;
    photos: Photo[];
    city: City;
    neighborhood: Neighborhood;
    uuid: string;
    property_type: string;
    created: string;
    modified: string;
    title: string;
    description: string | null;
    status: number;
    activate_date: string;
    deactivate_date: string | null;
    featured: boolean;
    num_record: null;
    intent: string;
    obs: string;
    price: string;
    conditions: string;
    user: number;
  }
  
  export interface Data {
    count: number;
    next: null;
    previous: null;
    results: Result[];
  }
  
  export interface ResponseData {
    data: {
      status: string;
      data: Data;
    };
    msg: string;
  }
  



async function getData():Promise<ResponseData> {
    const res = await fetch('http://localhost:8000/api/property/list', { next: { revalidate: 3600 }})
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
     const data: ResponseData = await res.json();
     console.log('Fetched data:', data.data);
     return data
  }
 
export async function Page() {
    try {
        const responseData: ResponseData = await getData()
        return responseData.data.data.results;
    } catch (error) 
    {
        console.error('Error fetching data:', error);
    }
}

async function getAProperty({params}:{params:{property:string, id: string}}):Promise<ResponseData> {
  let url:string = "http://localhost:8000/api/"+params.property+"/"+params.id;
  //const res = await fetch('http://localhost:8000/api/{property}/id', { next: { revalidate: 3600 }})
  const res = await fetch(url, { next: { revalidate: 3600 }})
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
   const data: ResponseData = await res.json();
   console.log('Fetched data:', data.data);
   return data
}

export async function fetchData(params:{params:{property:string, id: string}}) {
  try {
      const responseData: ResponseData = await getAProperty(params)
      return responseData.data.data.results;
  } catch (error) 
  {
      console.error('Error fetching data:', error);
  }
}


