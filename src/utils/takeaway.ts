export class Takaway {
    link: string;
    title: string;
    onLeft: boolean;

    constructor(link: string, title: string, onLeft: boolean) {
        this.link = link;
        this.title = title;
        this.onLeft = onLeft;
    }
}
