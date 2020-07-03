import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const classes = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        GridTemplateRow: 'auto',
        gridGap: theme.spacing(5),
      },
      Grid: {
        textAlign: 'justify',
      },
    divider: {
        margin: theme.spacing(2, 0),
      },
    button: {
        margin: theme.spacing(1),
      },
    input: {
        display: 'none',
      },
  }));


export class MovieInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            movieDetails: {},
            loading: true
        }
    }


    componentDidMount(){

        let id = this.props.location.pathname.split('/')[2];

        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then((response) => response.json())
        .then((details) => {
            this.setState({
                movieDetails: details,
                loading: false
            });
        })
    }

    render() {
        return (
                <Container className={classes.root}>
                    {this.state.loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div classname="movieDetails">
                        <div  className="posterContainer" style={{paddingTop: '3%'}}>
                            <div className="poster" style={{borderRadius: 5}}>
                                <Card>
                                    <CardMedia
                                        style={{height:550}}
                                        component="img" 
                                        image={this.state.movieDetails.image.original}
                                    />
                                    <CardContent style={{textAlign: 'justify'}}>
                                        <Button  style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                          <strong>{this.state.movieDetails.name}</strong>
                                        </Button><br/>
                                        <Button startIcon={<StarRoundedIcon />}  color="primary">
                                           {this.state.movieDetails.rating.average}
                                        </Button><br/>
                                        <Button className={classes.button}>
                                            <strong>Genres: {this.state.movieDetails.genres.map((genre, id) => {
                                                return (
                                                    <span key={id}>
                                                        {genre + ' '}
                                                    </span>
                                                    )
                                                }
                                            )}</strong>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="movieInfo" xs={8} style={{textAlign: 'justify', }}>
                                <div className="summary">
                                        <h5>Summary</h5>
                                    {this.state.movieDetails.summary}
                                </div>
                                <Divider />
                                <strong>Type:</strong>
                                     
                                     {this.state.movieDetails.type}
                                     <Divider/>
                                <div className="language">
                                  <strong>Language: </strong>
                                  {this.state.movieDetails.language}
                                </div>
                                <Divider />
                                <div className="runtime">
                                  <strong>Runtime:</strong>
                                  {this.state.movieDetails.runtime}
            
                                </div>
                                <Divider />
                                <strong>Time</strong> 
                                {this.state.movieDetails.schedule.time}<br/>

                                         <strong>Days:</strong>
                                      {this.state.movieDetails.schedule.days.map((day, id) => {
                                        return (
                                            <span key={id}>
                                                {day + ' '}
                                            </span>
                                        )
                                    })}
                                <Divider />
                                
                                       <strong>Status:</strong>
                                     
                                     {this.state.movieDetails.status}
                                
                            </div>
                        </div>


                        
                                
                          
                            <div className="viewMore" item xs={3} style={{justifyContent: 'center', alignContent: 'center', paddingTop: '10%'}}>
                                <Link style={{ textDecoration: 'none' }} to="/">
                                    <Button variant="contained" color="primary">View More TV  Shows</Button>
                                </Link>
                            </div>
                        
                    </div>)}
                    
                </Container>
        )
    }
}

export default MovieInfo
