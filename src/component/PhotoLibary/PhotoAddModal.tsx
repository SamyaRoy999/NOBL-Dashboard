import React from "react";
import { Modal, Upload, Select, Button } from "antd";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

interface PhotoAddModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoAddModal: React.FC<PhotoAddModalProps> = ({
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
      width={600}
    >
      <div className="flex justify-between items-center bg-[#4B5320] text-white px-6 py-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">Add a new Photo</h2>
        <CloseCircleOutlined
          onClick={handleCancel}
          className="text-white text-xl cursor-pointer"
        />
      </div>

      <div className="px-6 py-6 bg-white rounded-b-lg space-y-5">
        <div className="space-y-2">
          <label className="font-semibold text-base text-black">Category</label>
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
            <Option value="basafasa_information">BASAFASA Information</Option>
            <Option value="blitz_trips">Blitz Trips</Option>
            <Option value="incentives">Incentives</Option>
            <Option value="playbook">Playbook</Option>
          </Select>
        </div>
        <Upload.Dragger
          name="file"
          multiple={false}
          className="border border-dashed rounded-md"
        >
          <div className="flex justify-center items-center ">
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

        <Button
          type="primary"
          className="w-full bg-[#4B5320] hover:bg-[#3d4318] text-white mt-4"
          size="large"
          onClick={handleUpload}
        >
          Upload
        </Button>
      </div>
    </Modal>
  );
};

export default PhotoAddModal;
