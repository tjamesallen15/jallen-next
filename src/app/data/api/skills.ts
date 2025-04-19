import { Skills } from '../common/types';
import { getSkillIcon } from './common';

export async function getSkills() {
  const response = await fetch('https://tyrael.up.railway.app/skills', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Skills[] = await (response.json());
  return data;
}

export async function getSkillsWithIcons() {
  const response = await fetch('https://tyrael.up.railway.app/skills', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${btoa('root:1234')}`,
    },
  });
  
  const data: Skills[] = await (response.json());
  for (let i = 0; i < data.length; i++) {
    const skills: Skills = data[i];
    skills.icon = getSkillIcon(skills.name);
  }

  return data;
}
