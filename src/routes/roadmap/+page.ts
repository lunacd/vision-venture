import type { Episode } from '../../utils/episode';
import { loadEpisodes, loadNumSeason, loadSections } from '../../utils/sanity';
import type { Section } from '../../utils/section';
import type { PageLoad } from './$types';

interface RoadmapLoadResult {
	episodes: Episode[];
	sections: Section[];
}

export const load: PageLoad<RoadmapLoadResult> = async ({ url }) => {
	let season = undefined;
	let numSeasons = await loadNumSeason();
	if (url.searchParams.has('s')) {
		const seasonInput = parseInt(url.searchParams.get('s'));
		if (!isNaN(seasonInput) && seasonInput > 0 && seasonInput <= numSeasons) {
			season = seasonInput;
		}
	}
	const all = Promise.all([loadEpisodes(season), loadSections(season)]);
	const result = await all;

	return { episodes: result[0], sections: result[1] };
};
