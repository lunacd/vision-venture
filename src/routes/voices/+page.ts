import type { Debrief } from 'src/utils/debrief';

import type { Person } from '../../utils/person';
import { loadDebriefs, loadParticipants } from '../../utils/sanity';
import type { PageLoad } from './$types';

interface VoicesLoadData {
	participants: Person[];
	debriefs: Debrief[];
}

export const load: PageLoad<VoicesLoadData> = async () => {
	const result = await Promise.all([loadParticipants(), loadDebriefs()]);

	return {
		participants: result[0],
		debriefs: result[1]
	};
};
