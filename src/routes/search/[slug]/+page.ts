import Fuse from 'fuse.js';

import { roadmapEpisodeList } from '../../../data/roadmap';
import type { PageLoad } from './$types';

const fuse = new Fuse(roadmapEpisodeList, {
	keys: ['description']
});

export const load: PageLoad = ({ params }) => {
	return fuse.search(params.slug);
};
