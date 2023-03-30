/**
 * Represents a student takeaway episode.
 *
 * Created by Haowen Liu in 2022.
 */
export class Debrief {
	youtubeID: string;
	title: string;
	season: number;

	constructor(youtubeID: string, title: string, season: number) {
		this.youtubeID = youtubeID;
		this.title = title;
		this.season = season;
	}
}
