import { Application } from '../common/types';

export async function getApplications() {
  const response = await fetch('https://tyrael.up.railway.app/applications', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Application[] = await (response.json());
  return data;
}