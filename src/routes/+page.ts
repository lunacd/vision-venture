import type { Person } from '../utils/person';
import { loadTeam } from '../utils/sanity';
import type { PageLoad } from './$types';

interface IndexLoadData {
	team: Person[];
}

export const load: PageLoad<IndexLoadData> = async () => {
	let teamData = await loadTeam();
	return {
		team: teamData
	};
};
