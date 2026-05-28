import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HKSL Sign Language Course - 70b',
  description:
    'A dedicated course page for Hong Kong Sign Language learning, including curriculum, sessions, age suitability, fees, location, schedule, and learning outcomes.',
};

type SessionOption = {
  id: string;
  title: string;
  format: string;
  duration: string;
  seats: string;
  note: string;
};

type CurriculumModule = {
  title: string;
  summary: string;
};

type ScheduleItem = {
  day: string;
  topic: React.ReactNode;
};

const sessionOptions: SessionOption[] = [
  {
    id: 'weekday-evening',
    title: 'Session A (Weekday Evening)',
    format: 'In person',
    duration: '8 weeks, 1 class per week',
    seats: 'Max 18 learners',
    note: 'To be confirmed by your final content',
  },
  {
    id: 'saturday-morning',
    title: 'Session B (Saturday Morning)',
    format: 'In person',
    duration: '8 weeks, 1 class per week',
    seats: 'Max 18 learners',
    note: 'To be confirmed by your final content',
  },
  {
    id: 'intensive-holiday',
    title: 'Session C (Holiday Intensive)',
    format: 'In person intensive',
    duration: '4 full-day workshops',
    seats: 'Max 20 learners',
    note: 'To be confirmed by your final content',
  },
];

const curriculumModules: CurriculumModule[] = [
  {
    title: 'Module 1: Foundations of HKSL',
    summary: 'Introduction to basic signs, visual grammar, and everyday interaction patterns.',
  },
  {
    title: 'Module 2: Conversational Communication',
    summary: 'Topic-based communication drills for school, home, and public settings.',
  },
  {
    title: 'Module 3: Inclusive Technology Practice',
    summary: 'Using AI-assisted tools and digital resources to support sign language learning.',
  },
  {
    title: 'Module 4: Final Showcase',
    summary: 'Learners complete a practical communication task and reflection presentation.',
  },
];

const scheduleItems: ScheduleItem[] = [
  {
    day: 'Day 1',
    topic: (
      <>
        <span className="font-semibold text-black">How do machines learn sign language?</span>
        <br />
        Introduction to AI Accessibility & Data Collection
      </>
    ),
  },
  {
    day: 'Day 2',
    topic: (
      <>
        <span className="font-semibold text-black">How can AI generate human-like signing avatars?</span>
        <br />
        AI Avatar & GAN Modelling
      </>
    ),
  },
  {
    day: 'Day 3',
    topic: (
      <>
        <span className="font-semibold text-black">How can AI understand language differences?</span>
        <br />
        GenAI & LLM for HKSL Grammar Correction
      </>
    ),
  },
  {
    day: 'Day 4',
    topic: (
      <>
        <span className="font-semibold text-black">Create your own HKSL AI translator prototype.</span>
        <br />
        Build & Showcase Final Project
      </>
    ),
  },
];

const outcomes = [
  {
    title: 'AI & Social Awareness',
    description: 'Understand the social impact of AI accessibility technologies and HKSL linguistics.',
  },
  {
    title: 'System Prototyping',
    description: 'Build a functional HKSL translation pipeline and present AI solutions to real-world challenges.',
  },
  {
    title: 'Technical Proficiency',
    description: 'Master multimodal data processing, GAN-based avatar generation, and LLM-driven error correction.',
  },
  {
    title: 'Team & Presentation',
    description: 'Enhance collaborative innovation capabilities and develop highly competitive AI solutions.',
  },
];

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full bg-(--brand-primary) px-4 py-1">
      <span className="text-sm font-medium uppercase tracking-wide text-white">{children}</span>
    </div>
  );
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-3">
      <h2 className="font-serif text-3xl font-normal leading-tight text-black md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">{description}</p>
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <main className="w-full bg-(--bg-linen) pt-28">
      <section className="relative overflow-hidden border-b border-black/5 bg-white py-20 md:py-24">
        <div className="absolute -right-10 -top-8 h-40 w-40 opacity-30 md:h-56 md:w-56" aria-hidden="true">
          <Image src="/images/orange.Bsxz-IXU.webp" alt="" fill className="object-contain" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <SectionTag>Programme 02</SectionTag>
            <h1 className="font-serif text-4xl font-normal leading-[1.1] text-black md:text-5xl lg:text-6xl">
              Building HKSL Translation Technology
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-black/70">
              This is a hands-on innovation project focused on building AI-powered Hong Kong Sign Language translation technology. Students explore how generative AI and digital humans can support accessibility, inclusive communication, and real-world social impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://forms.gle/6yW1xD332eF8aMiR7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-600 px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-blue-700 hover:text-white">
                Enrol Now
              </a>
              <a
                href="/pdfs/hksl-course-flyer.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-white px-7 py-3 text-sm font-medium uppercase tracking-wide text-blue-700 transition-colors hover:bg-blue-50"
              >
                Download PDF
              </a>
              
            </div>
          </div>

          <div className="soft-card bg-(--bg-sage) p-8">
            <p className="text-sm uppercase tracking-wider text-black/60">Quick facts</p>
            <div className="mt-6 space-y-4 text-sm text-black/80">
              <p><span className="font-semibold text-black">Age:</span> 15-18 years old</p>
              <p><span className="font-semibold text-black">Language:</span> English</p>
              <p>
                <span className="font-semibold text-black">Fee:</span> 7,800 HKD / Session
                <span className="ml-2 text-red-500">(Enjoy a 15% Early Bird Discount when you enroll on or before 20 June 2026)</span>
              </p>
              <p><span className="font-semibold text-black">Location:</span> Room 7, 2WCWC, 3/F, Building 2W
