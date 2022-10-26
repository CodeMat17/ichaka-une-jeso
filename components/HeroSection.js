import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactUsBtn from "./ContactUsBtn";

const HeroSection = () => {
  const txtColor = useColorModeValue("gray.700", "gray.300");

  // const animSvg = {
  //   hidden: { x: -100, opacity: 0 },
  //   visible: {
  //     x: 0,
  //     opacity: 1,
  //     //   rotate: [0, 10, 0],
  //     transition: { duration: 1, delay: 0.4 },
  //   },
  // };

  const animBigText = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 3,
        delay: 0.4,
      },
    },
  };

  const animMidText = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 3,
        delay: 0.6,
      },
    },
  };
  const animSmallText = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 3,
        delay: .8,
      },
    },
  };

  const animButton = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      // rotate: [0, 10, 0],
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 3,
        delay: 1,
      },
    },
  };

  return (
    <Flex
      as={motion.div} id='home'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ staggerChildren: 0.6 }}
      pos='relative'
      maxW='6xl'
      mx='auto'>
      <Box
        as={motion.div}
        pos='absolute'
        top={[12, 48]}
        left={[6, 12, 24]}
        zIndex='40'>
        <Heading
          as={motion.div}
          variants={animBigText}
          size={["2xl", "3xl"]}
          textShadow='0 0 20px black'
          color='tomato'>
          ICHAKAUNE JESO
        </Heading>
        <Text
          as={motion.div}
          variants={animMidText}
          textShadow='0 0 20px black'
          fontSize={["2xl", "4xl", "5xl"]}
          fontWeight='semibold'>
          Traditional & Highlife Music
        </Text>
        <Text
          as={motion.div}
          variants={animSmallText}
          fontSize={["xl", "2xl"]}
          color={txtColor}
          textShadow='0 0 20px black'>
          Show-Biz
        </Text>
        <Box as={motion.div} variants={animButton}>
          <Text pt='8' pb='2' fontSize='sm' textShadow='0 0 20px white'>
            FOR SPONSORSHIP
          </Text>
          <ContactUsBtn />
        </Box>
      </Box>

      <Spacer />

      <Box
      
        pos='relative'
        w='330px'
        h='550px'>
        <Image
          alt='Izaga'
          src='/izaga/izaga_1.webp'
          priority
          layout='fill'
          objectFit='contain'
        />
      </Box>
    </Flex>
  );
};

export default HeroSection;
