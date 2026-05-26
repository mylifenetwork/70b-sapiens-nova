import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Building Private AI Copilots | 70b',
  description:
    'An intensive module on GenAI systems, secure AI engineering and enterprise applications, guiding learners through design, governance and on‑premise deployment of private, resilient AI solutions.',
};

type Highlight = {
  title: string;
  description: string;
};

type AgendaItem = {
  day: string;
  topic: ReactNode;
};

const highlights: Highlight[] = [
  {
    title: 'Project-based learning',
    description: 'Students learn by building and testing ideas instead of only listening to lectures.',
  },
  {
    title: 'STEM and AI integration',
    description: 'The program combines science, technology, engineering, math, and AI in one experience.',
  },
  {
    title: 'Creative problem-solving',
    description: 'Students are guided to experiment, collaborate, and turn concepts into usable prototypes.',
  },
  {
    title: 'Presentation readiness',
    description: 'Each participant finishes with a shareable project and a short final presentation.',
  },
];

const agenda: AgendaItem[] = [
  {
    day: 'Day 1',
    topic: (
      <>
        <span className="font-semibold text-black">How AI Copilots Work</span>
        <br />
        Explore the fundamentals of AI copilots, their applications, and the technology behind them.
      </>
    ),
  },
  {
    day: 'Day 2',
    topic: (
      <>
        <span className="font-semibold text-black">Teaching AI with Your Own Data</span>
        <br />
        Learn how to leverage your own data to train and customize AI models.
      </>
    ),
  },
  {
    day: 'Day 3',
    topic: (
      <>
        <span className="font-semibold text-black">Secure & Private AI Systems</span>
        <br />
        Understand the principles and practices of building secure and private AI systems.
      </>
    ),
  },
  {
    day: 'Day 4',
    topic: (
      <>
        <span className="font-semibold text-black">Build, Pitch & Demo</span>
        <br />
        Build your own AI copilot, pitch it to the class, and demo their creations.
      </>
    ),
  },
];

const outcomes: { title: string; description: string }[] = [
  {
    title: 'AI Systems Engineering',
    description: 'Understand end-to-end AI system components, data pipelines, and deployment considerations.',
  },
  {
    title: 'Data & Model Literacy',
    description: 'Work with data, evaluate model behaviour, and iterate on performance.',
  },
  {
    title: 'Responsible AI Practices',
    description: 'Integrate privacy, security, and ethical principles into AI design and implementation.',
  },
  {
    title: 'Teamwork & Communication',
    description: 'Collaborate effectively and present technical work to diverse stakeholders.',
  },
];

function SectionTag({ children }: { children: ReactNode }) {
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

export default function STEMAISummerSchoolPage() {
  return (
    <main className="w-full bg-(--bg-linen) pt-28">
      <section className="relative overflow-hidden border-b border-black/5 bg-white py-20 md:py-24">
        <div className="absolute -right-10 -top-8 h-40 w-40 opacity-30 md:h-56 md:w-56" aria-hidden="true">
          <Image src="/images/orange.Bsxz-IXU.webp" alt="" fill className="object-contain" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionTag>Programme 01</SectionTag>
            <h1 className="font-serif text-4xl font-normal leading-[1.1] text-black md:text-5xl lg:text-6xl">
              Building Private AI Copilots
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-black/70">
              An intensive module on GenAI systems, secure AI engineering and enterprise applications, guiding learners through design, governance and on‑premise deployment of private, resilient AI solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-blue-700 bg-blue-600 px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-blue-700 hover:text-white">
                Enrol Now
              </Link>
            </div>
          </div>

          <div className="soft-card bg-(--bg-sage) p-8">
            <p className="text-sm uppercase tracking-wider text-black/60">Quick facts</p>
            <div className="mt-6 space-y-4 text-sm text-black/80">
              <p><span className="font-semibold text-black">Age:</span> 15-17 years old</p>
              <p>
                <span className="font-semibold text-black">Fee:</span> 6,800 HKD / Session
              </p>
              <p><span className="font-semibold text-black">Location:</span> Room 7, 2WCWC, 3/F, Building 2W
No. 2 Science Park West Ave, HKSTP, Shatin, NT</p>
              <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
                <p className="font-semibold text-black">Start date:</p>
                <p>Session 1: 13 July 2026 - 16 July 2026</p>
                <div />
                <p>Session 2: 27 July 2026 - 30 July 2026</p>
                <div />
                <p>Session 3: 10 August 2026 - 13 August 2026</p>
                <div />
                <p>Session 4: 17 August 2026 - 20 August 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-(--bg-linen) py-20" id="course-schedule">
        <div className="mx-auto max-w-7xl space-y-10 px-6">
          <SectionTag>Course Schedule</SectionTag>
          <SectionTitle
            title="Learning Timeline"
            description="A simple day-by-day plan with lessons, hands-on practice and final showcase time."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
              {agenda.map((item) => (
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
            description="Learn how to build private AI copilots to answer document questions, summarise information or search knowledge bases. Run on‑premise, and apply responsible AI by yourself."
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
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-full bg-(--brand-coral-light) px-10 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:bg-(--brand-coral-light)/90"
          >
            Enrol Now
          </Link>
        </div>
      </section>
    </main>
  );
}
