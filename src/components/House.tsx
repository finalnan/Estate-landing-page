import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Image from 'next/image';

import { Property } from '@/constant/properties';

import bedroomsIcon from '../assets/media/bedroomsIcon.png';
import bathroomsIcon from '../assets/media/bathroomsIcon.png';
import spaceIcon from '../assets/media/spaceIcon.png';

const HouseBox = styled(Box)(({ theme }) => ({
  maxWidth: 350,
  backgroundColor: '#fff',
  margin: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    margin: theme.spacing(2, 0),
  },
}));

const InfoBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ImgContainer = styled(Box)(() => ({
  width: '100%',
}));

const House: FC<Property> = ({
  img,
  price,
  address,
  bedrooms,
  bathrooms,
  space,
}) => {
  return (
    <HouseBox>
      <ImgContainer>
        <Image src={img} alt="house photo" style={{ maxWidth: '100%' }} />
      </ImgContainer>
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          ${price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          ${address}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <InfoBox>
            <Image src={bedroomsIcon} alt="bedroom" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {bedrooms}
            </Typography>
          </InfoBox>
          <InfoBox>
            <Image src={bathroomsIcon} alt="bathroom" />

            <Typography variant="body2" sx={{ mt: 1 }}>
              {bathrooms}
            </Typography>
          </InfoBox>
          <InfoBox>
            <Image src={spaceIcon} alt="space" />

            <Typography variant="body2" sx={{ mt: 1 }}>
              {space}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </HouseBox>
  );
};

export default House;
