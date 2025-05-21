import React from 'react';
import { Container, Typography, CardMedia } from '@mui/material';

const BlogPost = ({ title, content, image }) => {
  return (
    <Container sx={{ py: 6 }}>
      <CardMedia component="img" height="400" image={image} alt={title} />
      <Typography variant="h3" sx={{ mt: 4 }}>{title}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{content}</Typography>
    </Container>
  );
};

export default BlogPost;