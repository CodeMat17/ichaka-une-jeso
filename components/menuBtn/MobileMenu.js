import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { navLinks } from "../../navLinks";
import LogoComponent from "../LogoComponent";
import NavContactUs from "../NavContactUs";

export const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={{ md: "none" }}>
      <IconButton
        onClick={onOpen}
        color='tomato'
        icon={<HiMenuAlt3 size={32} />}
        isRound
        size='lg'
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <LogoComponent />
          </DrawerHeader>

          <DrawerBody>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                <Button onClick={onClose} w='100%' my='2' variant='ghost'>
                  {link.item}
                </Button>
              </Link>
            ))}
            <NavContactUs />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
