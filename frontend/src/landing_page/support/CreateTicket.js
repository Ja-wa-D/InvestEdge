import React from 'react';
import { Container, Grid, Typography, Card, Box, useTheme, alpha, Divider } from '@mui/material';
import { AccountCircle, AddCircle, ShowChart, ChevronRight as ChevronRightIcon } from '@mui/icons-material';

function CreateTicket() {
  const theme = useTheme();

  const categories = [
    {
      title: 'Account Opening',
      icon: <AddCircle sx={{ fontSize: 24 }} />,
      links: [
        'Getting started',
        'Online',
        'Offline',
        'Charges',
        'Company, Partnership and HUF',
        'Non Resident Indian (NRI)'
      ]
    },
    {
      title: 'Your Account',
      icon: <AccountCircle sx={{ fontSize: 24 }} />,
      links: [
        'Login credentials',
        'Your Profile',
        'Account modification and segment addition',
        'CMR & DP ID',
        'Nomination',
        'Transfer and conversion of shares'
      ]
    },
    {
      title: 'Trading and Markets',
      icon: <ShowChart sx={{ fontSize: 24 }} />,
      links: [
        'Trading FAQs',
        'Kite',
        'Margins',
        'Product and order types',
        'Corporate actions',
        'Kite features'
      ]
    }
  ];

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.background.paper, 0.9),
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        py: { xs: 6, md: 10 }
      }}
    >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 700,
            mb: 2,
            letterSpacing: '-0.5px'
          }}
        >
          How can we assist you?
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          To create a support ticket, select a relevant topic below. Our team is ready to help you.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                borderRadius: 3,
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                },
                '&:hover': {
                  borderColor: alpha(theme.palette.primary.main, 0.2),
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 24px ${alpha(theme.palette.common.black, 0.1)}`,
                  '&::before': {
                    opacity: 1
                  }
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    color: theme.palette.primary.main,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    p: 1,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  {category.icon}
                </Box>
                <Typography variant="h6" fontWeight="600">
                  {category.title}
                </Typography>
              </Box>

              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {category.links.map((link, linkIndex) => (
                  <Typography
                    key={linkIndex}
                    component="a"
                    href="#"
                    sx={{
                      color: theme.palette.text.secondary,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 0.5,
                      px: 1,
                      borderRadius: 1,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        bgcolor: alpha(theme.palette.primary.main, 0.05)
                      }
                    }}
                  >
                    {link}
                    <ChevronRightIcon
                      sx={{
                        fontSize: 20,
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.2s',
                        '.MuiTypography-root:hover &': {
                          opacity: 1,
                          transform: 'translateX(0)'
                        }
                      }}
                    />
                  </Typography>
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default CreateTicket;