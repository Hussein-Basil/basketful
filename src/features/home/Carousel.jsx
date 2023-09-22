import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ image }) => {
  return (
    <Image
      display="inline-flex"
      src={image}
      width="100vw"
      minHeight="200px"
      objectFit="cover"
    />
  );
};

export const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setActiveIndex(items.length - 1);
    } else if (newIndex >= items.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newIndex);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const responsiveImage = useBreakpointValue({
    base: "mobileImage",
    lg: "image",
  });

  return (
    <Box
      className="carousel-container"
      position="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      overflow="hidden"
      marginBottom="-8px"
      {...handlers}
    >
      <Box
        transform={`translateX(-${activeIndex * 100}%)`}
        transition="transform 0.3s"
        whiteSpace="nowrap"
      >
        {items.map((item, index) => {
          return <CarouselItem key={index} image={item[responsiveImage]} />;
        })}
      </Box>
      <Button
        className="carousel-control-left"
        m={3}
        position="absolute"
        top="50%"
        transform="translateY(-100%)"
        left="0px"
        width="auto"
        p="16px"
        color="primary.500"
        opacity="0.6"
        fontWeight="bold"
        fontSize="28px"
        transition="0.6s ease"
        borderRadius="3px 0 0 3px"
        userSelect="none"
        bg="none"
        _active={{ bg: "none" }}
        _hover={{ bg: "none" }}
        onClick={() => updateIndex(activeIndex - 1)}
      >
        &#10094;
      </Button>
      <Button
        className="carousel-control-right"
        m={3}
        position="absolute"
        top="50%"
        transform="translateY(-100%)"
        right="0"
        bg="none"
        opacity="0.6"
        _active={{ bg: "none" }}
        _hover={{ bg: "none" }}
        width="auto"
        p="16px"
        color="primary.500"
        fontWeight="bold"
        fontSize="28px"
        transition="0.6s ease"
        borderRadius="0 3px 3px 0"
        userSelect="none"
        onClick={() => updateIndex(activeIndex + 1)}
      >
        &#10095;
      </Button>
      <Flex
        className="pagination"
        justifyContent="center"
        position="absolute"
        bottom={{ sm: "-6px", md: "13px" }}
        left="50%"
        transform="translateX(-50%)"
        gap="5px"
      >
        {items.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                updateIndex(index);
              }}
              bg="none"
              _active={{ bg: "none" }}
              _hover={{ bg: "none" }}
              color={index === activeIndex ? "white" : "unset"}
              p="0"
              minW="12px"
            >
              <Box
                h="12px"
                w="12px"
                bg={index === activeIndex ? "primary.500" : "primary.100"}
                borderRadius="50%"
                marginBottom="12px"
                display="inline-block"
                transition="background-color 0.3s ease"
              />
            </Button>
          );
        })}
      </Flex>
    </Box>
  );
};
