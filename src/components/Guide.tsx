import { Box, Button, styled, Typography } from '@mui/material';
import buyIcon from '../assets/media/buy_icon.png';
import sellIcon from '../assets/media/sell_icon.png';
import rentIcon from '../assets/media/rent_icon.png';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from './CustomButton';
import Image from 'next/image';

const CustomBox = styled(Box)(({ theme }) => ({
  width: '30%',
  [theme.breakpoints.down('md')]: {
    width: '85%',
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '70%',
  margin: theme.spacing(5, 0),
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    marginBottom: 0,
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(2, 0),
  },
}));

const Guide = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '5%',
          height: '5px',
          backgroundColor: '#000339',
          margin: '0 auto',
        }}
      />

      <Typography
        variant="h3"
        sx={{ fontSize: '36px', fontWeight: 'bold', color: '#000339', my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#5A6473',
            textAlign: 'center',
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </CustomBox>
      <GuidesBox>
        <GuideBox>
          <Image src={buyIcon} alt="buy icon" />
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, fontSize: '20px', color: '#3B3C45', my: 1 }}
          >
            Buying Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              How to buy
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>
        <GuideBox>
          <Image src={rentIcon} alt="rent icon" />
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, fontSize: '20px', color: '#3B3C45', my: 1 }}
          >
            Renting Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              How to rent
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>
        <GuideBox>
          <Image src={sellIcon} alt="sell icon" />
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, fontSize: '20px', color: '#3B3C45', my: 1 }}
          >
            Selling Guides
          </Typography>
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', fontSize: '14px', color: '#0689FF' }}
            >
              How to sell
            </Typography>
            <ArrowRightAltIcon style={{ color: '#0689FF' }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="See Full Guides"
        guideBtn={true}
      />
    </Box>
  );
};

export default Guide;
