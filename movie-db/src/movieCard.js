import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import RadialProgress from './radialProgress';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  card: {
    maxWidth: 213,
    margin: '20px',
    height: '340px'
  },
  radialProgress:{
  float: "right",
  marginTop: "-30px"
  },
  date: {
    fontSize: 14,
  },
  description: {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    color: '#4d4d4d',
    fontSize: '0.9em',
    height: '100px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  href:{
    textDecoration: 'none'
  },
  cardarea:{
    height: 287,
    overflow: 'hidden'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes,componentData } = props;
  function setColor(percentage) {

    if(parseFloat(percentage)<=2.5){
      return 'red';
    }else if(parseFloat(percentage)<=5.0){
      return 'rgb(148, 108, 50)';
    }else if(parseFloat(percentage)<=7.5){
       return 'orange';
    }else if(parseFloat(percentage)<=10){
       return 'green';
    }
    }
  return (
    <Link className={classes.href} to={{
      pathname: '/details',
      state: {
        movieId: componentData.id
      }
    }}>
    <Card className={classes.card}>
      <CardActionArea className={classes.cardarea}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          maxWidth="250"
          height="140"
          image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${componentData.poster_path}`}
          title={componentData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {componentData.title}
          </Typography>
          <Typography className={classes.date} color="textSecondary" gutterBottom>
          {new Date(componentData.release_date).toString().split(':')[0].substr(0,15)}
        </Typography>
        <RadialProgress Perecentage={{'percent':componentData.vote_average,'color':setColor(componentData.vote_average)}}></RadialProgress>
          <Typography className={classes.description} component="p">
          {componentData.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="Add to favorites">
            <FavoriteIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon fontSize="small"/>
          </IconButton>
      </CardActions>
    </Card>
    </Link>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);