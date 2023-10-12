"use client";
import { useEffect } from "react";
import { getGroupById, getChats } from "./services/push";
import { ethers } from "ethers";
export default function Home() {
  async function fetchChats() {
    const signer = fetchSigner();
    const chats = await getChats(signer, "chats", null);

    console.log(chats);
  }

  function fetchSigner() {
    const signer = new ethers.Wallet("");

    return signer;
  }

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      <header className="px-8 py-4 bg-[#0544C4] flex">
        <div className="flex-1">ApeMeet</div>
        <div>
          <button className="bg-[#181a1b] px-4 py-2 rounded-md border-2 border-white">
            Connect Wallet
          </button>
        </div>
      </header>
      <main className="px-8 py-4 flex flex-wrap">
        <article className="w-3/4">
          <section>
            <h2 className="text-2xl mb-2">Events</h2>
          </section>
          <section>
            <div className="flex flex-wrap">
              <div className="w-1/3 px-4 border rounded-lg">
                <h3 className="text-xl">Fun with the team</h3>
                <p>Today at 8:00</p>
                <a href="#" className="text-[#0544C4]">
                  Join
                </a>
              </div>
            </div>
          </section>
        </article>
        <aside className="w-1/4">
          <section>
            <h2 className="text-2xl mb-2">Trending</h2>
          </section>
        </aside>
      </main>
      <footer></footer>
    </>
  );
}
