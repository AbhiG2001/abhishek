import { Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Container className="my-16">
      <Typography variant="h4" className="font-bold text-center">Our Story</Typography>
      <Typography variant="body1" className="text-gray-600 mt-4 text-center">
        Established in 1998, Flavor Haven brings timeless recipes to life with a fusion of tradition and innovation.
      </Typography>
      <Typography variant="h5" className="font-semibold mt-8 text-center">Our Values</Typography>
      <ul className="text-gray-500 text-center mt-4 list-disc list-inside">
        <li>Authentic Ingredients & Recipes</li>
        <li>Customer-Centric Dining Experience</li>
        <li>Sustainability & Ethical Sourcing</li>
      </ul>
    </Container>
  );
}