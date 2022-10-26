import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import VidPixCard from "./VidPixCard";

const vidPix = [
  { id: 1, link: "/vid-pix/vid1.webp" },
  { id: 2, link: "/vid-pix/vid2.webp" },
  { id: 3, link: "/vid-pix/vid3.webp" },
];

const YoutubeLinks = () => {
  return (
    <Box id='videos' maxW='6xl' mx='auto' px='6' py='16'>
      <Heading size='2xl' textAlign='center' maxW='sm' mx='auto'>
        Previous Event Video Clips
      </Heading>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing='40px' mt='12'>
        {vidPix.map((pix) => (
          <VidPixCard key={pix.id} {...pix} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default YoutubeLinks;
