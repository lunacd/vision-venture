import type { Blurb } from '../../utils/blurb';
import { loadBlurb } from '../../utils/sanity';
import type { PageLoad } from './$types';

interface ContactUsData {
	blurb: Blurb;
}

export const load: PageLoad<ContactUsData> = async () => {
	const data = await Promise.all([loadBlurb('contact')]);
	return {
		blurb: data[0]
	};
};
