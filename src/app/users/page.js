import React from "react";
import UserCard from "@/components/card/UserCard";
import { BASE_URL } from "@/utils/constant";

async function fetchUsers() {
  const users = await fetch(`${BASE_URL}users?limit=8`, {
    cache: "no-store",
  });
  return await users.json();
}

const UserPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <h1 className="pb-[60px] max-sm:pb-[30px] text-[40px] max-sm:text-[26px]">
        Users
      </h1>
      <div className="flex flex-wrap justify-center gap-x-6 lg:gap-x-20 max-lg:gap-x-12 ">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={user.name}
            role={user.role}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
