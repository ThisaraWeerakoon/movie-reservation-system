import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function RecipeReviewCard({ image, title, subheader, content }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {/* Insert the content or method details here */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default function SpacingGrid() {
  return (
    <Grid container spacing={12}>
      <Grid item xs={12}>
        <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <RecipeReviewCard
                image={`/static/images/cards/paella${value + 1}.jpg`}
                title={`Dish ${value + 1}`}
                subheader="September 14, 2016"
                content="This is a description of the dish."
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
          {[3, 4, 5].map((value) => (
            <Grid key={value} item>
              <RecipeReviewCard
                image={`/static/images/cards/paella${value + 1}.jpg`}
                title={`Dish ${value + 1}`}
                subheader="September 14, 2016"
                content="This is a description of the dish."
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={12} sx={{ justifyContent: 'center' }}>
          {[6, 7, 8].map((value) => (
            <Grid key={value} item>
              <RecipeReviewCard
                image={`/static/images/cards/paella${value + 1}.jpg`}
                title={`Dish ${value + 1}`}
                subheader="September 14, 2016"
                content="This is a description of the dish."
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
