import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import RadialProgress from './radialProgress';

const API_KEY=`de617c0cbca6d8f98434ecda07ddc71a`;
const styles = theme => ({
  card: {
    display: 'flex',
    margin: '60px',
    height: '400px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width :'100%'

  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 275,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
});
class PaperSheet extends Component {
  componentDidMount(){
    console.log(this.state.MovieID.movieId);
    const api=`https://api.themoviedb.org/3/movie/${this.state.MovieID.movieId}?api_key=${API_KEY}&language=en-US`;
        fetch(api).then(response=>response.json()).then(data=>{
            this.setState({MovieDetails:data});  
            console.log(data);
        })  
  }
  setColor(percentage) {

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
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  constructor(props){
    super(props);
    this.state={MovieID:props.location.state, MovieDetails:{}};
    this.setColor=this.setColor.bind(this);
}
 
  render(){
    const { classes } = this.props;
    const { title, tagline,poster_path,vote_average, overview }=this.state.MovieDetails;
  return (
    <Card className={classes.card}>
     <CardMedia
      className={classes.cover}
      image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
      title="Live from space album cover"
    />
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h3" variant="h3">
        {title}
        </Typography>
        <RadialProgress Perecentage={{'percent':vote_average,'color':this.setColor(vote_average)}}></RadialProgress>
        <Typography variant="subtitle1" color="textSecondary">
        {tagline}
        </Typography>
        <Typography variant="overline" gutterBottom>
        overview: {overview}
      </Typography>
      </CardContent>
    </div>
   
  </Card>
  );
}
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);