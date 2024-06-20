import DiscordActivity from "./DiscordActivity";
import PersonalDetails from "./PersonalDetails";

<<<<<<< HEAD
const AboutSection = () => {
  return (
    <section className="my-10 md:pt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-8 items-center justify-center">
          <DiscordActivity />
          <PersonalDetails />
        </div>
      </div>
    </section>
  );
};
=======
const AboutSection = () => (
  <section id="about" className="my-8 pt-3">
    <div className="md:px-0 lg:px-12 shadow-lg  rounded-md">
      <h2 className="section-title">About Me</h2>
      <p className="text-gray-100 text-lg mb-4 font-mono font-thin text-center">
        Hi there! It's a pleasure to meet you. My name is Harsh, and I'm a 
MERN stack developer. I specialize in working with MongoDB, 
Express.js, React, and Node.js.
With a strong emphasis on clean code, problem-solving, and 
user-friendly design, I approach every project with a dedication 
to delivering high-quality results.

      </p>
      <p className="text-gray-100 text-lg font-mono text-center">
       I hope this gives you a better understanding of my background. 
Please feel free to reach out if you have any further questions.
      </p>
    </div>
  </section>
);
>>>>>>> 4d78f2a47251691acfc1f1fae3c198addcbf308a

export default AboutSection;
