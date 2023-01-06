import type { Person } from '../utils/person';
import { loadTeam } from '../utils/sanity';
import type { PageLoad } from './$types';

interface IndexLoadData {
	team: Person[];
}

export const load: PageLoad<IndexLoadData> = async () => {
	const teamData = await loadTeam();
	return {
		team: teamData
	};
};
