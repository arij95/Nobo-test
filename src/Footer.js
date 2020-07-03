import React, { Component } from 'react';
import Icofont from 'react-icofont';
import {Container, Grid} from '@material-ui/core'
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <Container>
                        <div className="row">
                            <Grid container spacing={1}>
                                <Grid item xs={3}  spacing={3}>
                                   <p className="copyright">{this.props.copyrightText}</p>
                            </Grid>
                            <Grid item xs={3}>
                                <p className="copyright">{this.props.socialTitle}</p>
                                </Grid>
                                <Grid item xs={3}>
                        <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li> 
                                        <a href="https://www.tvmaze.com/" 
                                         to="https://www.tvmaze.com/"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="https://twitter.com/tvmaze" ><Icofont icon="icofont-twitter"/></a></li>
                                        <li><a href="https://www.instagram.com/tvmazecom/" ><Icofont icon="icofont-instagram"/></a></li>
                                    </ul>
                                </div>
                            </div>
                            </Grid>
                            </Grid>
                            </div>
                            
                        </Container>
                </footer>
            </React.Fragment>
        );
    }
}


//Default Props
Footer.defaultProps = {
    copyrightText: "2020 © All Rights Reserved.",
    socialTitle: "Follow Us On:",
   
};
export default Footer;

