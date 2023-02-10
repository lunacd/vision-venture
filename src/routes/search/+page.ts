import { error } from '@sveltejs/kit';
import Fuse from 'fuse.js';

import type { Blurb } from '../../utils/blurb';
import type { Episode } from '../../utils/episode';
import { loadAllEpisodes, loadBlurb, loadNumSeasons } from '../../utils/sanity';
import type { PageLoad } from './$types';

let fuse = undefined;

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
	blurb: Blurb;
	numSeasons: number;
}

export const load: PageLoad<SearchResult> = async ({ url }) => {
	if (fuse === undefined) {
		const allEpisodes = await loadAllEpisodes();
		fuse = new Fuse<Episode>(allEpisodes, {
			keys: ['title', 'tags']
		});
	}
	if (url.searchParams.has('keyword')) {
		const result = await Promise.all([loadNumSeasons(), loadBlurb('roadmap')]);
		const keyword = url.searchParams.get('keyword');
		const lowercase = keyword.toLowerCase();
		for (const word of censorWords) {
			if (lowercase.includes(word)) {
				return {
					keyword: keyword,
					result: [],
					blurb: result[1],
					numSeasons: result[0]
				};
			}
		}
		return {
			keyword: keyword,
			result: fuse.search(keyword),
			blurb: result[1],
			numSeasons: result[0]
		};
	}
	throw error(400, 'no search term provided');
};
