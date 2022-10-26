import { Box, Heading, Text } from "@chakra-ui/react";
import {motion} from 'framer-motion'

const Updates = () => {

  const animText1 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 2,
      },
    },
  };
  const animText2 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 2,
        delay: 0.4,
      },
    },
  };

  const animText3 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: "0.4",
        duration: 2,
        delay: 0.6,
      },
    },
  };

  return (
    <Box id='updates'
      maxW='xl'
      mx='auto'
      px='6'
      py='16'
      as={motion.div}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.6 }}>
      <Heading size='2xl' textAlign='center' maxW='sm' mx='auto'>
        2023 Ichaka-Une Jeso Event Update
      </Heading>
      <Text as={motion.div} variants={animText1} pt='12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
        facilis facere tempore hic assumenda laudantium fugit quaerat eum
        soluta! Lorem, consectetur adipisicing elit. Autem placeat facilis
        facere tempore hic assumenda laudantium fugit quaerat eum soluta!
      </Text>
      <Text as={motion.div} variants={animText2} pt='6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
        facilis facere tempore hic assumenda laudantium fugit quaerat eum
        soluta! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
        placeat .
      </Text>
      <Text as={motion.div} variants={animText3} pt='6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem placeat
        facilis facere tempore hic assumenda laudantium fugit quaerat eum
        soluta! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
        placeat facilis facere tempore hic assumenda laudantium fugit quaerat
        eum soluta! Lorem, ipsum re tempore hic assumenda laudantium fugit
        quaerat eum soluta!
      </Text>
    </Box>
  );
};

export default Updates;
