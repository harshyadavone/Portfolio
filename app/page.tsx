import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import SkillsSection from "@/components/SkillSection";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-12 text-gray-100">
      <div className="flex flex-col items-center gap-8 md:gap-10">
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-5xl text-center font-extrabold text-white md:text-6xl">
          Harsh Yadav
        </h1>
        <p className="text-xl text-gray-300 md:text-2xl mt-2 px-6 py-2 rounded-md bg-blue-500/20">
          Full Stack Developer
        </p>

        <SocialLinks />
      </div>

      <section>
        <AboutSection />
      </section>
      <section>
        <SkillsSection />
      </section>
      <section>
        <ProjectsSection />
      </section>
      <section>
        <ContactSection />
      </section>
    </main>
  );
}
