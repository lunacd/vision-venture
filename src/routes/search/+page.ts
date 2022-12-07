import { error } from '@sveltejs/kit';
import Fuse from 'fuse.js';

import { roadmapEpisodeList } from '../../data/roadmap';
import type { Episode } from '../../utils/episode';
import type { PageLoad } from './$types';

const fuse = new Fuse<Episode>(roadmapEpisodeList, {
	keys: ['description']
});

// This list credit to https://github.com/KanchiMoe/Bad-words/blob/master/Lists/google-base.txt
const censorWords = [
	'anal',
	'anus',
	'arse',
	'ass',
	'ass fuck',
	'ass hole',
	'assfucker',
	'asshole',
	'assshole',
	'bastard',
	'bitch',
	'black cock',
	'bloody hell',
	'boong',
	'cock',
	'cockfucker',
	'cocksuck',
	'cocksucker',
	'coon',
	'coonnass',
	'cunt',
	'cyberfuck',
	'dick',
	'dirty',
	'douche',
	'dummy',
	'erect',
	'erection',
	'erotic',
	'escort',
	'fag',
	'faggot',
	'fuck',
	'Fuck off',
	'fuck you',
	'fuckass',
	'fuckhole',
	'gook',
	'hard core',
	'hardcore',
	'homoerotic',
	'lesbian',
	'lesbians',
	'mother fucker',
	'motherfuck',
	'motherfucker',
	'negro',
	'nigger',
	'orgasim',
	'orgasm',
	'penis',
	'penisfucker',
	'piss',
	'piss off',
	'porn',
	'porno',
	'pornography',
	'pussy',
	'retard',
	'sadist',
	'sex',
	'sexy',
	'shit',
	'slut',
	'son of a bitch',
	'tits',
	'viagra',
	'whore'
];

interface SearchResult {
	keyword: string;
	result: Fuse.FuseResult<Episode>[];
}

export const load: PageLoad<SearchResult> = ({ url }) => {
	if (url.searchParams.has('keyword')) {
		const keyword = url.searchParams.get('keyword');
		const lowercase = keyword.toLowerCase();
		for (const word of censorWords) {
			if (keyword.includes(word)) {
				return {
					keyword: keyword,
					result: []
				};
			}
		}
		return {
			keyword: keyword,
			result: fuse.search(keyword)
		};
	}
	throw error(400, 'no search term provided');
};