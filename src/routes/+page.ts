import type { Person } from '../utils/person';
import { loadProjectDescription, loadTeam } from '../utils/sanity';
import type { PageLoad } from './$types';

interface IndexLoadData {
	team: Person[];
	projectDescription: string[];
}

export const load: PageLoad<IndexLoadData> = async () => {
	const data = await Promise.all([loadTeam(), loadProjectDescription()]);
	return {
		team: data[0],
		projectDescription: data[1]
	};
};
