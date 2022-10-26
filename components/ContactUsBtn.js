import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'
const ContactUsBtn = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        size='lg'
        bg='tomato'
        textShadow='0 0 20px black'
        shadow='lg'>
        CONTACT US
      </MenuButton>
      <MenuList>
        <MenuItem as='a' href='https://wa.me/+22506773596' target='_blank'>
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
  );
};

export default ContactUsBtn;
