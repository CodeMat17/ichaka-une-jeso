import {Box, AspectRatio} from '@chakra-ui/react'

const VideoClipCard = ({url}) => {
  return (
    <Box rounded='lg' overflow='hidden' >
      <AspectRatio maxW='md' ratio={4 / 3}>
        <iframe
          title='Izaga on Ichaka-une day'
          src={url}
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
}

export default VideoClipCard