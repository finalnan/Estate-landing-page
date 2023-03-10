import { styled, Typography, Box, Container } from '@mui/material';
import Image from 'next/image';

import facebookIcon from '@/assets/media/facebookicon.png';
import twitterIcon from '@/assets/media/twittericon.png';
import linkedinicon from '@/assets/media/linkedinicon.png';

const CustomContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const FooterLink = styled('span')(({ theme }) => ({
  fontSize: '16px',
  color: '#7A7A7E',
  fontWeight: 300,
  cursor: 'pointer',
  '&:hover': {
    color: '#000',
  },
}));

const Footer = () => {
  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1C',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Products
            </Typography>
            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1C',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Resources
            </Typography>
            <FooterLink>Our Homes</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1C',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Company
            </Typography>
            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: '20px',
                color: '#1C1C1C',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: '#7A7A7E',
                fontWeight: 500,
                mb: 2,
              }}
            >
              You'll find your next home, in any style you prefer.
            </Typography>
            <IconBox>
              <Image
                src={facebookIcon}
                alt="facebook"
                width={32}
                height={32}
                style={{ cursor: 'pointer' }}
              />
              <Image
                src={twitterIcon}
                alt="twitter"
                width={32}
                height={32}
                style={{ cursor: 'pointer' }}
              />
              <Image
                src={linkedinicon}
                alt="linkedin"
                width={32}
                height={32}
                style={{ cursor: 'pointer' }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
