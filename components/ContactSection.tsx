// ContactSection.jsx
import Link from "next/link";
import React from "react";

const ContactSection = () => (
  <section className="my-8 pt-5">
    <div className="md:px-0 lg:px-12 shadow-lg  rounded-md items-center flex flex-col">
      <h2 className="text-3xl font-bold mb-4 border-b  border-purple-400 text-white">
        Contact Me
      </h2>
      <p className="text-gray-400 mb-4 font-bold">
        If you have any questions or would like to discuss potential
        opportunities, feel free to reach out to me.
      </p>
      <div className="">
        <i className="fas fa-envelope text-gray-600  "></i>
        <Link
          href="mailto:harshdana1@gmail.com"
          className="text-blue-500 hover:text-blue-700"
        >
          harshdana1@gmail.com{" "}
        </Link>
        <p className="text-blue-500 pl-7">@harshyadav1</p>
      </div>
    </div>
  </section>
);

export default ContactSection;
