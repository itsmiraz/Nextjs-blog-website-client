import DashBoardLayout from "@/Layouts/DashBoardLayout/DashBoardLayout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

type Tag = {
  text: string;
  id: number;
};

const UploadBlog = () => {
  
  // Image State
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<undefined | string>("");

  // Tags State
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagInput, setTagInput] = useState<string>("");

  // Add Tags Functions
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(event.target.value);
  };

  const handleTagAddition = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      const newTag: Tag = {
        text: tagInput.trim(),
        id: tags.length + 1,
      };
      setTags([...tags, newTag]);
      setTagInput("");
    }
  };

  const handleTagRemoval = (id: number) => {
    const updatedTags = tags.filter(tag => tag.id !== id);
    setTags(updatedTags);
  };

  // Add Image Functions
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    } else {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    } else {
      const file = e.target.files[0];
      const fileSizeInBytes = file?.size;
      const fileSizeInMB = fileSizeInBytes ? fileSizeInBytes / 1024 : 0;
      const maxFileSizeInMB = 500;
      if (fileSizeInMB > maxFileSizeInMB) {
        toast.error(`Please upload a photo under ${maxFileSizeInMB}KB`);
      } else {
        setSelectedFile(file);
      }
    }
  };

  return (
    <DashBoardLayout>
      <Head>
        <title>StoryVerse - Upload Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dicnezd6a/image/upload/v1682523173/favicon_oleadq.ico"
        />
      </Head>

      <h1 className="text-2xl font-semibold">Add A New Blog</h1>
      <form className="w-[500px]" action="">
        {/* Upload Image */}
        <div className="flex justify-center my-4 items-center">
          <div className="relative">
            <AiOutlineCloudUpload className="text-9xl text-zinc-700" />
            <input
              type="file"
              className="w-full h-full absolute top-0 left-0 opacity-0"
            />
            <p className="text-xl font-semibold">Upload an Image</p>
          </div>
        </div>
        {/* Title */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Title <span className="text-red-500">*</span>
          </p>
          <input
            required
            className="w-full py-3 rounded-lg my-2 focus:outline-indigo-300 px-4"
            type="text"
          />
        </div>
        {/* Catagory */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Catagory <span className="text-red-500">*</span>
          </p>
          <select className="p-3 w-full focus:outline-indigo-300 my-2 rounded-lg">
            <option disabled>Choose an Option</option>
            <option value={1}>Tech</option>
            <option value={2}>Lifestyle</option>
            <option value={1}>Travel</option>
            <option value={1}>Fashion</option>
            <option value={1}>Sports</option>
          </select>
        </div>
        {/* Description */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Description <span className="text-red-500">*</span>
          </p>
          <textarea
            required
            className="w-full py-3 rounded-lg my-2 h-40 focus:outline-indigo-300 px-4"
          />
        </div>
        {/* Summary */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Summury <span className="text-red-500">*</span>
          </p>
          <textarea
            required
            className="w-full py-3 rounded-lg my-2 h-20 focus:outline-indigo-300 px-4"
          />
        </div>

        {/* Add Conclusion */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Conclusion <span className="text-red-500">*</span>
          </p>
          <textarea
            required
            className="w-full py-3 rounded-lg my-2 h-20 focus:outline-indigo-300 px-4"
          />
        </div>

        {/* Add tags */}
        <div className="my-4 ">
          <p className="font-semibold text-zinc-800 text-xl">
            Tags <span className="text-xs ">(Maximum 10 tags)</span>
          </p>

          <div className="flex flex-wrap items-center  border rounded py-2">
            <div className="flex flex-wrap items-center ">
              {tags.map(tag => (
                <div
                  key={tag.id}
                  className="bg-zinc-200 select-none flex justify-between items-center rounded px-2 m-2 py-1 text-gray-900"
                >
                  <p> {tag.text}</p>
                  <span
                    className="cursor-pointer pl-2"
                    onClick={() => handleTagRemoval(tag.id)}
                  >
                    &times;
                  </span>
                </div>
              ))}
            </div>
            {tags.length < 10 && (
              <input
                type="text"
                id="tag-input"
                className="flex-grow p-3 rounded-lg focus:outline-indigo-300"
                placeholder="Type and press enter to add a tag"
                value={tagInput}
                onChange={handleInputChange}
                onKeyDown={handleTagAddition}
              />
            )}
          </div>
        </div>
      </form>
    </DashBoardLayout>
  );
};

export default UploadBlog;
