import React from "react";
import Header from "../../../components/header";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
export default function signin({ providers }) {
  return (
    <>
      <Header display="none"/>
      <div className="flex justify-center items-center h-screen w-full">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex w-96 flex-col justify-center items-center">
            <Image src={"/google-logo.png"} width={400} height={400} alt="googleicon"/>
            <p className="text-white font-sans">This website is created for learning purposes</p>
            <button className="py-2 border p-2 rounded-lg bg-red-500 my-5 text-white shadow-sm shadow-slate-500" onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
