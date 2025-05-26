import { Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/assets/restaurant-interior/hero.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <Typography variant="h3" className="text-white font-bold">Welcome to Flavor Haven</Typography>
        <Typography variant="h6" className="text-gray-300 mt-2">Where tradition meets taste</Typography>
        <Button variant="contained" color="secondary" className="mt-4">Explore Menu</Button>
      </div>
    </div>
  );
}