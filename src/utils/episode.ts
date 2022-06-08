/**
 * Represents an episode to be displayed in the vision roadmap.
 * 
 * Created by Haowen Liu in 2022.
 */
export class Episode {
	description: string;
	image: string;
	youtubeLink: string;

	constructor(description: string, image: string, youtubeLink: string) {
		this.description = description;
		this.image = image;
		this.youtubeLink = youtubeLink;
	}
}
