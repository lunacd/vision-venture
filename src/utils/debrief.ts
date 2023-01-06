/**
 * Represents a student takeaway episode.
 *
 * Created by Haowen Liu in 2022.
 */
export class Debrief {
	youtubeID: string;
	title: string;

	constructor(youtubeID: string, title: string) {
		this.youtubeID = youtubeID;
		this.title = title;
	}
}
