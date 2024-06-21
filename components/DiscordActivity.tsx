"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const DiscordActivity = () => {
  const [discordStatus, setDiscordStatus] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [avatarId, setAvatarId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(
          "https://api.lanyard.rest/v1/users/889586166221926410"
        );
        const data = await response.json();

        if (data.success) {
          setDiscordStatus(data.data.discord_status);
          setUserId(data.data.discord_user.id);
          setAvatarId(data.data.discord_user.avatar);
          setUsername(data.data.discord_user.username);
        } else {
          console.error("Failed to fetch Discord status");
        }
      } catch (error) {
        console.error("Error fetching Discord status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordStatus();

    const intervalId = setInterval(fetchDiscordStatus, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setDiscordStatus, setUserId, setAvatarId, setUsername, setLoading]);

  const currentTime = new Date();

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-center max-w-md">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center font-other gap-2">
          Activity <span className="text-blue-500 font-other">: Discord</span>
        </h2>
        <div className="flex items-center p-3 rounded-lg gap-4 mb-8">
          <div className="animate-pulse w-16 h-16 bg-gray-700/10 rounded-full" />
          <div className="ml-4">
            <h4 className="text-xl font-other gap-2">Fetching...</h4>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:ml-10 items-start md:items-center justify-center text-center max-w-md">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center font-other gap-2">
        Activity <span className="text-blue-500 font-other">: Discord</span>
      </h2>
      <div className="flex items-start md:items-center pt-3 md:p-3 rounded-lg gap-4 mb-8">
        <div className="relative">
          <div
            className={`absolute inset-0 animate-pulse w-20 h-20 bg-gray-700/10 rounded-full ${
              imageLoaded ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            width={70}
            height={70}
            src={`https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`}
            alt="Discord Profile"
            className={`w-20 h-20 rounded-md transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-other gap-2">
            @{username || "Fetching..."}
          </h4>
          <p className="text-lg text-slate-300 font-other text-start">
            {discordStatus || "Fetching..."}
          </p>
          <p className="text-sm text-gray-400 font-other flex items-center gap-2">
            {formatTime(currentTime)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscordActivity;
