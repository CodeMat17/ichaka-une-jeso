import { Box, Button, HStack } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import LogoComponent from "./LogoComponent";
import {useRouter} from 'next/router'

const VidNavHeader = () => {
  const router = useRouter()

  return (
    <Box
      as='nav'
      py='3'
      pl='4'
      pos='sticky'
      top='0'
      zIndex='60'
      bgGradient='linear(to-r, gray.800, gray.800, red.900)'>
      <HStack maxW='6xl' mx='auto' justify='space-between' align='center'>
        <LogoComponent />
        <HStack spacing='4'>
          <ColorModeToggle />
          <Button
            onClick={() => router.back()}
            leftIcon={<MdOutlineArrowBackIosNew size={23} />}
            color='tomato'
            size='lg' _hover={{ color: 'red.600'}} variant='ghost'
            rounded='full'>
            Go Back
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default VidNavHeader;
