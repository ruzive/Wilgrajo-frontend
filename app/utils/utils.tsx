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
    longitude: number;
    latitude: number;
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

  export interface DataAttributes {
    photos: Photo[];
    city: City;
    neighborhood: Neighborhood;
    property_type: string;
    uuid: string;
    created: string;
    modified: string;
    title: string;
    description: string | null;
    status: number;
    activate_date: string;
    deactivate_date: string | null;
    featured: boolean;
    num_record: number;
    intent: string;
    obs: string;
    price: string;
    longitude: number;
    latitude: number;
    conditions: string;
    address: string;
    total_bedroom: number;
    total_maids_room: number;
    total_guest_wc: number;
    total_room: number;
    total_kitchen: number;
    total_hall: number;
    total_service_area: number;
    total_leisure_area: number;
    total_suite: number;
    total_bathroom: number;
    total_lavatory: number;
    total_coffe_room: number;
    total_pantry: number;
    total_office: number;
    total_garage: number;
}
export interface UserData {
  type: string;
  id: string;
}

export interface Relationships {
  user: {
      data: UserData;
  };
}


export interface ApiResponse {
  data: Data;
}
  
  export interface Data {
    count: number;
    next: null;
    previous: null;
    results: Result[];
    type: string;
    id: string;
    attributes: DataAttributes;
    relationships: Relationships;
  }
  
  export interface ResponseData {
    data: {
      status: string;
      data: Data;
    };
    msg: string;
  }
  
 export interface Params {
    property: string;
    id: string;
  }

  export interface Searchterm {
    query: string;
  }

  interface FormData {
    name: string;
    whatsapp_number: string;
    email: string;
    message: string;
  }

  // export async function getProperties({searchterm}:{searchterm: Searchterm}):Promise<ResponseData> {
  //   try{
  //     if( searchterm!== undefined){

  //       const responseData: ResponseData = await getfilteredPropertyListData(searchterm)
  //       return responseData;

  //     }else{
  //       const responseData: ResponseData = await getData()
  //       return responseData;
  //     }
  //   }catch (error) 
  //   {
  //       console.error('Error fetching data:', error);
  //       throw error;
  //   }
  // }

  export async function getProperties({ searchterm }: { searchterm?: Searchterm }) {
    try {

        if (searchterm !== undefined) {
            const responseData: ResponseData = await getfilteredPropertyListData(searchterm);
            return responseData.data.data.results;
        } else {
            const responseData: ResponseData = await getData();
            return responseData.data.data.results;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


async function getData():Promise<ResponseData> {
    const res = await fetch(`https://real-estate-wilgrajo.onrender.com/api/property/list`)
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
     const data: ResponseData = await res.json();
    //  console.log('Fetched data:', data.data);
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

async function getAProperty({ params }: { params: Params }): Promise<ApiResponse> {
  const url = `https://real-estate-wilgrajo.onrender.com/api/${params.property}/${params.id}`;
  try {
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: ApiResponse = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchData({ params }: { params: Params }): Promise<DataAttributes> {
  try {
    const apiResponse: ApiResponse = await getAProperty({ params });
    return apiResponse.data.attributes;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const postFormData = async (formData: FormData): Promise<any> => {
  try {
    const response = await fetch('https://real-estate-wilgrajo.onrender.com/api/contact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Assuming you're sending JSON data
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to post form data');
    }

    // If the response is successful, you can handle it accordingly
    const responseData = await response.json();
    console.log('Response Data:', responseData);
    // Optionally, return the response data if needed
    return responseData;
  } catch (error) {
    console.error('Error posting form data:', error);
    // Handle errors
    throw error;
  }
};

async function getfilteredPropertyListData(searchterm: Searchterm):Promise<ResponseData> {

  const res = await fetch(`https://real-estate-wilgrajo.onrender.com/api/properties/?filter%5Bsearch%5D${searchterm.query}`)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
   const data: ResponseData = await res.json();
  //  console.log('Fetched data:', data.data);
   return data
}

export async function fetchfilteredData({ params }: { params: Params }): Promise<DataAttributes> {
  try {
    const apiResponse: ApiResponse = await getAProperty({ params });
    return apiResponse.data.attributes;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const getRandomPhoto = (photos: Photo[]): string | undefined => {
  if (photos.length === 0) return undefined; // Return undefined if the photos array is empty
  const randomIndex = Math.floor(Math.random() * photos.length); // Generate a random index
  return photos[randomIndex].image[0]; // Return the URL of the random photo
};


