import { Box, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './Navbar';
import Image from 'next/image';

import heroImg from '../assets/media/hero_illustration.png';
import CustomButton from './CustomButton';

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  color: '#000336',
  fontWeight: 'bold',
  margin: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  },
}));

const Hero = () => {
  return (
    <Box bgcolor="#E6F0FF" minHeight="80vh">
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '18px',
                color: '#687690',
                fontWeight: 500,
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Besnik Agency
            </Typography>
            <Title variant="h1">
              Discover a place where you'll love to live.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: '18px', color: '#5A6473', my: 4 }}
            >
              Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box flex={1.25}>
            <Image
              src={heroImg}
              alt="hero"
              priority
              style={{ maxWidth: '100%', marginBottom: '2rem' }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
