import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { Carousel,Button } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import ModelForm from "./components/ModelForm"

class MyFavoriteBooks extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showData:false
    };
  }
  showHandler=()=>{
    this.setState({
      showData:true,
    })

  }
  hiddenHandler=()=>{
    this.setState({
      showData:false,
    })

  }

  submitPost=(e)=>{
   e.preventDefault();
   let config={
     email:this.props.auth0.user.email,
     bookTitle:e.target.userTitle.value,
     bookDescription:e.target.userDes.value,
     bookStatus:e.target.userStat.value,
   }
   let booksURL =
            "http://localhost:8000/books-add"
   axios.post(booksURL,config).then(res=>{
     this.setState({
      data:res.data 
     })
   })

  }

  componentDidMount = () => {
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0
        .getIdTokenClaims()
        .then((res) => {
          // const config={
          //   method:'get',
          //   baseURL:process.env.REACT_APP_SERVER_URL,
          //   url:'/books?email=muradalkhateeb@icloud.com'
          // }
          let booksURL =
            "http://localhost:8000/books?email=moradnnn7@gmail.com";
          axios.get(booksURL).then((res) => {
            this.setState({
              data: res.data,
            });
            console.log(res.data);
          });
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <Carousel>
        {this.state.data.map((item) => {
          return (

            <Carousel.Item style={{textAlign:'center'}} key={item._id}>
              <h1>{item.title}</h1>
              <h2>{item.description} </h2>
              <h3>{item.status}</h3>
            </Carousel.Item>
          );
        })}
        </Carousel>

        <Button onClick={this.showHandler}>Add New Book</Button>
        <ModelForm show={this.state.showData} hidden={this.hiddenHandler} post={this.submitPost}/>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
