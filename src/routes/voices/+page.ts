import type { Blurb } from '../../utils/blurb';
import type { Debrief } from '../../utils/debrief';
import type { Person } from '../../utils/person';
import { loadBlurb, loadDebriefs, loadParticipants } from '../../utils/sanity';
import type { PageLoad } from './$types';

interface VoicesLoadData {
	participants: Person[][];
	debriefs: Debrief[][];
	blurb: Blurb;
}

export const load: PageLoad<VoicesLoadData> = async () => {
	const result = await Promise.all([loadParticipants(), loadDebriefs(), loadBlurb('voices')]);

	return {
		participants: result[0],
		debriefs: result[1],
		blurb: result[2]
	};
};
