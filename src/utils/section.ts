/**
 * Represents a section of the vision venture roadmap.
 *
 * Created by Haowen Liu in 2023.
 */

export class Section {
	title: string;
	subtitle: string;
	icon: string;
	startEpisode: number;
	endEpisode: number;

	constructor(
		title: string,
		subtitle: string,
		icon: string,
		startEpisode: number,
		endEpisode: number
	) {
		this.title = title;
		this.subtitle = subtitle;
		this.icon = icon;
		this.startEpisode = startEpisode;
		this.endEpisode = endEpisode;
	}
}
