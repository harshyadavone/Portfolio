import SocialLinks from "./SocialLinks";

const ProfileName = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-5xl text-center tracking-wide font-semibold text-white md:text-8xl">
        harsh
      </h1>
      <p className="text-xl font-other    text-gray-300 md:text-2xl  px-4 py-1 rounded-md">
        Full Stack Developer
      </p>
      <SocialLinks />
    </div>
  );
};

export default ProfileName;
