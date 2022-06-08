/**
 * Represents a participant or a team member.
 * 
 * Created by Haowen Liu in 2022.
 */
export class Person {
	name: string;
	image: string;
	bio: string;

	constructor(name: string, image: string, bio: string) {
		this.name = name;
		this.image = image;
		this.bio = bio;
	}
}
