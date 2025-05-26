import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const BlogCard = ({ title, date, summary, image }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 ,  height:500,display:"flex",flexDirection:"column", alignItems:"center" ,justifyContent:"space-evenly" ,overflowL:"hidden"}}>
      <CardMedia component="img" height="280" image={image} alt={title} sx={{height:300 , width:300}}/>
      <CardContent>
        <Typography variant="h6" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{date}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{summary}</Typography>
        {/* <Button sx={{ mt: 2 }} variant="contained" color="primary">Read More</Button> */}
      </CardContent>
    </Card>
  );
};

export default BlogCard;