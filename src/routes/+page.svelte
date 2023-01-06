<!-- 
	Landing page.

	Created by Haowen Liu in 2022.
 -->
<script lang="ts">
	import Container from '../components/container.svelte';
	import Header from '../components/header.svelte';
	import TeamGallery from '../components/team_gallery.svelte';
	import type { PageData } from './$types';

	import CLTE from '../images/clte.svg';
	import HearFromStudents from '../images/hear-from-students.svg';
	import Quote from '../images/quote.svg';
	import RoadmapMobile from '../images/roadmap-mobile.svg';
	import Roadmap from '../images/roadmap.svg';
	import VanishingTall from '../images/vanishing-tall.png?webp';
	import VanishingWide from '../images/vanishing-wide.png?webp';
	import Vanishing from '../images/vanishing.png?webp';

	export let data: PageData;
</script>

<svelte:head>
	<title>Viterbi Vision Venture</title>
</svelte:head>

<Header page="about" />
<div class="relative left-0 top-0 z-background w-full">
	<div>
		<img class="w-full md:hidden" src={VanishingTall} alt="Vanishing point illustration" />
		<img
			class="hidden w-full md:block xl:hidden"
			src={Vanishing}
			alt="Vanishing point illustration"
		/>
		<img class="hidden w-full xl:block" src={VanishingWide} alt="Vanishing point illustration" />
	</div>
</div>

<Container>
	<!-- Quote -->
	<div class="mb-24 flex justify-center">
		<div class="flex max-w-3xl flex-col space-y-4 text-lg md:flex-row md:space-y-0 md:space-x-6">
			<img src={Quote} alt="quotation mark" class="h-12 w-12 self-start md:h-20 md:w-20" />
			<div class="flex flex-col items-center text-center text-xl">
				<div>
					In art, the convergence of lines where a road disappears into the horizon is known as a
					vanishing point.
				</div>
				<div class="mt-8 font-bold">In education, it is known as graduation.</div>
			</div>
		</div>
	</div>

	<!-- Info -->
	<div class="mb-24">
		<div class="text-lg">WHO WE ARE</div>
		<div class="text-3xl font-bold">About the Project</div>
		<div class="mt-6 space-y-4 font-serif text-lg">
			<p>
				The premise of Vision Venture is simple: current students interview recent alumni about
				their educational and professional experiences. Vision Venture aims to help you see beyond
				the immediate horizon of course work and to reconnect with the “why” that led you to the
				engineering path in the first place.
			</p>
			<p>
				The vanishing point can have two effects. First, you may be uncertain or anxious about what
				life will be like after graduation—after all, you have been in school nearly your entire
				life! Vision Venture includes short, thematic video clips of recent alumni sharing their
				experiences and answering common student questions, from the practical to the philosophical.
				And second, in the midst of your hard work as an engineering major, you may lose sight of
				your initial motivation for being an engineer. Vision Venture can help you recover your
				“why”—or maybe a new “why”—which might range from having job security to a desire to improve
				the world or even to tackle engineering problems from a different perspective.
			</p>
			<p>
				At its heart, Vision Venture hopes to promote your sense of agency, reignite your
				professional purpose, and help you forge your identity as you travel your own unique path
				into the future.
			</p>
		</div>
	</div>
</Container>

<!-- Roadmap -->
<Container paddingClass="px-4">
	<div class="relative">
		<div>
			<img class="w-full md:hidden" src={RoadmapMobile} alt="Vision Venture roadmap" />
			<img class="hidden w-full md:block" src={Roadmap} alt="Vision Venture roadmap" />
		</div>
		<a
			class="button absolute left-[15%] top-[90%] !hidden -translate-x-1/2 -translate-y-1/2 md:!flex"
			href="/roadmap"
		>
			<div>Check out Vision Roadmap</div>
		</a>
	</div>
	<div class="flex justify-center">
		<a class="button mt-6 mb-12 md:!hidden" href="/roadmap">
			<div>Check out Vision Roadmap</div>
		</a>
	</div>
</Container>

<!-- Student Voices -->
<div class="title mx-8 md:hidden">Hear from our Students!</div>
<Container paddingClass="px-0">
	<div class="relative">
		<div class="absolute top-1/2 left-1/4 flex -translate-x-1/2 -translate-y-1/2 flex-col">
			<div class="title hidden md:block">Hear from our Students!</div>
			<a class="button mt-4" href="/voices" id="voices-button">
				<div>More Student Voices</div>
			</a>
		</div>
		<img src={HearFromStudents} alt="Hear from students" class="w-full" />
	</div>
</Container>

<!-- Team -->
<Container>
	<div class="title">Meet the Team!</div>
	<TeamGallery people={data.team} />

	<div class="mb-4 flex flex-col items-center md:flex-row">
		<img src={CLTE} alt="CLTE logo" class="w-64" />
		<div class="thanks">
			Financial support was provided for this work by the Kern Family Foundation through the
			Coalition for Life-Transformative Education (CLTE). This website solely reflects the opinions
			and conclusions of its authors and not the Kern Family Foundation, the CLTE, or the
			individuals associated with these organizations.
		</div>
	</div>
	<div class="thanks mb-4">
		Matching funds were provided for this work by the Dean’s Office at the Viterbi School of
		Engineering, University of Southern California. This website solely reflects the opinions and
		conclusions of its authors and not the Viterbi School of Engineering, the University of Southern
		California, or the individuals associated with these organizations.
	</div>
</Container>

<style lang="postcss">
	.title {
		@apply mt-8 mb-4 text-2xl font-bold sm:text-3xl md:text-4xl;
	}

	.button {
		@apply mx-auto rounded-lg bg-accent-green px-4 font-bold text-white shadow-lg;
		@apply flex h-11 w-36 items-center text-sm sm:h-14 sm:w-48 sm:text-base;

		& div {
			@apply w-full text-center;
		}
	}

	.thanks {
		@apply text-sm italic;
	}
</style>
