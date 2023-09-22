import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://basketful.onrender.com/api/user").then((res) => res.json()),
  });

  
  return (
    <section>
      {users?.map((user) => (
        <p>{user.username}</p>
      ))}
    </section>
  );
};

export default Users;
