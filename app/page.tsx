import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import SkillsSection from "@/components/SkillSection";
import ProjectsSection from "@/components/ProjectSection";
import Profile from "@/components/Profile";
import GitHubRepo from "@/components/GithubRepos";

export default function Home() {
  return (
    <main className="p-8 md:p-10 md:pt-20 text-gray-100">
    
      <h1 className="decor absolute opacity-20 -mt-14 ml-50 pl-16 hidden md:inline-block">
        {"///"}
      </h1>
      <div className="relative flex flex-col md:flex-row items-center justify-evenly md:gap-10">
        <Profile />
      </div>
      <section>
        <AboutSection />
      </section>
      <section className="relative">
        <h1 className="decor absolute opacity-20 right-0 mt-40 hidden md:inline-block">
          SKills
        </h1>
        <div className="ml-auto mr-12">
          <SkillsSection />
        </div>
      </section>

      <section>
        <h1 className="decor absolute opacity-20 -mt-14 ml-64 pl-16 hidden md:inline-block">
          Projects
        </h1>
        <ProjectsSection />
      </section>
      <section>
        <GitHubRepo />
      </section>
      <section>
        <ContactSection />
      </section>
    </main>
  );
}
