/**
 * Sanity.io fetch utils.
 *
 * Created by Haowen Liu in 2023.
 */
import sanityClient from '@sanity/client';

import type { Debrief } from './debrief';
import type { Episode } from './episode';
import type { Person } from './person';
import type { Section } from './section';

const sanity = sanityClient({
	projectId: 'xnlnwt2r',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: false
});

function getSeasonQuery(season?: number) {
	return season == undefined ? ` in *[_id=="siteSettings"].numSeasons` : `==${season}`;
}

export const loadNumSeason = async () => {
	const data = await sanity.fetch('*[_id=="siteSettings"].title');
	return data[0];
};

/* Requires season to be a valid season number or undefined */
export const loadEpisodes: (season?: number) => Promise<Episode[]> = async (season?: number) => {
	const seasonQuery = getSeasonQuery(season);
	const data = await sanity.fetch(
		`*[_type=="episode"&&season${seasonQuery}]|order(episode){title,"thumbnail":thumbnail.asset->url,youtubeID,tags}`
	);
	return data;
};

export const loadAllEpisodes: () => Promise<Episode[]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="episode"]|order(episode){title,"thumbnail":thumbnail.asset->url,youtubeID,tags}`
	);
	return data;
};

/* Requires season to be a valid season number or undefined */
export const loadSections: (season?: number) => Promise<Section[]> = async (season?: number) => {
	const seasonQuery = getSeasonQuery(season);
	const data = await sanity.fetch(
		`*[_type=="section"&&season${seasonQuery}]|order(startEpisode){title,subtitle,"icon":icon.asset->url,startEpisode,endEpisode}`
	);
	return data;
};

export const loadTeam: () => Promise<Person[]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="team"]|order(order,name){name,"picture":picture.asset->url,bio}`
	);
	return data;
};

/* Requires season to be a valid season number or undefined */
export const loadParticipants: (season?: number) => Promise<Person[]> = async (season) => {
	const seasonQuery = getSeasonQuery(season);
	const data = await sanity.fetch(
		`*[_type=="participant"&&season${seasonQuery}]|order(name){name,"picture":picture.asset->url,bio}`
	);
	return data;
};

/* Requires season to be a valid season number or undefined */
export const loadDebriefs: (season?: number) => Promise<Debrief[]> = async (season) => {
	const seasonQuery = getSeasonQuery(season);
	const data = await sanity.fetch(
		`*[_type=="debrief"&&season${seasonQuery}]|order(order){title,youtubeID}`
	);
	return data;
};
