import { Box, Container, styled, Typography } from '@mui/material';
import House from './House';
import { properties } from '../constant/properties';

const PropertiesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const Properties = () => {
  return (
    <Box sx={{ mt: 5, backgroundColor: '#F5FAFE', py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: '#000339', fontSize: '36px', fontWeight: 'bold' }}
          >
            Featured Properties
          </Typography>
          <Typography sx={{ color: '#5A6473', fontSize: '16px', mt: 1 }}>
            Everything you need to know when looking for a new home!
          </Typography>
        </PropertiesTextBox>
        <PropertiesBox>
          {properties.map((property) => (
            <House key={property.id} {...property} />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
