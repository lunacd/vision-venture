import type { Blurb } from '../../utils/blurb';
import type { Episode } from '../../utils/episode';
import { loadBlurb, loadEpisodes, loadNumSeasons, loadSections } from '../../utils/sanity';
import type { Section } from '../../utils/section';
import type { PageLoad } from './$types';

interface RoadmapLoadResult {
	episodes: Episode[];
	sections: Section[];
	blurb: Blurb;
	numSeasons: number;
	selectedSeason?: number;
}

export const load: PageLoad<RoadmapLoadResult> = async ({ url }) => {
	let season = undefined;
	const numSeasons = await loadNumSeasons();
	if (url.searchParams.has('season')) {
		const seasonInput = parseInt(url.searchParams.get('season'));
		if (!isNaN(seasonInput) && seasonInput > 0 && seasonInput <= numSeasons) {
			season = seasonInput;
		}
	}
	const result = await Promise.all([
		loadNumSeasons(),
		loadEpisodes(season),
		loadSections(season),
		loadBlurb('roadmap')
	]);

	return { numSeasons: result[0], episodes: result[1], sections: result[2], blurb: result[3], selectedSeason: season };
};
