import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../searchComponents/Search';
import Pagination from './Pagination';
import '../index.css';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


export class MovieHome extends Component {

    constructor(props){
        super(props)
        this.state = {
            tvShows: [],
            currentShows: [],
            currentPage: null,
            totalPages: null
        }
    }


    componentDidMount(){
        fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((results) => {
            this.setState({
                tvShows: results
            });
        })
    }

    onPageChanged = data => {
      const { tvShows } = this.state;
      const { currentPage, totalPages, pageLimit } = data;
  
      const offset = (currentPage - 1) * pageLimit;
      const currentShows = tvShows.slice(offset, offset + pageLimit);
  
      this.setState({ currentPage, currentShows, totalPages });
    }

    render() {

          const { tvShows, currentShows, currentPage, totalPages } = this.state;

          const totalShows = tvShows.length;

          if (totalShows === 0) return null;

          const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

        return (
                <Container>
                    <Search />

                    <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">

                          <div className="d-flex flex-row py-4 align-items-center">
                            <Pagination totalRecords={totalShows} pageLimit={12} pageNeighbours={1}
                             onPageChanged={this.onPageChanged} />
                          </div>
                          
                    </div>

                    <div className="gridContainer" spacing={3}>
                        {currentShows.map((item, id) => {
                            return(
                                <div 
                                    key={id} 
                                    style={{textAlign: 'justify'}}
                                    className='gridItem' 
                                >
                                    <Link style={{ textDecoration: 'none' }} to={`/movieinfo/${item.id}`}  >
                                    <div>
                                        <CardMedia 
                                            style={{height:400}}
                                            component="img" 
                                            image={item.image.original} 
                                        />
                                        <CardContent>
                                            <Button variant="contained" style={{backgroundColor: "#000000", color: "#ffffff"}}>
                                                {item.name}
                                            </Button>
                                        </CardContent>
                                        <CardActions>
                                        </CardActions>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            )
        }
    }
    

export default MovieHome