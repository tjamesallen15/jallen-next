import { Information } from '../common/types';

export async function getInformations() {
  const response = await fetch('https://tyrael.up.railway.app/informations', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Information[] = await (response.json());
  return data;
}