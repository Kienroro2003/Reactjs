import React from "react";
import { useAuth } from "./context/auth-context";
import { useGallery } from "./context/gallery-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  useGallery();
  console.log("HeaderMain ~ user", user);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Welcome back! <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium">Welcome</span>
      )}
      <button
        className="p-2 ml-auto text-black bg-gray-300 rounded-md"
        onClick={() => setUser(null)}
      >
        Sign out
      </button>
    </div>
  );
};

export default HeaderMain;
