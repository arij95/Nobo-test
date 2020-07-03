import React from 'react'
import { Link } from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';


const MovieListItem = ({movies}) => (
    <Link to={`/movies/${movies.show.id}`}>
        <ListItem button>
        <ListItemText primary={movies.show.name} />
        </ListItem>
    </Link>
)

function MovieList(props) {
    return (
        <div style={{
            display:'flex',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <List component="nav">
                {props.list.map(movies =>(
                    <MovieListItem movies={movies} key={movies.show.id} />
                ))}
            </List>
        </div>
    )
}

export default MovieList
