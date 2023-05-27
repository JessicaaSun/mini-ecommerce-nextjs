import React, { Suspense } from "react";
import UserCard from "@/components/card/UserCard";
import { BASE_URL } from "@/utils/constant";
import Loading from "../loading";

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
      <Suspense fallback={<Loading/>}>
     
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
      </Suspense>
    </div>
  );
};

export default UserPage;
