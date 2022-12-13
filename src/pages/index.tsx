import axios from "axios";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const insertUser = async () => {
    await axios.post("/api/item");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <button
        className="mt-4 w-60 rounded-full bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
        onClick={() => insertUser()}
      >
        Insert User
      </button>
    </div>
  );
};

export default Home;
