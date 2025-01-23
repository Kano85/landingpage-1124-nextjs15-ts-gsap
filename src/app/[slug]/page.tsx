//src/app/[slug]/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { projectData } from '../../components/sections/works/projetData'; // Adjusted the import path
import Head from 'next/head'; // Optional: Consider using metadata instead

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Project Not Found</h1>
      </main>
    );
  }

  const relatedProjects = projectData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Optional: Consider using metadata export instead of <Head> */}
      <Head>
        <title>{project.title} | My Projects</title>
        <meta name="description" content={`Details about ${project.title}`} />
      </Head>
      <main className="bg-mainbody-weg text-hero-dark">
        {/* 1. HERO / PROJECT OVERVIEW SECTION */}
        <section
          className="
            p-[5rem_0.625rem_0.625rem_0.625rem] 
            sm:p-[4rem_0.5rem] 
            md:grid md:grid-cols-2 md:gap-[1.578rem] 
            md:p-[7.125rem_1.25rem_0.625rem_1.25rem] 
            md:pl-[clamp(0.4453125rem,_-10.4222rem_+_23.3397vw,_10rem)]
          "
        >
          {/* Left Side: Large Image (Hero / Mockup) */}
          <div
            className="
              img relative 
              h-[30.3125rem] 
              w-full 
              md:sticky md:top-[3.75rem] 
              md:w-11/12 
              lg:w-[clamp(19rem,6.4885rem+26.8702vw,30rem)]
            "
          >
            <Image
              fill
              src={project.imageUrl || '/project1-hero.png'} // Made dynamic based on `project.imageUrl`
              alt={`${project.title} Hero Mockup`}
              className="object-cover object-center"
            />
          </div>

          {/* Right Side: Project Overview Text */}
          <div className="flex flex-col gap-[2.5rem] pt-12 md:pt-0 lg:mb-[500px]">
            <h2 className="main-heading">
              {project.title} <br />
              Case Study
            </h2>
            <p className="card-paragraph">
              <strong>Project Name:</strong> {project.title}
              <br />
              <strong>Client:</strong> {project.companyName}
              <br />
              <strong>Sector:</strong> Digital Education, Technology, Community
              Building
            </p>
            <p className="card-paragraph">
              <strong>Timeframe:</strong> {project.date}
              <br />
              <strong>Team Composition:</strong> [Briefly mention roles—Product
              Owner, Developers, etc.]
              <br />
              <strong>My Role:</strong> UX/UI Designer &amp; Agile Team Member
            </p>
          </div>
        </section>

        {/* 2. CONTEXT & VISION SECTION */}
        <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
          <div className="lg:flex lg:gap-[3.75rem]">
            <h2 className="main-heading mb-8 lg:mb-0">Context &amp; Vision</h2>
            <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
              <p className="card-paragraph">
                <strong>Mein Bildungsraum</strong> is a nationwide digital
                learning initiative aimed at bridging the gap between education
                and technology. Its mission is to create an inclusive digital
                learning environment that connects learners, educators, and
                educational services—all within one interconnected platform.
              </p>
              <p className="card-paragraph">
                <b>Trainspot</b> is a specialized tool within this broader
                initiative. It enhances the digital learning ecosystem by
                providing functionalities that help both education providers and
                learners optimize their training pathways.
              </p>
              {/* [Insert or replace with images, timeline, or any visuals to illustrate context] */}
            </div>
          </div>
        </section>

        {/* 3. THE CHALLENGE SECTION */}
        <section
          className="
            bg-mainbody-weg 
            p-[5rem_0.625rem_0.625rem_0.625rem] 
            sm:p-[4rem_0.5rem] 
            md:grid md:grid-cols-2 md:gap-[1.578rem] 
            md:p-[7.125rem_1.25rem_0.625rem_1.25rem] 
            md:pl-[clamp(0.4453125rem,_-10.4222rem_+_23.3397vw,_10rem)]
          "
        >
          <div
            className="
              img relative 
              h-[18rem] 
              w-full
              mb-8
              md:mb-0 
              md:h-[25rem]
              lg:h-[30rem]
            "
          >
            <Image
              fill
              src="/challenge-placeholder.png"
              alt="Key Challenges Infographic"
              className="object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
            <h2 className="main-heading">The Challenge</h2>
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex gap-[0.625rem] max-w-[55rem]">
                <div className="active-number md text-details-red">01</div>
                <div className="flex flex-col gap-[0.625rem]">
                  <h3 className="md text-balance">
                    <strong>Fragmented Learning Landscape:</strong>
                  </h3>
                  <p className="card-paragraph">
                    Institutions and learners struggled to consolidate multiple
                    courses, resources, and tracking in one place.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-[0.625rem] max-w-[55rem]">
                <div className="active-number md text-details-red">02</div>
                <div className="flex flex-col gap-[0.625rem]">
                  <h3 className="md text-balance">
                    <strong>Lack of Seamless Integration:</strong>
                  </h3>
                  <p className="card-paragraph">
                    Existing systems were siloed, complicating collaboration
                    between educators.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-[0.625rem] max-w-[55rem]">
                <div className="active-number md text-details-red">03</div>
                <div className="flex flex-col gap-[0.625rem]">
                  <h3 className="md text-balance">
                    <strong>User Adoption:</strong>
                  </h3>
                  <p className="card-paragraph">
                    Less tech-savvy educators needed an easy-to-use platform to
                    stay motivated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROJECT GOALS & OBJECTIVES SECTION */}
        <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
          <h2 className="main-heading mb-8">Project Goals &amp; Objectives</h2>
          <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
            <p className="card-paragraph">
              <strong>Develop an Inclusive Digital Tool:</strong> Ensure
              educators, learners, and service providers have equal access.
            </p>
            <p className="card-paragraph">
              <strong>Improve User Experience:</strong> Create an intuitive
              interface for scheduling, content access, and progress tracking.
            </p>
            <p className="card-paragraph">
              <strong>Seamless Integration:</strong> Sync courses and resources
              with minimal setup.
            </p>
            <p className="card-paragraph">
              <strong>Foster Collaboration:</strong> Promote communication and
              knowledge-sharing via a unified community space.
            </p>
            {/* [If you have metrics or KPIs, insert them here] */}
          </div>
        </section>

        {/* 5. MY ROLE & RESPONSIBILITIES SECTION (EXAMPLE) */}
        <section
          className="
            bg-mainbody-weg 
            p-[5rem_0.625rem] 
            sm:p-[4rem_0.5rem]
            md:p-[7.125rem_1.25rem]
          "
        >
          <div className="max-w-[84.2rem] mx-auto">
            <h2 className="main-heading mb-8">
              My Role &amp; Responsibilities
            </h2>
            <p className="card-paragraph mb-6">
              I led the UX/UI design stream, focusing on empathizing with user
              needs and delivering iterative designs in line with our agile
              workflow. Specifically, I:
            </p>
            <ul className="list-disc ml-4 card-paragraph space-y-3">
              <li>Defined design objectives (accessibility, clarity, etc.).</li>
              <li>Conducted user interviews for insights.</li>
              <li>Led user testing &amp; documented findings.</li>
              <li>Collaborated on a cohesive design system for consistency.</li>
            </ul>
            {/* [Add diagrams, photos, or any additional context about your role] */}
          </div>
        </section>

        {/* 6. PLACEHOLDER FOR ADDITIONAL CASE STUDY SECTIONS (Research, Testing, Results, Reflection, etc.) */}
        {/* Repeat similar patterns or sections as needed for your full case study.
            Use .main-heading and .card-paragraph for consistent styling. */}

        {/* Closing / Next Steps Section */}
        <section className="max-w-[84.2rem] mx-auto px-[0.63rem] py-16 md:px-[1.25rem] lg:p-[10rem_4.5625rem_4rem_4.5625rem]">
          <h2 className="main-heading mb-8">Final Thoughts &amp; Next Steps</h2>
          <p className="card-paragraph mb-4">
            With {project.title}, we aim to revolutionize digital education by
            unifying learners and educators on one platform. We continue to
            iterate, refining the user journey through frequent feedback and
            agile sprints—building a robust foundation for more seamless,
            inclusive learning experiences.
          </p>
          <p className="card-paragraph">
            [Add any final metrics, a roadmap for future features, or reflection
            on lessons learned.]
          </p>
        </section>

        {/* 7. Related Projects Section */}

        <section className="max-w-[84.2rem] mx-auto px-[0.63rem] py-16 md:px-[1.25rem] lg:p-[10rem_4.5625rem_4rem_4.5625rem]">
          <h2 className="main-heading mb-8">Other Projects You Might Like</h2>
          <ul className="list-disc list-inside">
            {relatedProjects.map((relatedProject) => (
              <li key={relatedProject.slug} className="mb-2">
                <Link
                  href={`/projects/${relatedProject.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {relatedProject.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

// Generate static params (optional for SSG)
export async function generateStaticParams() {
  return projectData.map((p) => ({ slug: p.slug }));
}
