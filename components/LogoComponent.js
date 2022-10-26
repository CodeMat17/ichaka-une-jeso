import { Box } from "@chakra-ui/react";
import Image from "next/image";

const LogoComponent = () => {
  return (
    <Box pos='relative' w='60px' h='60px'>
      <Image
        src='/izaga/logo.webp'
        alt='logo'
        priority
        layout='fill'
        objectFit='contain'
      />
    </Box>
  );
};

export default LogoComponent;
