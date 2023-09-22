import React, { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";

const ProductGallery = ({ images }) => {
  const [selected, setSelected] = useState(images?.at(0));
  return (
    <Flex class="product-gallery" justify="center" gap="15px">
      <Flex className="product-gallery-sidebar" flexDir="column" gap="8px">
        {images?.slice(0, 9).map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              w="38px"
              h="50px"
              border={`1px rgba(0,0,0,0.2) solid`}
              borderWidth={selected === item ? "1.5px" : "1px"}
              borderColor={
                selected === item ? "primary.500" : "rgba(0,0,0,0.2)"
              }
              borderStyle="solid"
              boxShadow={
                selected === item
                  ? "rgb(44, 191, 108, 0.5) 0px 2px 10px 0px"
                  : "unset"
              }
              objectFit="contain"
              _hover={{ cursor: "pointer" }}
              _active={{ boxShadow: "unset" }}
              onMouseEnter={() => setSelected(item)}
            />
          );
        })}
      </Flex>
      <Image
        src={selected}
        alt="Product Image"
        h="685px"
        w="685px"
        objectFit="contain"
      />
    </Flex>
  );
};

export default ProductGallery;
