import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const baseApi = axios.create({
  baseURL
})


export async function fetcher (url: string, options = {}) {
  let response;
  if(!options){
      response = await fetch(url);
  }else{
      response = await fetch(url, options);
  }
  const data = await response.json();

  return data;
}
