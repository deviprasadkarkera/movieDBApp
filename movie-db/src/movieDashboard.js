import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './movieCard';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

const API_KEY=`de617c0cbca6d8f98434ecda07ddc71a`;
const TRE_MOVIE="Trending Movies";
const SEAR_MOVIE="Searched Movies";
const styles = {
  conatiner:{
    margin: '30px',
    padding: '5px'
  },
  header1:{
    margin: '16px'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    width:'95%'
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class MovieDashboard extends Component {
    componentDidMount(){
        const api=`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
            fetch(api).then(response=>response.json()).then(data=>{
                this.setState({trendingMovies:data.results});
                this.setState({cachedTrendingMovies:data.results});
            })

        
    }
    static propTypes = {
        classes: PropTypes.object.isRequired,
      };
    constructor(props){
        super(props);
        this.state={trendingMovies:[],cachedTrendingMovies:[],headerName:TRE_MOVIE};
        this.searchMovie=this.searchMovie.bind(this);
        this.search=this.search.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
    }
    search(e){
      if(e.key === 'Enter'){
        this.searchMovie();
      }
   }
    onInputChange(e){
        if(e.target.value===""){
          debugger;
            this.setState({trendingMovies:this.state.cachedTrendingMovies});
            this.setState({headerName:TRE_MOVIE});  
        }
        this.setState({inputValue:e.target.value});
    }
    searchMovie() {
        let api=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.inputValue}&page=1&include_adult=false`;
        fetch(api).then(response=>response.json()).then(data=>{
            this.setState({trendingMovies:data.results});
            this.setState({headerName:SEAR_MOVIE});  
        })
     }
render(){
    const { classes } = this.props;
    const { trendingMovies,headerName } = this.state;
    console.log(this.state);
  return (
    <div>
    <Paper className={classes.conatiner} elevation={1}>
      <InputBase className={classes.input} onKeyPress={this.search} onChange={this.onInputChange} placeholder="Search Movie Name" />
      <IconButton className={classes.iconButton} aria-label="Search">
      <SearchIcon  onClick = {this.searchMovie} />
      </IconButton>
      </Paper>
     
      <Paper className={classes.conatiner} elevation={1}>
      <Typography className={classes.header1} component="h5" variant="h5">
            {headerName}
          </Typography>
    <div  className={classes.root}>
      {trendingMovies.map((movieDetails, i) => <MovieCard 
                  key = {i} componentData = {movieDetails}/>)}
    </div>
    </Paper>
    </div>
  );
}
}


export default withStyles(styles)(MovieDashboard);