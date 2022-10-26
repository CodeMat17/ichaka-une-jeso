import { AspectRatio, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";

const VidPixCard = ({ link }) => {
  return (
    <Box pos='relative' rounded='lg' overflow='hidden'>
      <AspectRatio maxW='md' ratio={4 / 3}>
        <Image alt='' priority layout='fill' objectFit='cover' src={link} />
      </AspectRatio>

      <Link href='/videos'><a>
      <Button
        pos='absolute'
        right='0'
        bottom='0'
        color='white'
        bg='red'
        leftIcon={<BsFillPlayFill size={20} />}>
        Watch
        </Button>
        </a></Link>
    </Box>
  );
};

export default VidPixCard;
