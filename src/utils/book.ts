/**
 * Represents a book in the additional resource page.
 * 
 * Created by Haowen Liu in 2022.
 */
export class Book {
	title: string;
	image: string;
	link: string;

	constructor(title: string, image: string, link: string) {
		this.title = title;
		this.image = image;
		this.link = link;
	}
}
