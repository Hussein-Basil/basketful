import React from "react";
import RequireAuth from "../components/RequireAuth";
import AdminNavbar from "./AdminNavbar";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

const Body = styled.body`
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  padding: 3rem calc(100% - 1500px);
  padding-bottom: 0;
`;

const AdminLayout = () => {
  return (
    <Box>
      <AdminNavbar />
      <Main>
        <RequireAuth allowedRoles={"admin"} />
      </Main>
    </Box>
  );
};

export default AdminLayout;
