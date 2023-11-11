import React from "react";
import Edit from "../../../components/Edit";

const getTopicID = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function page({ params }: any) {
  const { id } = params;
  const { topic } = await getTopicID(id);
  const { title, description } = topic;
  console.log("id:", id);
  return <Edit id={id} title={title} description={description} />;
}
