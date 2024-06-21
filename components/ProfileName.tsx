import SocialLinks from "./SocialLinks";

const ProfileName = () => {
  return (
    <div className="flex flex-col gap-4 items-start justify-center">
      <h1 className="text-6xl font-other text-left md:text-center tracking-wide font-semibold text-white md:text-8xl">
        harsh
      </h1>
      <p className=" text-left font-other  text-gray-300 text-2xl  md:px-4 py-1 rounded-md">
        Full Stack Developer
      </p>
      <SocialLinks />
    </div>
  );
};

export default ProfileName;
