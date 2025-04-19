import { Experience } from "../common/types";

export async function getExperiences() {
  const response = await fetch('https://tyrael.up.railway.app/experiences', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Experience[] = await (response.json());
  return data;
}