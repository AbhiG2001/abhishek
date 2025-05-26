import { Card, CardContent, Typography } from "@mui/material";

const team = [
  { name: "Chef A", role: "Executive Chef", img: "/assets/team-photos/chefA.jpg" },
  { name: "Chef B", role: "Sous Chef", img: "/assets/team-photos/chefB.jpg" }
];

export default function Team() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {team.map((member) => (
        <Card key={member.name} className="w-60 shadow-lg">
          <img src={member.img} alt={member.name} className="w-full h-40 object-cover" />
          <CardContent>
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body2" color="text.secondary">{member.role}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}