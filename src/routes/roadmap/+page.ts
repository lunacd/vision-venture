import type { Blurb } from '../../utils/blurb';
import type { Episode } from '../../utils/episode';
import { loadBlurb, loadEpisodes, loadNumSeason, loadSections } from '../../utils/sanity';
import type { Section } from '../../utils/section';
import type { PageLoad } from './$types';

interface RoadmapLoadResult {
	episodes: Episode[];
	sections: Section[];
	blurb: Blurb;
}

export const load: PageLoad<RoadmapLoadResult> = async ({ url }) => {
	let season = undefined;
	const numSeasons = await loadNumSeason();
	if (url.searchParams.has('s')) {
		const seasonInput = parseInt(url.searchParams.get('s'));
		if (!isNaN(seasonInput) && seasonInput > 0 && seasonInput <= numSeasons) {
			season = seasonInput;
		}
	}
	const result = await Promise.all([
		loadEpisodes(season),
		loadSections(season),
		loadBlurb('roadmap')
	]);

	return { episodes: result[0], sections: result[1], blurb: result[2] };
};
