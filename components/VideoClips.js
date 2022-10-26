import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import VideoClipCard from "./VideoClipCard";

const videoClip = [
  { id: 1, url: "https://www.youtube.com/embed/VJPQU8mfH5Y" },
  { id: 2, url: "https://www.youtube.com/embed/zdK46nZYwsA" },
  { id: 3, url: "https://www.youtube.com/embed/1sKHwC7Ydo4" },
  { id: 4, url: "https://www.youtube.com/embed/jYg8S1hgnK8" },
  { id: 5, url: "https://www.youtube.com/embed/uSlYvIvqnb0" },
];

const VideoClips = () => {
  return (
    <Box id='videos' maxW='6xl' mx='auto' px={[2, 4, 6]} py='16'>
      <Heading size='2xl' textAlign='center' maxW='sm' mx='auto'>
        Previous Event Video Clips
      </Heading>

      <SimpleGrid columns={[1, 2, 2, 3]} spacing='40px' mt='12'>
        {videoClip.map((clip) => (
          <VideoClipCard key={clip.id} {...clip} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default VideoClips;
