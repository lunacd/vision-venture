/**
 * Represents an episode to be displayed in the vision roadmap.
 *
 * Created by Haowen Liu in 2022.
 */

export class Episode {
	title: string;
	thumbnail: string;
	youtubeID: string;
	tags: string[];

	constructor(title: string, thumbnail: string, youtubeID: string, tags: string[]) {
		this.title = title;
		this.thumbnail = thumbnail;
		this.youtubeID = youtubeID;
		this.tags = tags;
	}
}
