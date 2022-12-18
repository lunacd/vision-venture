import { roadmapEpisodesBySeason } from '../../data/roadmap';
import type { Episode } from '../../utils/episode';
import type { PageLoad } from './$types';

interface EpisodeResult {
	episodes: Episode[][];
}

export const load: PageLoad<EpisodeResult> = ({ url }) => {
	if (url.searchParams.has('s')) {
		const season = parseInt(url.searchParams.get('s'));
		if (!isNaN(season) && season > 0 && season <= roadmapEpisodesBySeason.length) {
			return { episodes: roadmapEpisodesBySeason[season - 1] };
		}
	}

	return { episodes: roadmapEpisodesBySeason[roadmapEpisodesBySeason.length - 1] };
};
