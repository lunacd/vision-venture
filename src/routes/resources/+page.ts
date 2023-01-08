import type { Resource } from '../../utils/resource';
import { loadResouces } from '../../utils/sanity';
import type { PageLoad } from './$types';

interface ResourcesLoadData {
	resources: Resource[];
}

export const load: PageLoad<ResourcesLoadData> = async () => {
	const resourcesData = await loadResouces();
	return {
		resources: resourcesData
	};
};
