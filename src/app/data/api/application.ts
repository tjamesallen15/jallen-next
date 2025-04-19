import { Application } from '../common/types';
import { getServerData, getValidateData } from './gateway';

export async function getApplications() {
  const data: Application[] = await getServerData('applications');
  return data;
}