import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  useTheme,
  alpha,
  Skeleton,
  IconButton
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Launch as LaunchIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import axios from 'axios';

const fetchTrendingNews = async (apiKey, maxArticles = 4) => {
  try {
    const baseUrl = 'https://gnews.io/api/v4/search';
    const params = {
      q: 'finance OR stock market OR trading OR investment',
      apikey: apiKey,
      max: maxArticles,
      lang: 'en',
      sortby: 'publishedAt',
      in: 'title,description',
      category: 'business'
    };

    const response = await axios.get(baseUrl, { params });
    return response.data.articles.map(article => ({
      title: article.title || 'No title',
      description: article.description || 'No description',
      source: article.source?.name || 'Unknown',
      url: article.url || '',
      published: new Date(article.publishedAt).toLocaleString()
    }));
  } catch (error) {
    console.error('Error fetching trending news:', error);
    return [];
  }
};

function Hero() {
  const theme = useTheme();
  const [apiKey] = useState('f088491d69fd840cdd8b00550b6db8b4');
  const [trendingNews, setTrendingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTrendingNews = async () => {
    setLoading(true);
    setError('');
    try {
      const newsData = await fetchTrendingNews(apiKey);
      setTrendingNews(newsData);
      if (newsData.length === 0) {
        setError('No trending news available');
      }
    } catch (err) {
      setError('Error fetching trending news');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTrendingNews();
  }, []);

  return (
    <Box
      sx={{
        background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.05)}, ${alpha(
          theme.palette.background.default,
          0.8
        )})`,
        borderRadius: 2,
        p: 3
      }}
    >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
            <TrendingUpIcon
              sx={{
                fontSize: 32,
                color: theme.palette.primary.main,
                mr: 2
              }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Trending in Finance
            </Typography>
          </Box>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            Latest updates from the world of finance and markets
          </Typography>
          <IconButton 
            onClick={loadTrendingNews} 
            disabled={loading}
            sx={{ mb: 4 }}
          >
            <RefreshIcon />
          </IconButton>
        </Box>

        {error && (
          <Typography color="error" align="center" sx={{ mb: 4 }}>
            {error}
          </Typography>
        )}

        <Grid container spacing={2}>
          {loading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Skeleton variant="text" height={32} sx={{ mb: 1 }} />
                      <Skeleton variant="text" height={20} sx={{ mb: 1 }} />
                      <Skeleton variant="text" height={20} sx={{ mb: 1 }} />
                      <Skeleton variant="text" height={20} width="60%" />
                    </CardContent>
                  </Card>
                </Grid>
              ))
            : trendingNews.map((article, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.3,
                          mb: 2
                        }}
                      >
                        {article.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          mb: 2,
                          color: 'text.secondary',
                          fontSize: '0.875rem'
                        }}
                      >
                        <Typography variant="body2">{article.source}</Typography>
                        <Typography variant="body2">{article.published}</Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                          mb: 2,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {article.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 4, pt: 0 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchIcon />}
                        sx={{ borderRadius: 2 }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
        </Grid>

    </Box>
  );
}

export default Hero;
