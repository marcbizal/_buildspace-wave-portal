import type { NextPage } from "next";
import Head from "next/head";
import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../helpers/connector";
import { Button } from "../components/button";

const Home: NextPage = () => {
  const { active, activate } = useWeb3React();

  const handleWave = async () => {};
  const handleConnect = async () => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      console.error("There was an error connecting your wallet:", error);
    }
  };

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
        <div className="space-x-2">
          <Button onClick={handleWave}>Wave at me</Button>
          {!active && <Button onClick={handleConnect}>Connect wallet</Button>}
        </div>
      </main>
    </div>
  );
};

export default Home;
