import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const ProductLayout = ({ children }) => {
  return (
    <Flex className="product-layout" flexDir="column" gap="60px">
      <Breadcrumb className="current-path">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {children}
    </Flex>
  );
};

export default ProductLayout;
