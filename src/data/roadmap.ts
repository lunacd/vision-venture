// Episode thumbnails
// Season 1
import { Episode } from '../utils/episode';

import S1E1 from '../images/thumbnails/s01e01.png?webp';
import S1E2 from '../images/thumbnails/s01e02.png?webp';
import S1E3 from '../images/thumbnails/s01e03.png?webp';
import S1E4 from '../images/thumbnails/s01e04.png?webp';
import S1E5 from '../images/thumbnails/s01e05.png?webp';
import S1E6 from '../images/thumbnails/s01e06.png?webp';
import S1E7 from '../images/thumbnails/s01e07.png?webp';
import S1E8 from '../images/thumbnails/s01e08.png?webp';
import S1E9 from '../images/thumbnails/s01e09.png?webp';
import S1E10 from '../images/thumbnails/s01e10.png?webp';
import S1E11 from '../images/thumbnails/s01e11.png?webp';
import S1E12 from '../images/thumbnails/s01e12.png?webp';

export const roadmapEpisodesBySeason = [
	// Season 1
	[
		// Section 1
		[
			new Episode('Trying out different things', S1E1, 'wrAO3b1J2PA'),
			new Episode('What to look for in a job', S1E2, 'UuNRNyq6tHg')
		],
		// Section 2
		[
			new Episode('Not knowing everything on day 1', S1E3, 'sRg3PYLIQt8'),
			new Episode('Applying skill from education to real life', S1E4, 'upcVW_qGBSQ'),
			new Episode('Classroom setting vs. workspace', S1E5, '7bty-sSdN3I'),
			new Episode('Tackling problems at work', S1E6, 'jODLxTrr4ko')
		],
		// Section 3
		[
			new Episode('Diverse company values', S1E7, 'YEy70wI5ec4'),
			new Episode('Women in engineering', S1E8, 'IwbwcEITuLs'),
			new Episode('Finding mentors', S1E9, '_x1z8Hrt3ZM'),
			new Episode('Work-life balance', S1E10, 'pt-8cqt3_4w')
		],
		// Section 4
		[
			new Episode('Having multiple interests and passions', S1E11, 'OK5iE-Ss2eo'),
			new Episode('You decision is not forever', S1E12, '7TY5vwa67JQ')
		]
	]
];

export const roadmapEpisodeList: Episode[] = [].concat(...[].concat(...roadmapEpisodesBySeason));
