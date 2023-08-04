import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Search from '../../Assets/Search.svg';

export default function CardElement({ title, description}) {
  return (
    <Card sx={{ maxWidth: 345 , display: "block" , margin: "auto" , textAlign: "center" , marginTop: "50px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Search}
          alt="green iguana"
          style={{width: "auto" , display: "flex" , justifyContent: "center" , justifyItems: "center"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "left"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{textAlign: "left"}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
