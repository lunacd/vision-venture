import { roadmapEpisodesBySeason } from '../../data/roadmap';
import type { Episode } from '../../utils/episode';
import type { PageLoad } from './$types';

export const load: PageLoad<Episode[][]> = ({ url }) => {
	if (url.searchParams.has('s')) {
		const season = parseInt(url.searchParams.get('s'));
		if (!isNaN(season) && season > 0 && season <= roadmapEpisodesBySeason.length) {
			return roadmapEpisodesBySeason[season - 1];
		}
	}

	return roadmapEpisodesBySeason[roadmapEpisodesBySeason.length - 1];
};
