import Image from 'next/image';
import { Box, Container, styled, Typography } from '@mui/material';
import logoImg from '@/assets/media/logo.png';
import startsImg from '@/assets/media/Star.png';
import logosImg from '@/assets/media/logos.png';

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const CustomParagraph = styled(Typography)(({ theme }) => ({
  color: '#7D8589',
  fontSize: '16px',
  fontWeight: 'bold',
  marginTop: 2,
}));

const Companies = () => {
  return (
    <Box marginTop={10}>
      <CustomContainer>
        <CustomBox>
          <Image src={logoImg} alt="logo" style={{ maxWidth: '100%' }} />
          <CustomParagraph variant="body2">
            More than 45,000 trust Besnik
          </CustomParagraph>
        </CustomBox>

        <Box>
          <Image src={startsImg} alt="stars" style={{ maxWidth: '100%' }} />
          <CustomParagraph variant="body2">
            5-Star Rating (2K+ Reviews)
          </CustomParagraph>
        </Box>
      </CustomContainer>

      <Container sx={{ display: 'flex', flexDirection: 'column' }}>
        <Image src={logosImg} alt="logos" />
      </Container>
    </Box>
  );
};

export default Companies;
