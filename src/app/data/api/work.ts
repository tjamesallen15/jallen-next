import { ProcessWork, Work } from '../common/types';

export async function getWorks() {
  const response = await fetch('https://tyrael.up.railway.app/works', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Work[] = await (response.json());
  return data;
}

export async function getProcessWorks() {
  const response = await fetch('https://tyrael.up.railway.app/works', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: ProcessWork[] = await (response.json());

  for (let i = 0; i < data.length; i++) {
    const work: ProcessWork = data[i];
    const descriptions = work.description.split('-');
    const filteredDescriptions = descriptions.filter((description) => description.trim() !== '');
    work.descriptions = filteredDescriptions;
  }

  return data;
}