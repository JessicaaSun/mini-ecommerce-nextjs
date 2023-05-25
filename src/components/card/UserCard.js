import React from "react";

const UserCard = ({ id, avatar, name, role }) => {
  return (
    <div className="mb-12">
      <img
        src={avatar}
        className="rounded-full h-[190px] w-[190px] object-cover shadow-sm  border-[4px] border-[#3D2698] mx-auto shadow-lg mb-5 "
        alt=""
      />
     
      <h2 className=" mb-2">{name}</h2>
      <h5 className="text-gray-500">{role}</h5>
    </div>
  );
};

export default UserCard;
