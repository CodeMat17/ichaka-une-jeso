import { AspectRatio, Box, Button } from "@chakra-ui/react";


const VidPixCard = ({ url }) => {
  return (
    <Box pos='relative' rounded='lg' overflow='hidden'>
      <AspectRatio maxW='md' ratio={4 / 3}>
        <iframe
          title='naruto'
          src={url}
          allowFullScreen
        />
      </AspectRatio>
    </Box>
  );
};

export default VidPixCard;
