import React from 'react';
import BlogCard from './BlogCard';
import { Container, Grid, Typography } from '@mui/material';

const blogPosts = [
  { title: 'Our Signature Dish Revealed!', date: 'May 21, 2025', summary: 'Discover the secret behind our best-selling recipe.', image: './src/images/B1.jpg' },
  { title: 'A Day in Our Kitchen', date: 'May 20, 2025', summary: 'Get a behind-the-scenes look at how we craft flavors.', image: './src/images/B2.jpg' },
  { title: 'Seasonal Specials You Need to Try!', date: 'May 19, 2025', summary: 'Explore our freshest menu additions for this season.', image: './src/images/B3.jpg' },
];

const Blog = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>Restaurant Blog</Typography>
      <Grid container spacing={4} justifyContent="center">
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <BlogCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;