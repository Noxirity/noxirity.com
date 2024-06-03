"use client";

import Image from "next/image";
import Stars from "../components/stars";
import { useState, useEffect } from "react";

export default function Home() {
  const [hasBanner, setHasBanner] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(""); // State to manage error messages

  useEffect(() => {
    setHasBanner(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    if (!searchTerm) {
      setError("The search functionality is not enabled yet."); // Set error message
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-24 bg-black">
      <Stars count={50} />
      {hasBanner && (
        <div className="w-full bg-orange-500 text-white text-center py-2 fixed top-0 z-50">
          This site is currently under development for the new game and is not
          yet available for use.
        </div>
      )}
      <div className={`absolute ${hasBanner ? "top-16" : "top-4"} right-4 p-2`}>
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="GitHub" width={32} height={32} />
        </a>
      </div>
      <div
        className={`relative flex flex-col items-center justify-center w-full max-w-4xl ${
          hasBanner ? "mt-24" : "mt-12"
        } px-4`}
      >
        <h1 className="relative text-3xl font-bold text-white mb-8 text-center">
          Arcade Haven Database
        </h1>
        <form onSubmit={handleSearch} className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a user..."
            className={`w-full px-5 py-4 rounded-lg text-center text-white bg-[#0a0a0a] border ${
              searchTerm && error ? "border-red-500" : "border-[#242424]"
            } focus:outline-none ${
              !error && "focus:border-gray-500"
            } transition duration-300 ease-in-out`}
            style={{ textAlign: "center" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() =>
              setError("The search functionality is not enabled yet.")
            }
          />

          <p
            className={`mt-2 text-sm text-red-500 text-center transition-opacity duration-300 ease-in-out ${
              searchTerm && error ? "opacity-100" : "opacity-0"
            }`}
          >
            {searchTerm && error ? error : ""}
          </p>
        </form>
        <p className="mt-4 text-sm text-gray-400 text-center">
          Get the most up to date information on any Arcade Haven user.
        </p>
      </div>
      <footer className="mt-12 w-full text-center text-sm text-gray-500">
        © 2024 Noxirity LLC |{" "}
        <a href="/tos" className="text-blue-500 hover:text-blue-600">
          Terms of Service
        </a>{" "}
        |{" "}
        <a href="/privacy" className="text-blue-500 hover:text-blue-600">
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}
