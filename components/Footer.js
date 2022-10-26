import {
  Box,
  Divider,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiChatAlt2, HiOutlineMail } from "react-icons/hi";
import LogoComponent from "./LogoComponent";
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <Box
      bgGradient='linear(to-b, gray.900, gray.800, red.800)'
      color='white'
      px='6'
      py='12'>
      <HStack ml='-2'>
        <LogoComponent />
        <VStack spacing='0' align='start' lineHeight='1'>
          <Text fontWeight='bold' fontSize='xl'>
            Ichakaune Jeso
          </Text>
          <Text>Traditional & Highlife Music</Text>
        </VStack>
      </HStack>

      <SimpleGrid columns={[1, 2, 3]} spacing='40px' mt='6'>
        <VStack align='start'>
          <Text fontWeight='semibold'>Follow Us</Text>
          <HStack spacing='4'>
            <IconButton
              as='a'
              href='https://www.youtube.com/channel/UCsJF4Dck9VfIk0q7zx6NZKw'
              target='_blank'
              size='lg'
              icon={<BsYoutube size={30} color='red' />}
              isRound
            />
            <IconButton
              as='a'
              href='https://www.facebook.com/profile.php?id=100047382772700'
              target='_blank'
              size='lg'
              color='facebook.300'
              icon={<FaFacebookF size={30} />}
              isRound
            />

            <IconButton
              as='a'
              href='https://www.instagram.com/ichakaunejeso/'
              target='_blank'
              size='lg'
              color='tomato'
              icon={<BsInstagram size={30} />}
              isRound
            />

            {/*  */}
          </HStack>
        </VStack>

        <VStack align='start'>
          <Text fontWeight='semibold'>Contact Us</Text>

          <Menu>
            <MenuButton
              as={IconButton}
              isRound
              size='lg'
              color='orange'
              icon={<HiChatAlt2 size={30} />}></MenuButton>
            <MenuList>
              <MenuItem
                as='a'
                href='https://wa.me/+22506773596'
                target='_blank'>
                <IconButton
                  icon={<BsWhatsapp size={23} color='green' />}
                  isRound
                  mr='4'
                />{" "}
                <span>Chat with us on WhatsApp</span>
              </MenuItem>
              <MenuItem as='a' href='mailto:izagankanu@gmail.com'>
                <IconButton
                  icon={<HiOutlineMail size={23} color='red' />}
                  isRound
                  mr='4'
                />{" "}
                <span>Send an eMail to us</span>
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </SimpleGrid>
      <Divider my='8' />
      <Text>&copy; 2022 Ichaka-Une Jeso. All rights reserved.</Text>
      <Text color='gray.300'>
        {" "}
        Developed and sponsored  by{" "}
        <Link
          color='blue.400'
          isExternal
          href='https://www.soft-lutions.com.ng'>
          Chukwu Matthew.
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
