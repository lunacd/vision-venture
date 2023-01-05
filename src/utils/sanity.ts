/**
 * Sanity.io fetch utils.
 *
 * Created by Haowen Liu in 2023.
 */
import sanityClient from '@sanity/client';

import type { Episode } from './episode';
import type { Section } from './section';

const sanity = sanityClient({
	projectId: 'xnlnwt2r',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

export const loadNumSeason = async () => {
	const data = await sanity.fetch('*[_id=="siteSettings"].title');
	return data[0];
};

/* Requires season to be a valid season number or undefined */
export const loadEpisodes: (season?: number) => Promise<Episode[]> = async (season?: number) => {
	let seasonQuery = season == undefined ? ` in *[_id=="siteSettings"].numSeasons` : `==${season}`;
	const data = await sanity.fetch(
		`*[_type=="episode"&&season${seasonQuery}]|order(episode){title,"thumbnail":thumbnail.asset->url,youtubeID,tags}`
	);
	return data;
};

/* Requires season to be a valid season number or undefined */
export const loadAllEpisodes: () => Promise<Episode[]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="episode"]|order(episode){title,"thumbnail":thumbnail.asset->url,youtubeID,tags}`
	);
	console.log(data);
	return data;
};

/* Requires season to be a valid season number or undefined */
export const loadSections: (season?: number) => Promise<Section[]> = async (season?: number) => {
	let seasonQuery = season == undefined ? ` in *[_id=="siteSettings"].numSeasons` : `==${season}`;
	const data = await sanity.fetch(
		`*[_type=="section"&&season${seasonQuery}]|order(startEpisode){title,subtitle,"icon":icon.asset->url,startEpisode,endEpisode}`
	);
	return data;
};
