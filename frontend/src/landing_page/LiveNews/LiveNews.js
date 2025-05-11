import React, { useState } from 'react';
import { Box, Typography, useTheme, Button } from '@mui/material';
import { TrendingUp as TrendingUpIcon } from '@mui/icons-material';

const fetchStockNews = async (tickerSymbol) => {
  const API_KEY = 'f088491d69fd840cdd8b00550b6db8b4';
  const baseUrl = 'https://gnews.io/api/v4/search';

  // Parameters for the API request
  const params = new URLSearchParams({
    q: `${tickerSymbol} stock`,
    apikey: API_KEY,
    max: 9,
    lang: 'en',
    sortby: 'publishedAt',
    in: 'title,description',
    category: 'business'
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const newsData = await response.json();

    if (!newsData.articles || newsData.articles.length === 0) {
      console.log(`No news articles found for ${tickerSymbol}`);
      return [];
    }

    // Extract and format relevant information from each article
    return newsData.articles.map(article => ({
      title: article.title || 'No title',
      description: article.description || 'No description',
      source: article.source?.name || 'Unknown',
      url: article.url || '',
      published: article.publishedAt ? 
        new Date(article.publishedAt).toLocaleString() : 
        'Unknown'
    }));

  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

const LiveNews = () => {
  const theme = useTheme();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tickerSymbol, setTickerSymbol] = useState('');

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    titleContainer: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    form: {
      marginBottom: '2rem'
    },
    searchContainer: {
      display: 'flex',
      gap: '10px',
      maxWidth: '600px',
      margin: '0 auto'
    },
    inputWrapper: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '2px solid #e1e1e1',
      padding: '0 16px'
    },
    input: {
      flex: 1,
      padding: '12px 16px',
      fontSize: '1rem',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
      width: '100%'
    },
    button: {
      padding: '12px 24px',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },
    loading: {
      textAlign: 'center',
      padding: '2rem',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    loadingSpinner: {
      width: '20px',
      height: '20px',
      border: '3px solid #f3f3f3',
      borderTop: `3px solid ${theme.palette.primary.main}`,
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
      }
    },
    error: {
      color: '#dc3545',
      backgroundColor: '#f8d7da',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    newsList: {
      display: 'grid',
      gap: '20px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
    },
    newsItem: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
        borderColor: theme.palette.primary.main
      }
    },
    newsTitle: {
      fontSize: '1.2rem',
      color: '#1a1a1a',
      marginBottom: '0.5rem',
      lineHeight: 1.4
    },
    newsMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      fontSize: '0.9rem'
    },
    source: {
      color: theme.palette.primary.main,
      fontWeight: 500
    },
    published: {
      color: '#666'
    },
    description: {
      color: '#4a4a4a',
      lineHeight: 1.6,
      marginBottom: '1rem'
    },
    readMore: {
      display: 'inline-block',
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontWeight: 500,
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    placeholder: {
      textAlign: 'center',
      color: '#666',
      padding: '3rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      fontSize: '1.1rem'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tickerSymbol) return;
    
    setLoading(true);
    setError(null);

    try {
      const articles = await fetchStockNews(tickerSymbol);
      setNews(articles);
    } catch (err) {
      setError('Failed to fetch news articles');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2196F3, #00C853)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2
          }}
        >
          Real-Time Stock News
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Stay ahead of the market with instant news updates
        </Typography>
      </Box>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.searchContainer}>
          <div style={styles.inputWrapper}>
            <TrendingUpIcon
              sx={{
                fontSize: 32,
                color: theme.palette.primary.main,
                marginRight: 2
              }}
            />
            <input
            type="text"
            value={tickerSymbol}
            onChange={(e) => setTickerSymbol(e.target.value.toUpperCase())}
            placeholder="Enter stock ticker (e.g., AAPL, MSFT, GOOGL, FB, AMZN)"
            style={styles.input}
            required
          />
          </div>
          <Button
            type="submit"
            variant="contained"
            sx={{
              padding: '12px 24px',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark
              }
            }}
          >
            Get News
          </Button>
        </div>
      </form>

      {loading && (
        <div style={styles.loading}>
          <div style={styles.loadingSpinner}></div>
          Fetching latest news...
        </div>
      )}
      
      {error && <div style={styles.error}>{error}</div>}
      
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {news.map((article, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                borderColor: theme.palette.primary.main
              }
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
              {article.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                {article.source}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {article.publishedAt}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
              {article.description}
            </Typography>
            <Typography
              component="a"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: theme.palette.primary.main,
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Read More
            </Typography>
          </Box>
        ))}
      </Box>

      {news.length === 0 && !loading && !error && (
        <Box sx={{ textAlign: 'center', color: 'text.secondary', padding: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
          Enter a stock symbol to see the latest news
        </Box>
      )}
    </div>
  );
};

export default LiveNews;