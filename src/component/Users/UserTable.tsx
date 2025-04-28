import React, { useState } from "react";
import { Table, Button, Space, Image, Popconfirm, message, Modal } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { PopconfirmProps } from "antd";
import userPageAvater from "../../assets/Images/dashboard/userPageAvater.png";
import profileImg from "../../assets/Images/dashboard/profile.png";
const UserTable: React.FC = () => {
  // delete modal
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  // delete modal end

  const columns = [
    {
      title: "Sl. no.",
      dataIndex: "serial",
      key: "serial",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "Name",
      render: (name: any) => (
        <Space>
          <Image width={40} src={name.thumbnail} alt="thumbnail" />
          <span>{name.title}</span>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          {/* view button */}
          <div onClick={showModal}>
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="37" height="37" rx="5" fill="#FFF3EB" />
              <path
                d="M18 15.8C17.132 15.8 16.2996 16.1371 15.6858 16.7373C15.0721 17.3374 14.7273 18.1513 14.7273 19C14.7273 19.8487 15.0721 20.6626 15.6858 21.2627C16.2996 21.8629 17.132 22.2 18 22.2C18.868 22.2 19.7004 21.8629 20.3142 21.2627C20.9279 20.6626 21.2727 19.8487 21.2727 19C21.2727 18.1513 20.9279 17.3374 20.3142 16.7373C19.7004 16.1371 18.868 15.8 18 15.8ZM18 24.3333C16.5534 24.3333 15.166 23.7714 14.1431 22.7712C13.1201 21.771 12.5455 20.4145 12.5455 19C12.5455 17.5855 13.1201 16.229 14.1431 15.2288C15.166 14.2286 16.5534 13.6667 18 13.6667C19.4466 13.6667 20.834 14.2286 21.8569 15.2288C22.8799 16.229 23.4545 17.5855 23.4545 19C23.4545 20.4145 22.8799 21.771 21.8569 22.7712C20.834 23.7714 19.4466 24.3333 18 24.3333ZM18 11C12.5455 11 7.88727 14.3173 6 19C7.88727 23.6827 12.5455 27 18 27C23.4545 27 28.1127 23.6827 30 19C28.1127 14.3173 23.4545 11 18 11Z"
                fill="#F96D10"
              />
            </svg>
          </div>
          {/* delete button */}
          <div>
            <Popconfirm
              title="Are you sure to delete this user ?"
             
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="37" height="37" rx="5" fill="#FFE6E6" />
                <path
                  d="M23 16V26H15V16H23ZM21.5 10H16.5L15.5 11H12V13H26V11H22.5L21.5 10ZM25 14H13V26C13 27.1 13.9 28 15 28H23C24.1 28 25 27.1 25 26V14Z"
                  fill="#FF0000"
                />
              </svg>
            </Popconfirm>
          </div>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      serial: "001",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 1",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "2",
      serial: "002",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 2",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "3",
      serial: "003",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 3",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "4",
      serial: "004",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 4",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "5",
      serial: "005",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 5",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "6",
      serial: "006",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 6",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
    {
      key: "7",
      serial: "007",
      name: {
        thumbnail: userPageAvater,
        title: "Training Video Part 7",
      },
      email: "example@gmail.com",
      address: "Dhaka, Bangladesh",
    },
  ];
  // view modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // view modal end
  return (
    <>
      <Table
        columns={columns}
        rowClassName={() => "table-row-gap"}
        className="custom-ant-table"
        dataSource={data}
        pagination={true}
        
      />
      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center space-y-4 px-9 py-10">
          {/* Profile Picture */}
         
            <img
              src={profileImg}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            <h3 className="font-roboto pb-10 font-medium text-[20px] text-[#000000]">
              Md. Abid Hasan
            </h3>
   

          {/* Info Section */}
          <div className="w-full space-y-4 text-base mb-14">
            <div className="flex justify-between">
              <span className="font-normal text-[#000000]">Email:</span>
              <span className="text-[#000000] font-semibold">
                example@gmail.com
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal text-[#000000]">Username:</span>
              <span className="text-[#000000] font-semibold">example</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal text-[#000000]">Badge Number:</span>
              <span className="text-[#000000] font-semibold">74857435</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal text-[#000000]">Address:</span>
              <span className="text-[#000000] font-semibold">
                Dhaka, Bangladesh.
              </span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleCancel}
            className="addClass w-full bg-[#4a5320] text-white py-3 rounded-md font-semibold hover:bg-[#3a4219]"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UserTable;
