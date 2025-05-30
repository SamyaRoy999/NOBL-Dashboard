import { DownOutlined } from "@ant-design/icons";
import { Divider, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import VideosTable from "../component/videos/VideosTable";
import VideoModal from "../component/videos/VideoModal";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  // categories
  const categories = [
    "All",
    "Welcome to NOBL",
    "Introduction",
    "Key to success in this industry",
    "Door approach / Pitch",
    "Transitioning",
    "Building Value",
    "Qualify Questions",
    "Buying Atmosphere",
    "Amply Value",
    "Drop Price / Compare Price",
    "Closing Lines",
    "Area Management",
    "How to use your IPad Resources",
    "PayScale’s",
    "Binder",
    "Slicks",
    "Career Progress Sheets",
    "Agreements Examples",
    "BASAFASA Information",
    "Blitz Trips",
    "Incentives",
    "Playbook",
  ];

  return (
    <div>
      <div className=" flex justify-between items-center mt-5 mb-[43px]">
        <div className="flex justify-center">
          <input
            type="search"
            className="w-[534px] p-4 border border-[#D9D9D9]"
            placeholder="Search for a video"
            name=""
            id=""
          />
          <button className="bg-[#4b5320] p-[18px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2127 12.3535L9.15493 8.29564C9.78462 7.48158 10.1252 6.48627 10.1252 5.43939C10.1252 4.18627 9.63618 3.01127 8.75181 2.12533C7.86743 1.23939 6.68931 0.751892 5.43774 0.751892C4.18618 0.751892 3.00806 1.24095 2.12368 2.12533C1.23774 3.0097 0.750244 4.18627 0.750244 5.43939C0.750244 6.69095 1.23931 7.86908 2.12368 8.75345C3.00806 9.63939 4.18462 10.1269 5.43774 10.1269C6.48462 10.1269 7.47837 9.78627 8.29243 9.15814L12.3502 13.2144C12.3621 13.2263 12.3763 13.2357 12.3918 13.2422C12.4074 13.2486 12.424 13.2519 12.4409 13.2519C12.4577 13.2519 12.4744 13.2486 12.4899 13.2422C12.5055 13.2357 12.5196 13.2263 12.5315 13.2144L13.2127 12.5347C13.2246 12.5228 13.2341 12.5087 13.2405 12.4931C13.247 12.4776 13.2503 12.4609 13.2503 12.4441C13.2503 12.4272 13.247 12.4106 13.2405 12.395C13.2341 12.3795 13.2246 12.3654 13.2127 12.3535ZM7.91274 7.91439C7.25024 8.57533 6.37212 8.93939 5.43774 8.93939C4.50337 8.93939 3.62524 8.57533 2.96274 7.91439C2.30181 7.25189 1.93774 6.37377 1.93774 5.43939C1.93774 4.50502 2.30181 3.62533 2.96274 2.96439C3.62524 2.30345 4.50337 1.93939 5.43774 1.93939C6.37212 1.93939 7.25181 2.30189 7.91274 2.96439C8.57368 3.62689 8.93774 4.50502 8.93774 5.43939C8.93774 6.37377 8.57368 7.25346 7.91274 7.91439Z"
                fill="white"
              />
            </svg>
          </button>
          {/* Add mamber icon */}
          <button
            onClick={showModal}
            className="font-semibold ml-7 flex items-center gap-6 text-base font-roboto text-white bg-[#4b5320] py-3 px-[63px]"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.07143 11.4286H0.5V8.57143H9.07143V0H11.9286V8.57143H20.5V11.4286H11.9286V20H9.07143V11.4286Z"
                fill="white"
              />
            </svg>
            Add a new video
          </button>
        </div>
        <div>
          <Select
            showSearch
            style={{ width: 363, height: 50 }}
            className="border border-black rounded-md"
            placeholder="Select a category"
            optionFilterProp="children"
            suffixIcon={
              <div className="flex justify-between w-full gap-72">
                <h1 className="text-black">klsdf</h1>
                <DownOutlined style={{ color: "black" }} />
              </div>
            }
          >
            {categories?.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      {/* table */}
      <VideosTable />
      {/* video modal */}
      <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Videos;
