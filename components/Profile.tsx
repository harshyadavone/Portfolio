"use client";
import React from "react";
import ProfileName from "./ProfileName";
import HoverImage from "./ProfileImage";

const Profile = () => {
  return (
    <>
      <ProfileName />
      <div className="hidden md:block">
        <HoverImage />
      </div>
    </>
  );
};

export default Profile;
