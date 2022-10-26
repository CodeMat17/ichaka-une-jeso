import {motion} from 'framer-motion'
import { Box, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {

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
        duration: 2, delay: 0.4
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
    <Box
      as={motion.div} id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.6}}
      maxW='xl'
      mx='auto'
      px='6'
      py='16'>
      <Heading size='2xl' textAlign='center' maxW='sm' mx='auto'>
        About Us
      </Heading>
      <Text as={motion.div} variants={animText1} pt='12'>
        ICHAKAUNE JESO INTERNATIONAL MUSICAL GROUP is a trditional and highlife
        musical group that promotes the Igbo culture and tradition, mostly of
        NKANU OGWUGWUEZE ACIENT KINGDOM and we cover events in any part of the
        world.
      </Text>
      <Text as={motion.div} variants={animText2} pt='6'>
        The C.E.O of the musical group is Victor Chidiebere Ogowa who has been
        awarded the best IGBO TRADITIONAL HIGHLIFE ARTIST OF 2019 ABIDJAN, CÔTÉ
        D'IVOIRE by FabKin Media in conjunction with Paul Concept. HE was also
        awarded by the Youth of Nomeh Unateze in conjunction with the Department
        of POCACOV as THE ODOZIOBODO (PEACE AMBASSADOR) 1 OF NOMEH UNATEZE.
      </Text>
      <Text as={motion.div} variants={animText3} pt='6'>
        The musical group organises an annual traditional music festival on
        every 1st of January at Obodoeze, Imeama Mkpumaonu in Nomeh Unateze,
        Nkanu LGA of Enugu State. It is always a colourful event where different
        artist from far and wide performs, different cultural music and dace
        group gathers and ofcourse, a host of masquerades to make the show an
        memorable.
      </Text>
    </Box>
  );
};

export default AboutUs;
