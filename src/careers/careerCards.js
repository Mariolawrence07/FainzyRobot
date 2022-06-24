import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const CareerCards = () => {
  return (
    <div>
      <div className="  flex  justify-between flex-wrap mt-10 ">
        {jobTitle.map((item, i) => (
          <Card key={i} className="pr-20 mt-10">
            <CardContent>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
              <CardActions style={{padding:"10px 0"}}>
                <Button
                  variant="contained"
                  className="font-semibold"
                  size="medium"
                  disableElevation
                >
                  Apply{" "} 
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const jobTitle = [
  {
    title: "frontend Developer",
    description: "Lorem ipsum du ass dmo ed",
  },
  {
    title: "frontend Developer",
    description: "Lorem ipsum du ass dmo ed",
  },
  {
    title: "frontend Developer",
    description: "Lorem ipsum du ass dmo ed",
  },
];

export default CareerCards;
