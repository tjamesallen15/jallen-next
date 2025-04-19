import { About } from '../common/types';

export async function getAbouts() {
  const response = await fetch('https://tyrael.up.railway.app/abouts', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: About[] = await (response.json());
  return data;
}