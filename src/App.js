import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import BestBooks from './BestBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/Profile';

class App extends React.Component {
       
  
  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          
            <Header auth0={this.props.auth0}/>
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <> <BestBooks />  </>:  <Login />}
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                <Profile /> 
              </Route>
            </Switch>
            <Footer />
         
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
