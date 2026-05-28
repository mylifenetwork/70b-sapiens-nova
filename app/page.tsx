import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export const metadata: Metadata = {
	title: '70b | Building the Future with Generative AI',
	description:
		'70b builds programs in generative AI, accessibility technology, STEM education, digital humans, and enterprise AI solutions.',
};

function SectionLabel({ children }: { children: ReactNode }) {
	return (
		<div className="inline-block rounded-full px-4 py-1" style={{ backgroundColor: 'var(--brand-primary)' }}>
			<p className="font-sans text-sm font-normal uppercase tracking-wide text-white md:text-base">{children}</p>
		</div>
	);
}

function SectionHeading({ label, title, description }: { label: string; title: string; description: string }) {
	return (
		<div className="max-w-5xl space-y-4">
			<SectionLabel>{label}</SectionLabel>
			<h2 className="font-serif text-4xl font-normal leading-[1.1] text-black md:text-5xl">{title}</h2>
			<p className="text-lg leading-relaxed text-black/70">{description}</p>
		</div>
	);
}

function CTAButton({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
	const isPrimary = variant === 'primary';
	return (
		<Link
			href={href}
			className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] ${
					isPrimary ? 'bg-(--brand-primary) text-white hover:bg-(--brand-primary)/90' : 'bg-white text-black hover:bg-white/90'
			}`}
		>
			{children}
		</Link>
	);
}

const whoWeAreBridges = ['AI research', 'Education', 'Enterprise applications', 'Inclusive technology'];

const focusAreas = [
	{
		title: 'Generative AI Solutions',
		image: '/images/copilot.png',
		items: ['AI assistants', 'Enterprise LLMs', 'Workflow automation', 'On-premise AI systems'],
	},
	{
		title: 'Accessibility Technology',
		image: '/images/human_tech1.BiYtWcrZ.jpg',
		items: ['HKSL translation', 'AI communication systems', 'Inclusive digital tools', 'AI avatars'],
	},
];

const featuredPrograms = [
	{
		title: 'Private AI Copilots',
		subtitle: 'An intensive module on GenAI systems, secure AI engineering and enterprise applications, guiding learners through design, governance and on‑premise deployment of private, resilient AI solutions.',
		image: '/images/copilot.png',
		href: '/programs/stem-ai-summer-school',
		tone: 'bg-[var(--brand-stromboli)] text-white',
	},
	{
		title: 'HKSL Translation Technology',
		subtitle: 'A hands-on innovation project focused on building AI-powered Hong Kong Sign Language translation technology. Students explore how generative AI and digital humans can support accessibility, inclusive communication, and real-world social impact.',
		image: '/images/hksl.jpg',
		href: '/programs',
		tone: 'bg-[var(--bg-linen)] text-black',
	},
];

const whyChooseUs = [
  {
    title: "Real-world AI technologies",
    description: "Students work with practical AI tools, digital humans, and generative AI applications used in real industries.",
    icon: "01",
  },
  {
    title: "Hands-on project learning",
    description: "Learning goes beyond theory through guided projects, prototypes, and creative problem-solving tasks.",
    icon: "02",
  },
  {
    title: "Industry-relevant skills",
    description: "Programs help students build future-ready skills in AI, STEM, communication, and digital innovation.",
    icon: "03",
  },
  {
    title: "Human-centered AI approach",
    description: "Students learn to design AI solutions that support people, accessibility, and positive social impact.",
    icon: "04",
  },
  {
    title: "Innovation and entrepreneurship mindset",
    description: "We encourage students to explore ideas, test solutions, and think like young innovators.",
    icon: "05",
  },
  {
    title: "Portfolio-building experiences",
    description: "Students complete visible projects that can support future academic, competition, or personal portfolios.",
    icon: "06",
  },
];

const showcaseItems = [
	{
		title: 'Student demos',
		image: '/images/chula-venture-final-pitch.VMFUh09m_Z2iJlNa.webp',
	},
	{
		title: 'AI avatar videos',
		image: '/images/human_tech1.BiYtWcrZ.jpg',
	},
	{
		title: 'HKSL translation examples',
		image: '/images/advanced-research.webp',
	},
	{
		title: 'Project screenshots and presentations',
		image: '/images/tech-ai-workshop-bisp-campus-drone.Cd420VEo_2br701.webp',
	},
];

type PartnerLogo = {
	title: string;
	image: string;
	alt: string;
	href?: string;
};

type PartnerGroup = {
	category: string;
	logos: PartnerLogo[];
};

const partnerGroups: PartnerGroup[] = [
	{
		category: 'Clients',
		logos: [
			{ title: 'HSBC', image: '/images/HSBC_logo_(2018).svg.png', alt: 'HSBC logo',href: 'https://www.hsbc.com.hk/zh-hk/' },
			{ title: 'Standard Chartered', image: '/images/standard_logo.png', alt: 'Standard Chartered logo', href: 'https://av.sc.com/hk/zh/cybersecurity-sign-language/?intcid=web_listing-sc_com_top_nav-na-staticmedia_others-sng-na-hs_cybersecurity_sign_language-sc_com_organic-hk-zh' },
		],
	},
	{
		category: 'Universities',
		logos: [
			{ title: 'HKU', image: '/images/HKU.png', alt: 'HKU emblem', href: 'https://www.hku.hk/' },
			{ title: 'PolyU', image: '/images/polyu_logo.png', alt: 'PolyU emblem', href: 'https://www.polyu.edu.hk/about-polyu/university-identity/' },
		],
	},
	{
		category: 'NGOs',
		logos: [
			{ title: 'Silence', image: '/images/silence_logo.jpeg', alt: 'Silence logo', href: 'https://www.silence.org.hk' },
			{ title: 'SLCO', image: '/images/slco_logo.jpg', alt: 'SLCO logo', href: 'https://slco.org.hk' },
		],
	},
	{
		category: 'Technology companies',
		logos: [
			{ title: 'Glassbox', image: '/images/glassbox_logo.png', alt: 'Glassbox logo', href: 'https://www.xai.hk' },
			{ title: 'Impact', image: '/images/impact_logo.jpg', alt: 'Impact logo', href: 'https://impactai.hk' },
		],
	},
];

export default function HomePage() {
	return (
		<>
			<HeroSection />

			<section id="about-us" className="w-full bg-(--bg-linen) py-24 md:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<div className="space-y-6">
							<SectionHeading
								label="Who We Are"
								title="Human-Centered AI Innovation"
								description="We combine generative AI, digital human technology, accessibility innovation, and STEM education to create impactful AI solutions for both industry and society."
							/>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="soft-card mt-8 w-full sm:col-span-2 bg-white p-8">
								<p className="text-sm uppercase tracking-widest text-black/50">Our platform bridges</p>
								<ul className="mt-4 space-y-3 text-lg text-black">
									{whoWeAreBridges.map((item) => (
										<li key={item} className="flex items-center gap-3">
											<span className="h-2.5 w-2.5 rounded-full bg-(--brand-primary)" />
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="focus-areas" className="w-full bg-white py-24">
				<div className="mx-auto max-w-7xl px-6">
					<SectionHeading
					label="What We Build"
					title="Our Focus Areas"
					description="Our work connects advanced AI capability with practical education, product development, and inclusive social value."
					/>

					<div className="mt-12 grid gap-8 lg:grid-cols-2">
					{focusAreas.map((area, index) => (
						<div
						key={area.title}
						className={`soft-card mt-8 p-8 ${
							index === 0
							? 'bg-(--brand-stromboli) text-white'
							: 'bg-white text-(--brand-stromboli) border border-black/10'
						}`}
						>
						{/* <div className="relative mb-8 aspect-16/10 overflow-hidden rounded-[1.75rem] bg-white/15">
							<Image src={area.image} alt={area.title} fill className="object-cover" />
						</div> */}

						<h3 className="font-serif text-3xl font-normal md:text-4xl">
							{area.title}
						</h3>

						<div className="mt-8 grid gap-4 sm:grid-cols-2">
							{area.items.map((item) => (
							<div
								key={item}
								className={`rounded-2xl px-5 py-4 backdrop-blur-sm ${
								index === 0
									? 'bg-white/12'
									: 'bg-black/4'
								}`}
							>
								<p className="text-sm font-medium">{item}</p>
							</div>
							))}
						</div>
						</div>
					))}
					</div>
				</div>
			</section>

			<section id="programs" className="w-full bg-(--bg-linen) py-24">
				<div className="mx-auto max-w-7xl px-6">
					<SectionHeading
						label="Featured Programs"
						title="Explore Our Programmes"
						description="Discover hands-on AI and STEM programs designed to inspire creativity, build future-ready skills, and turn innovative ideas into real-world projects."
					/>

					<div className="mt-12 grid gap-6 lg:grid-cols-2">
						{featuredPrograms.map((program) => {
							const isDark = program.tone.includes('text-white');

							return (
								<article key={program.title} className={`soft-card h-full ${program.tone}`}>
									<div className="relative aspect-4/3 overflow-hidden">
										<Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
									</div>
									<div className="space-y-4 p-8">
										<h3 className="font-serif text-2xl font-normal md:text-[2rem]">{program.title}</h3>
										<p className={`text-base leading-relaxed ${isDark ? 'text-white/85' : 'text-black/70'}`}>{program.subtitle}</p>
										<div className="flex items-center gap-3">
											<a href="https://forms.gle/6yW1xD332eF8aMiR7" target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-(--brand-primary) text-white hover:bg-(--brand-primary)/90'}`}>
												Registration
											</a>

											<Link
												href={program.href}
												className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${isDark ? 'bg-transparent border border-white/30 text-white hover:bg-white/5' : 'bg-white text-black hover:bg-gray-100 border border-black/10'}`}
											>
												Learn More
											</Link>
										</div>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section id="why-choose-us" className="w-full bg-white py-24 md:py-32">
  				<div className="mx-auto max-w-7xl px-6">
    				<div className="max-w-5xl">
						<SectionHeading
							label="Why Choose Us"
							title="Preparing Students for the Future of AI"
							description="Equipping students with practical AI knowledge, creative problem-solving skills, and future-ready digital capabilities for a rapidly changing world."
						/>
					</div>

					<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{whyChooseUs.map((item) => (
						<div
						key={item.title}
						className="group soft-card bg-(--bg-sage) p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
						>
						<div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-(--brand-primary) text-sm font-semibold text-white">
							{item.icon}
						</div>

						<h3 className="font-serif text-2xl leading-tight text-black">
							{item.title}
						</h3>

						<p className="mt-4 text-base leading-relaxed text-black/60">
							{item.description}
						</p>
						</div>
					))}
					</div>
				</div>
			</section>

			{/* <section id="projects" className="w-full bg-[var(--bg-cream)] py-24">
				<div className="mx-auto max-w-7xl px-6">
					<SectionHeading
						label="Showcase"
						title="Student & Innovation Projects"
						description="Include student demos, AI avatar videos, HKSL translation examples, screenshots, and presentations."
					/>

					<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
						{showcaseItems.map((item) => (
							<article key={item.title} className="soft-card bg-white">
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
								</div>
								<div className="p-6">
									<p className="text-lg font-medium text-black">{item.title}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section> */}

			<section id="partners" className="w-full bg-(--bg-linen) py-24">
				<div className="mx-auto max-w-7xl px-6">
					<SectionHeading
						label="Partners"
						title="Partners & Collaborators"
						description="Our partners include schools, universities, NGOs, and technology companies."
					/>

					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{partnerGroups.map((group) => (
							<div key={group.category} className="soft-card mt-8 bg-(--bg-sage) p-6">
								<p className="text-sm uppercase tracking-widest text-black/50">{group.category}</p>
								<div className="mt-5 grid gap-4">
									{group.logos.map((logo) => (
										<div key={logo.title} className="flex min-h-28 items-center justify-center rounded-2xl bg-white px-5 py-5">
											{logo.href ? (
												<a href={logo.href} target="_blank" rel="noreferrer" className="relative block h-16 w-full max-w-45 transition-opacity hover:opacity-80">
													<Image src={logo.image} alt={logo.alt} fill className="object-contain" />
												</a>
											) : (
												<div className="relative h-16 w-full max-w-45">
													<Image src={logo.image} alt={logo.alt} fill className="object-contain" />
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="contact" className="w-full bg-(--brand-stromboli) py-24 text-white">
				<div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
					<div className="space-y-6">
						<SectionLabel>Call To Action</SectionLabel>
						<h2 className="font-serif text-4xl font-normal leading-[1.1] md:text-5xl">Join the Future of AI Innovation</h2>
						<p className="max-w-2xl text-lg leading-relaxed text-white/85">
							Enrol now or contact us to build the next wave of generative AI, accessibility, and STEM education.
							</p>
						</div>

					<div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
						<a href="https://forms.gle/6yW1xD332eF8aMiR7" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all hover:scale-[1.02] bg-(--brand-primary) text-white hover:bg-(--brand-primary)/90">
							Enrol Now
						</a>
						<CTAButton href="mailto:admin@xai.hk" variant="secondary">
							Contact Us
						</CTAButton>
					</div>
				</div>
			</section>
		</>
	);
}
