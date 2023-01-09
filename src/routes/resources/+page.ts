import type { Blurb } from '../../utils/blurb';
import type { Resource } from '../../utils/resource';
import { loadBlurb, loadResouces } from '../../utils/sanity';
import type { PageLoad } from './$types';

interface ResourcesLoadData {
	resources: Resource[];
	blurb: Blurb;
}

export const load: PageLoad<ResourcesLoadData> = async () => {
	const data = await Promise.all([loadResouces(), loadBlurb('resources')]);
	return {
		resources: data[0],
		blurb: data[1]
	};
};
