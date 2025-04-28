import React, { useState } from "react";
import { Modal, Upload, Select, Button } from "antd";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
import thumbnail from "../../assets/Images/dashboard/tamnailDoc.png";

const { Option } = Select;

interface DocumentEditModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentEditModal: React.FC<DocumentEditModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpload = () => {
    // TODO: handle file and category submission
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      closable={false}
      onCancel={handleCancel}
      className="rounded-lg"
      width={1026}
    >
      {/* header section */}
      <div className="flex justify-between items-center bg-[#4B5320] text-white px-6 py-4 rounded-t-lg">
        <div></div>
        <h2 className="text-lg font-semibold">Add a new Document</h2>
        <CloseCircleOutlined
          onClick={handleCancel}
          className="text-white text-xl cursor-pointer"
        />
      </div>
      {/* uplode file */}
      <div className="px-16">
        <Upload.Dragger
          name="file"
          accept="Image/*"
          multiple={false}
          className="border border-dashed rounded-md "
        >
          <div className="flex justify-center items-center py-16">
            <p className="ant-upload-drag-icon p-1 border rounded-lg w-[162px]">
              <UploadOutlined
                style={{
                  fontSize: "18px",
                  color: "#697B8C",
                  paddingRight: "10px",
                }}
              />
              Click to upload
            </p>
          </div>
          <p className="text-gray-600">
            Click or drag a file in this area to upload
          </p>
        </Upload.Dragger>
      </div>
      {/*document show */}
      <div>
        <div className="flex items-center mx-16 py-5 gap-6 my-5 rounded-lg border px-4">
          <svg
            width="30"
            height="38"
            viewBox="0 0 30 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00072 24.0244C7.65572 24.0244 7.42322 24.0582 7.30322 24.0919V26.3007C7.44572 26.3344 7.62385 26.3438 7.86947 26.3438C8.7676 26.3438 9.32072 25.89 9.32072 25.1232C9.32072 24.4369 8.84447 24.0244 8.00072 24.0244ZM14.5388 24.0469C14.1638 24.0469 13.9201 24.0807 13.7757 24.1144V29.0082C13.9201 29.0419 14.1526 29.0419 14.3626 29.0419C15.8945 29.0532 16.892 28.2094 16.892 26.4244C16.9032 24.8682 15.9938 24.0469 14.5388 24.0469Z"
              fill="#4B5320"
            />
            <path
              d="M18.75 0.25H3.75C2.75544 0.25 1.80161 0.645088 1.09835 1.34835C0.395088 2.05161 0 3.00544 0 4V34C0 34.9946 0.395088 35.9484 1.09835 36.6516C1.80161 37.3549 2.75544 37.75 3.75 37.75H26.25C27.2446 37.75 28.1984 37.3549 28.9016 36.6516C29.6049 35.9484 30 34.9946 30 34V11.5L18.75 0.25ZM10.3088 26.8562C9.72937 27.4 8.87437 27.6437 7.87875 27.6437C7.68567 27.6474 7.49259 27.6361 7.30125 27.61V30.2837H5.625V22.9037C6.38151 22.7912 7.14586 22.7398 7.91062 22.75C8.955 22.75 9.6975 22.9487 10.1981 23.3481C10.6744 23.7269 10.9969 24.3475 10.9969 25.0787C10.995 25.8137 10.7513 26.4344 10.3088 26.8562ZM17.4469 29.3969C16.6594 30.0512 15.4613 30.3625 13.9969 30.3625C13.1194 30.3625 12.4987 30.3062 12.0769 30.25V22.9056C12.8337 22.7956 13.5978 22.7435 14.3625 22.75C15.7819 22.75 16.7044 23.005 17.4244 23.5487C18.2025 24.1262 18.69 25.0469 18.69 26.3687C18.69 27.7994 18.1669 28.7875 17.4469 29.3969ZM24.375 24.1937H21.5025V25.9019H24.1875V27.2781H21.5025V30.2856H19.8038V22.8062H24.375V24.1937ZM18.75 13.375H16.875V4L26.25 13.375H18.75Z"
              fill="#4B5320"
            />
          </svg>

          <p className=" text-black font-normal font-roboto ">Document 1.pdf</p>
        </div>
      </div>
      {/* title input */}
      <div className="px-16">
        <label className="font-semibold font-roboto text-base text-[#000000]">
          Title
        </label>
        <Input
          placeholder="Document 1"
          className="p-3 border-none bg-[#F0F0F0]"
        />
      </div>

      <div className=" bg-white rounded-b-lg space-y-5 p-16">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-black text-base font-popping">
              Thumbnail
            </h1>
            <div className="relative">
              <img src={thumbnail} alt="" />
              <Button className="text-[#043249] font-popping text-lg font-medium absolute top-2 right-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.71 4.04104C18.1 3.65104 18.1 3.00104 17.71 2.63104L15.37 0.291035C15 -0.0989648 14.35 -0.0989648 13.96 0.291035L12.12 2.12104L15.87 5.87104M0 14.251V18.001H3.75L14.81 6.93104L11.06 3.18104L0 14.251Z"
                    fill="#043249"
                  />
                </svg>
                Edit
              </Button>
            </div>
          </div>
          {/* Thumbnail */}
          <div className="space-y-4 flex-1 ">
            <p className="font-popping font-medium text-lg text-black text-start pl-14 pb-2">
              Category
            </p>
            {/* Document Type  */}
            <div className=" pl-14">
              <Select
                placeholder="Select category"
                className="w-full bg-[#F0F0F0]"
                size="large"
              >
                <Option value="payscales">PayScale’s</Option>
                <Option value="binder">Binder</Option>
                <Option value="slicks">Slicks</Option>
                <Option value="career_progress_sheets">
                  Career Progress Sheets
                </Option>
                <Option value="agreements_examples">Agreements Examples</Option>
                <Option value="basafasa_information">
                  BASAFASA Information
                </Option>
                <Option value="blitz_trips">Blitz Trips</Option>
                <Option value="incentives">Incentives</Option>
                <Option value="playbook">Playbook</Option>
              </Select>
            </div>
            {/* Image Preview Section */}
          </div>
        </div>
        {/* Catagory input fild*/}

        <Button
          type="primary"
          className="w-full bg-[#4B5320] hover:bg-[rgb(61,67,24)] text-white mt-4"
          size="large"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </div>
    </Modal>
  );
};

export default DocumentEditModal;
