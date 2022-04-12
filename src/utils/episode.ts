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
