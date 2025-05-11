import React from 'react';
import { Box, Container, Typography, TextField, Button, Chip, Paper, useTheme, alpha } from '@mui/material';
import { Search as SearchIcon, SupportAgent as SupportAgentIcon, TrendingUp as TrendingUpIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, 
          ${theme.palette.primary.dark} 0%, 
          ${theme.palette.primary.main} 50%,
          ${alpha(theme.palette.primary.light, 0.95)} 100%)`,
        color: 'white',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              fontWeight: 700,
              letterSpacing: '-0.5px',
              color: 'text.muted'
            }}
          >
            <SupportAgentIcon sx={{ fontSize: 40 }} />
            Support Portal
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1,
              borderColor: alpha('#fff', 0.5),
              backgroundColor: alpha('#fff', 0.1),
              backdropFilter: 'blur(8px)',
              '&:hover': {
                backgroundColor: alpha('#fff', 0.2),
                borderColor: '#fff',
                transform: 'translateY(-2px)'
              }
            }}
          >
            Track Tickets
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          <Box sx={{ flex: '1 1 400px' }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 3, 
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                maxWidth: '600px',
                color: '#000'
              }}
            >
              How can we help you today?
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                borderRadius: 3,
                backgroundColor: alpha('#fff', 0.95),
                backdropFilter: 'blur(8px)',
                boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`
              }}
            >
              <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <TextField
                fullWidth
                placeholder="Eg. how do I activate F&O"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: '1.1rem' }
                }}
              />
            </Paper>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 2 }}>
              {['Track account opening', 'Track segment activation', 'Intraday margins', 'Kite user manual'].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  clickable
                  sx={{
                    bgcolor: alpha('#fff', 0.15),
                    color: 'white',
                    border: `1px solid ${alpha('#fff', 0.3)}`,
                    backdropFilter: 'blur(8px)',
                    px: 2,
                    py: 1,
                    '&:hover': {
                      bgcolor: alpha('#fff', 0.25),
                      borderColor: alpha('#fff', 0.5)
                    }
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 300px' }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: '#000' }}>
              <TrendingUpIcon />
              Featured Updates
            </Typography>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                bgcolor: alpha('#fff', 0.1),
                borderRadius: 3,
                border: `1px solid ${alpha('#fff', 0.2)}`,
                backdropFilter: 'blur(8px)'
              }}>
              {[
                'Current Takeovers and Delisting - January 2024',
                'Latest Intraday leverages - MIS & CO'
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    mb: index === 0 ? 2 : 0,
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.05)'
                    }
                  }}
                >
                  <Typography sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;