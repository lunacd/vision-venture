import Fuse from 'fuse.js';

import { roadmapEpisodeList } from '../../../data/roadmap';
import type { Episode } from '../../../utils/episode';
import type { PageLoad } from './$types';

const fuse = new Fuse<Episode>(roadmapEpisodeList, {
	keys: ['description']
});

export const load: PageLoad<Fuse.FuseResult<Episode>[]> = ({ params }) => {
	return fuse.search(params.slug);
};
