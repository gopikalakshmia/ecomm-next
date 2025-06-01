"use client";

import Image from "next/image";
import searchImage from "../asset/search.png";
import React, { FormEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchText = formData.get("searchInput")?.toString();
    console.log(searchText);
    if (searchText) {
      router.push(`/list?name=${searchText}`);
    }
  };
  return (
    <form
      className="bg-gray-100 rounded-md flex flex-row p-2 gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-80 bg-gray-100 "
        name="searchInput"
      />
      <button>
        {" "}
        <Image src={searchImage} alt="Search Icon" height={16} width={16} />
      </button>
    </form>
  );
}
