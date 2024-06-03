import Image from "next/image";

export const metadata = {
  title: "Arcade Haven Database",
  description: "Get the most up-to-date information on any Arcade Haven user.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-24 bg-black">
      <div className="w-full bg-orange-500 text-white text-center py-2 fixed top-0 z-50">
        This site is currently under development for the new game and is not yet
        available for use.
      </div>
      <div className="absolute top-12 right-4 p-2">
        <a
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="GitHub" width={32} height={32} />
        </a>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mt-20">
        <h1 className="relative text-3xl font-bold text-white mb-8 text-center">
          Arcade Haven Database
        </h1>
        <div className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for a user..."
            className="w-full px-5 py-4 rounded-lg text-center text-white bg-[#0a0a0a] border border-[#242424] focus:outline-none focus:border-gray-500 transition-colors"
            style={{ textAlign: "center" }}
          />
        </div>
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
