import { styled, Typography, Box, Container } from '@mui/material';

import homeIllustration from '@/assets/media/illustration.png';
import CustomButton from './CustomButton';
import Image from 'next/image';

const CustomContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#17275F',
  height: '416px',
  borderRadius: '15px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 3, 0, 3),
    width: '90%',
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  margin: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

const CallToAction = () => {
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: '36px', color: 'white', fontWeight: 700 }}
          >
            Featured Properties
          </Typography>
          <Typography
            sx={{ fontSize: '16px', color: '#ccc', fontWeight: 500, my: 3 }}
          >
            Evenyting you need to konw about house!{' '}
          </Typography>
          <CustomButton
            backgroundColor="#fff"
            color="#17275f"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>
        <Image
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: '100%' }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default CallToAction;
