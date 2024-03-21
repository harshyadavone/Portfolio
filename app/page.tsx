import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import SkillsSection from "@/components/SkillSection";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-white">Harsh Yadav</h1>
        <p className="text-lg  text-gray-400">Full Stack Developer</p>
        <SocialLinks />
      </div>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
