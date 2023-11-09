import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
const Topic = () => {
  return (
    <div className="w-full flex items-start justify-between p-3 rounded shadow">
      <div>
        <h1 className="font-semibold">Title</h1>
        <p>Details</p>
      </div>
      <div className="flex p-3 text-2xl gap-[1rem]">
        <button>
          <AiTwotoneDelete />
        </button>
        <Link href={"/crud/editTopic"}>
          <FaEdit />
        </Link>
      </div>
    </div>
  );
};

export default Topic;
