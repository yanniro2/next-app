import React from "react";
import Link from "next/link";
import Topic from "../components/Topic";
const page = () => {
  return (
    <div className="container mx-auto p-5">
      <header className="bg-blue-950 p-3 text-white flex justify-between items-center">
        <Link href={"/crud"}>GT Coding</Link>

        <Link href="/crud/addTopic" className="bg-white p-3 text-blue-950">
          Add topic
        </Link>
      </header>

      <main className="w-full">
        <Topic />
      </main>
    </div>
  );
};

export default page;
