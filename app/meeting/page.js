"use client";
import { useEffect, useState } from "react";
import { getGroupById, getChats } from "../services/push";
import UserCard from "../components/userCard";
import {
  FaMicrophone,
  FaVideo,
  FaRegHandPaper,
  FaSmile,
  FaDesktop,
  FaClosedCaptioning,
  FaEllipsisV,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Home() {
  async function fetchGroup() {
    const groupId =
      "6ca6ff9a350e22ba1682daa941087a4d4f33d4e8c08998d08c6a86575ae8fbf8";
    const group = await getGroupById(groupId);
    console.log(group);
    setData({ ...data, group });
    return group;
  }

  const [data, setData] = useState({
    title: "People",
    group: {},
  });

  useEffect(() => {
    fetchGroup();
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
      <main className="px-8 py-4 flex flex-wrap my-full">
        <article className="w-3/4">
          <section>
            <div className="flex flex-wrap">
              {data.group?.members?.map((member) => (
                <UserCard
                  user={member}
                  totalUsers={data.group.members.length}
                />
              ))}
            </div>
          </section>
          <section className="relative h-full">
            <div className="absolute bottom-1/4 left-1/2">
              <button className="rounded-full border-2 w-12 h-12 mx-1 bg-red-600">
                <FaMicrophone className="mx-auto" />
              </button>

              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-red-600">
                <FaVideo className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-gray-600">
                <FaClosedCaptioning className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-gray-600">
                <FaSmile className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-gray-600">
                <FaDesktop className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-gray-600">
                <FaRegHandPaper className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-gray-600">
                <FaEllipsisV className="mx-auto" />
              </button>
              <button className="rounded-full border-2 w-12 h-12 mx-1  bg-red-600 ">
                <FaPhoneAlt className="mx-auto rotate-135" />
              </button>
            </div>
          </section>
        </article>
        <aside className="w-1/4">
          <section>
            <h2 className="text-2xl mb-2">{data.title}</h2>
          </section>
          <section>
            <div>{data.group?.members?.map((e) => e.wallet)}</div>
          </section>
        </aside>
      </main>
      <footer></footer>
    </>
  );
}
