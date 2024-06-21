import { calculateAge } from "@/utils/CalculateAge";

const PersonalDetails = () => {
  const age = calculateAge("2004-07-24");
  const username = "harsh_one";
  return (
    <div>
      <h2 className="text-2xl pt-5 md:pt-0 font-other font-bold md:pb-3 md:hidden">
        Bio:
      </h2>
      <p className="text-gray-100 font-other text-lg mb-4 leading-relaxed">
        Hey there, I'm Harsh! I'm a{" "}
        <span className="px-2 bg-gray-500/20 rounded-md">{age}-year-old</span>{" "}
        full-stack developer based in India.
      </p>
      <p className="text-gray-100 font-other text-lg mb-4 leading-relaxed">
        I've been coding for 2 years now and am currently learning{" "}
        <span className="px-2 bg-gray-500/20 rounded-md">
          advanced backend concepts.
        </span>
      </p>
      {username && (
        <p className="text-gray-100 font-other text-lg mb-4 leading-relaxed">
          Discord Username:{" "}
          <span className="px-2 font-other bg-gray-500/20 rounded-md">
            {username}
          </span>
        </p>
      )}
    </div>
  );
};

export default PersonalDetails;
