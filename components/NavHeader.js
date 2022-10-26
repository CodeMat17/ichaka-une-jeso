import { Box, HStack } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import { MobileMenu } from "./menuBtn/MobileMenu";
import LogoComponent from "./LogoComponent";
import { DesktopMenu } from "./menuBtn/DesktopMenu";

const NavHeader = () => {

  return (
    <Box
      as='nav'
      py='3'
      px='4'
      pos='sticky'
      top='0'
      zIndex='60'
      bgGradient='linear(to-r, gray.800, gray.800, red.900)'>
      <HStack maxW='6xl' mx='auto' justify='space-between' align='center'>
        <LogoComponent />
        <HStack spacing='4'>
          <ColorModeToggle />
          <MobileMenu />
          <DesktopMenu />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavHeader;
