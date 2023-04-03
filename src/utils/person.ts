/**
 * Represents a participant or a team member.
 *
 * Created by Haowen Liu in 2022.
 */

export class Person {
	name: string;
	picture: string;
	bio: string;
	season: number;

	constructor(name: string, picture: string, bio: string, season: number) {
		this.name = name;
		this.picture = picture;
		this.bio = bio;
	}
}
