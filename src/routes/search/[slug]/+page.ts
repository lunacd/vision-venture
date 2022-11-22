import Fuse from 'fuse.js';

import { roadmapEpisodeList } from '../../../data/roadmap';
import type { Episode } from '../../../utils/episode';
import type { PageLoad } from './$types';

const fuse = new Fuse<Episode>(roadmapEpisodeList, {
	keys: ['description']
});

interface SearchResult {
	keyword: string;
	result: Fuse.FuseResult<Episode>[];
}

export const load: PageLoad<SearchResult> = ({ params }) => {
	return {
		keyword: params.slug,
		result: fuse.search(params.slug)
	};
};
