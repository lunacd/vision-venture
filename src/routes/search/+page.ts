import { error } from '@sveltejs/kit';
import Fuse from 'fuse.js';

import { roadmapEpisodeList } from '../../data/roadmap';
import type { Episode } from '../../utils/episode';
import type { PageLoad } from './$types';

const fuse = new Fuse<Episode>(roadmapEpisodeList, {
	keys: ['description']
});

interface SearchResult {
	keyword: string;
	result: Fuse.FuseResult<Episode>[];
}

export const load: PageLoad<SearchResult> = ({ url }) => {
	if (url.searchParams.has('keyword')) {
		const keyword = url.searchParams.get('keyword');
		return {
			keyword: keyword,
			result: fuse.search(keyword)
		};
	}
	throw error(400, 'no search term provided');
};
