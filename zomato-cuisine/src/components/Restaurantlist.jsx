import React, {Component} from 'react'
import Restaurant from './Restaurant.jsx'
import axios from 'axios'
import {BrowserRouter as Router} from 'react-router-dom'
import {Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap'
import './Restaurantlist.css'


class RestaurantList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      category: ''
    }
  }

  componentDidMount() {
    this.fetchRestaurantData('1');
  }

  handleEvent(e) {
    e.preventDefault ()
  }

  fetchRestaurantData(eventKey) {
    console.log(eventKey)
    this.setState({category: eventKey})
    console.log(typeof eventKey)
    axios.get(`https://developers.zomato.com/api/v2.1/search?category=${eventKey}&sort=cost&order=asc`,{headers: { 'user-key' : '4fea6930ef5dd45a54f63284d8d71508'}})
      .then(response => {
          console.log(response.data.restaurants)
          let results = response.data.restaurants
          this.setState({data: results})
      })
      .catch(err => console.log(err));
  }

  render () {
    var restaurant = this.state.data.map((restaurant, index) => 
    <Restaurant data={restaurant} key={index} category={this.state.category}/>
    )
    return (
    <Router>
      <Grid>
          <Row className="show-grid">
          <ButtonToolbar>
            <DropdownButton
              bsSize="large"
              title="Category"
              id="dropdown-size-large"
            >
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="1">Delivery</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="2">Dine-Out</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="3">Nightlife</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="4">Catching Up</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="5">Take Away</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="6">Cafes</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="7">Daily Menu</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="8">Breakfast</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="9">Lunch</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="10">Dinner</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="11">Pubs & Bars</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="12">Pocket Friendly Delivery</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantData.bind(this)} eventKey="13">Clubs & Lounges</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          </Row>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <code>{restaurant}</code>
          </Col>
        </Row>
      </Grid>
    </Router>
    )
  }
}

export default RestaurantList