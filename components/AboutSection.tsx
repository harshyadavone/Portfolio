import DiscordActivity from "./DiscordActivity";
import PersonalDetails from "./PersonalDetails";

const AboutSection = () => {
  return (
    <section className="my-10 md:pt-24">
      <div className="md:container md:mx-auto md:px-8 lg:px-16 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-8 items-center justify-center">
          <DiscordActivity />
          <PersonalDetails />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
