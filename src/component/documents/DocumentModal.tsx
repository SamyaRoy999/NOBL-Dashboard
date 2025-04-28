import React, { useState } from "react";
import { Modal, Upload, Select, Button } from "antd";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";

const { Option } = Select;

interface DocumentModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DocumentModal: React.FC<DocumentModalProps> = ({
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
      {/* title input */}
      <div className="px-16">
        <label className="font-semibold font-roboto text-base text-[#000000]">
          Title
        </label>
        <Input
          placeholder="Document 1"
          className="p-2 border-none bg-[#F0F0F0]"
        />
      </div>

      <div className=" bg-white rounded-b-lg space-y-5 p-16">
        <div className="flex justify-between">
          <Upload.Dragger
            name="file"
            accept="Image/*"
            multiple={false}
            className="border border-dashed rounded-md p-16"
          >
            <div className="flex justify-center items-center gap-4">
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

export default DocumentModal;
