import { Application } from '../common/types';
import { getValidateData } from './gateway';

export async function getApplications() {
  const data: Application[] = await getValidateData('applications');
  return data;
}