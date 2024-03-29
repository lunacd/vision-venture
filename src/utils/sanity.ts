/**
 * Sanity.io fetch utils.
 *
 * Created by Haowen Liu in 2023.
 */
import { createClient } from '@sanity/client';

import type { Blurb } from './blurb';
import type { Debrief } from './debrief';
import type { Episode } from './episode';
import type { Person } from './person';
import type { Resource } from './resource';
import type { Section } from './section';

const sanity = createClient({
	projectId: 'xnlnwt2r',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true
});

function getSeasonQuery(season?: number) {
	return season == undefined ? ` in *[_id=="siteSettings"].numSeasons` : `==${season}`;
}

export const loadBlurb: (page: string) => Promise<Blurb> = async (page) => {
	let data = await sanity.fetch(
		`*[_id=="siteSettings"]{"title":${page}BlurbTitle,"content":${page}BlurbContent}`
	);
	data = data[0];
	data.content = data.content.split('\n');
	return data;
};

export const loadProjectDescription: () => Promise<string[]> = async () => {
	const data = await sanity.fetch('*[_id=="siteSettings"].projectDescription');
	return data[0].split('\n');
};

export const loadNumSeasons: () => Promise<number> = async () => {
	const data = await sanity.fetch('*[_id=="siteSettings"].numSeasons');
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
		`*[_type=="team"]|order(order desc,name){name,"picture":picture.asset->url,bio}`
	);
	return data;
};

export const loadParticipants: () => Promise<Person[][]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="participant"]|order(season desc,name){name,"picture":picture.asset->url,bio,season}`
	);
	const result: Person[][] = [];
	for (let i = 0; i < data.length; i++) {
		while (result.length < data[i].season) {
			result.push([]);
		}
		result[data[i].season - 1].push(data[i]);
	}
	return result;
};

/* Requires season to be a valid season number or undefined */
export const loadDebriefs: () => Promise<Debrief[][]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="debrief"]|order(season asc,order asc){title,youtubeID,season}`
	);
	const result: Debrief[][] = [];
	for (let i = 0; i < data.length; i++) {
		while (result.length < data[i].season) {
			result.push([]);
		}
		result[data[i].season - 1].push(data[i]);
	}
	result.reverse();
	return result;
};

export const loadResouces: () => Promise<Resource[]> = async () => {
	const data = await sanity.fetch(
		`*[_type=="resource"]|order(title){title,"cover":cover.asset->url,link}`
	);
	return data;
};