No. 2 Science Park West Ave, HKSTP, Shatin, NT</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
                <p className="font-semibold text-black">Start date:</p>
                <p>Session 1: 6 July 2026 - 9 July 2026</p>
                <div />
                <p>Session 2: 20 July 2026 - 23 July 2026</p>
                <div />
                <p>Session 3: 3 August 2026 - 6 August 2026</p>
                <div />
                <p>Session 4: 17 August 2026 - 20 August 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="w-full bg-(--bg-linen) py-20" id="course-content">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          <SectionTag>Course Content</SectionTag>
          <SectionTitle
            title="What Students Will Learn"
            description="A clear learning pathway from foundational signs to practical communication, designed for real-world use and inclusive interaction."
          />

          <div className="grid gap-6 md:grid-cols-[60%_40%]">
            {curriculumModules.map((module) => (
              <article key={module.title} className="soft-card bg-white p-7">
                <h3 className="font-serif text-2xl font-normal text-black">{module.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/70">{module.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="w-full bg-white py-20" id="session-selection">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          <SectionTag>Session Selection</SectionTag>
          <SectionTitle
            title="Choose Your Session"
            description="You can provide final session names, times, capacity, and format, and I will replace these placeholders with your exact version."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {sessionOptions.map((session) => (
              <article key={session.id} className="soft-card bg-(--bg-sage) p-7">
                <h3 className="font-serif text-2xl font-normal text-black">{session.title}</h3>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-black/75">
                  <p><span className="font-semibold text-black">Format:</span> {session.format}</p>
                  <p><span className="font-semibold text-black">Duration:</span> {session.duration}</p>
                  <p><span className="font-semibold text-black">Capacity:</span> {session.seats}</p>
                </div>
                <p className="mt-5 text-sm text-black/60">{session.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-(--bg-linen) py-20" id="age-fee-location">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          <article className="soft-card bg-white p-7">
            <SectionTag>Age</SectionTag>
            <h3 className="mt-4 font-serif text-2xl font-normal text-black">Suitable Age</h3>
            <p className="mt-3 text-base leading-relaxed text-black/70">Please provide your target age range and prerequisites, and I will update this block precisely.</p>
          </article>

          <article className="soft-card bg-white p-7">
            <SectionTag>Fee</SectionTag>
            <h3 className="mt-4 font-serif text-2xl font-normal text-black">Course Fee</h3>
            <p className="mt-3 text-base leading-relaxed text-black/70">Please provide fee details, discount policy, and payment schedule.</p>
          </article>

          <article className="soft-card bg-white p-7">
            <SectionTag>Location</SectionTag>
            <h3 className="mt-4 font-serif text-2xl font-normal text-black">Course Location</h3>
            <p className="mt-3 text-base leading-relaxed text-black/70">Please provide venue details, city, classroom mode, and access instructions if needed.</p>
          </article>
        </div>
      </section> */}

      <section className="w-full bg-(--bg-linen) py-20" id="course-schedule">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          <SectionTag>Course Schedule</SectionTag>
          <SectionTitle
            title="Learning Timeline"
            description="A simple day-by-day plan with lessons, hands-on practice and final showcase time."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              {scheduleItems.map((item) => (
                <div key={item.day} className="grid gap-1 border-b border-black/10 px-6 py-5 md:grid-cols-[120px_1fr] md:items-center last:border-b-0">
                  <p className="text-sm font-semibold uppercase tracking-wide text-(--brand-primary)">{item.day}</p>
                  <p className="text-base leading-relaxed text-black/80">{item.topic}</p>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white p-6">
              <SectionTag>Daily Agenda</SectionTag>
              <div className="mt-6 space-y-4 text-sm text-black/80">
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <p className="font-semibold">10:00 – 12:30</p>
                  <p>Morning Lecture + Guided Demonstration</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <p className="font-semibold">12:30 – 13:30</p>
                  <p>Lunch Break</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <p className="font-semibold">13:30 – 16:30</p>
                  <p>Hands-on Workshop + Team Activities</p>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-2">
                  <p className="font-semibold">16:30 – 17:00</p>
                  <p>Reflection / Sharing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 

      <section className="w-full bg-white py-20" id="learning-outcomes">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          <SectionTag>Learning Outcomes</SectionTag>
          <SectionTitle
            title="What Learners Achieve"
            description="Gain ethical awareness and hands-on skills to prototype HKSL translation systems using multimodal data, GAN avatars, and LLM-driven correction for real-world impact."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item.title} className="soft-card flex items-start gap-3 bg-white p-6">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--brand-primary) text-xs text-white">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-black">{item.title}</h4>
                  <p className="text-base leading-relaxed text-black/80">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="soft-card flex items-start gap-3 bg-white p-6 md:col-span-2">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--brand-primary) text-xs text-white">
                ✓
              </span>
              <div>
                <h4 className="font-semibold text-black">Certificate & Recommendation</h4>
                <p className="text-base leading-relaxed text-black/80">Students receive a company-issued course completion certificate and a personalised recommendation letter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-(--brand-stromboli) py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-normal leading-tight md:text-5xl">Ready to join the summer programme?</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">
              Enrol now to secure a place in this programme and start building practical skills through guided innovation.
            </p>
          </div>
          <a
            href="https://forms.gle/6yW1xD332eF8aMiR7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-(--brand-coral-light) px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-(--brand-coral-light)/90"
          >
            Enrol Now
          </a>
        </div>
      </section>
    </main>
  );
}
