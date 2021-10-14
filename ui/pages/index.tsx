import { useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const handleWave = useCallback(() => {}, []);

  return (
    <div className="container mx-auto">
      <Head>
        <title>Wave Portal</title>
        <meta
          name="description"
          content="_buildspace project completed as part of the deneb cohort"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-2xl font-bold my-8">👋 Hello there!</h1>
        <p className="text-lg text-gray-500 mb-4">
          I am an Engineer <a href="https://www.mural.co/">@MURAL</a>{" "}
          living/working remotely from Costa Rica. 🇨🇷
        </p>
        <p className="text-md text-gray-500 mb-4">
          Connect your Ethereum wallet and wave at me!
        </p>
        <button
          className="px-4 py-2 rounded bg-gray-100 text-gray-500 hover:bg-indigo-700 hover:text-white"
          onClick={handleWave}
        >
          Wave at me
        </button>
      </main>
    </div>
  );
};

export default Home;
