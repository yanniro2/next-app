import React from "react";
import Link from "next/link";
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
        <form action="" className="flex flex-col gap-[1rem] pt-[1rem]">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="add topic"
            className="capitalize border border-gray-200 w-full p-3 "
          />
          <input
            type="text"
            name="dec"
            id="dec"
            placeholder="add Description"
            className="capitalize border border-gray-200 w-full p-3 "
          />

          <button type="submit" className="p-3 bg-green-600 text-white w-fit">
            Add
          </button>
        </form>
      </main>
    </div>
  );
};

export default page;
