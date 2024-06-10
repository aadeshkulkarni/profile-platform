import { DefaultSession } from "next-auth";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const Profile = ({ user }: { user: DefaultSession["user"] }) => {
  console.log("User: ", user);
  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full  md:shadow-md md:p-12 py-16 md:bg-black text-white md:bg-opacity-10 flex justifyp-center items-center gap-4 flex-col">
        <Image
          src={user?.image || ""}
          alt={user?.email || ""}
          width="124"
          height="124"
          className="rounded-full border border-gray-800 p-2"
        />
        <div>
          <h1 className="text-4xl font-bold text-center py-2">{user?.name}</h1>
          <h1 className="text-md text-center py-2">Travel | Technology</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 w-full">
            <button className="bg-white px-4 py-2 text-black w-full md:w-1/2 rounded-md">
              Link button 1
            </button>
            <button className="bg-white px-4 py-2 text-black w-full md:w-1/2 rounded-md">
              Link button 2
            </button>
          </div>
          <div className="flex justify-center items-center gap-8 py-8">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex justify-center items-center hover:bg-opacity-20">
              <FiTwitter className="w-6 h-6 hover:stroke-gray-200 fill-transparent" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex justify-center items-center hover:bg-opacity-20">
              <FiInstagram className="w-6 h-6 hover:stroke-gray-200 fill-transparent" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex justify-center items-center hover:bg-opacity-20">
              <FiGithub className="w-6 h-6 hover:stroke-gray-200 fill-transparent" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-10 flex justify-center items-center hover:bg-opacity-20">
              <FiInstagram className="w-6 h-6 hover:stroke-gray-200 fill-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
