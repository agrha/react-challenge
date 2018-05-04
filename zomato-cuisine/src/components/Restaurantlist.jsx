import React, {Component} from 'react'
import Restaurant from './Restaurant.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRestaurant } from '../store/restaurant/restaurant.action'
import {BrowserRouter as Router} from 'react-router-dom'
import {Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap'
import './Restaurantlist.css'


class RestaurantList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      data:[]
    }
  }

  componentDidMount(payload) {
    payload = '1'
    this.props.getRestaurant(payload)
  }

  fetchRestaurantByCategory(payload) {
    this.props.getRestaurant(payload)
  }

  render () {
    var restaurant = this.props.restaurants.map((restaurant, index) => 
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
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '1')} eventKey="1">Delivery</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '2')} eventKey="2">Dine-Out</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '3')} eventKey="3">Nightlife</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '4')} eventKey="4">Catching Up</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '5')} eventKey="5">Take Away</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '6')} eventKey="6">Cafes</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '7')} eventKey="7">Daily Menu</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '8')} eventKey="8">Breakfast</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '9')} eventKey="9">Lunch</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '10')} eventKey="10">Dinner</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '11')} eventKey="11">Pubs & Bars</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '12')} eventKey="12">Pocket Friendly Delivery</MenuItem>
              <MenuItem onSelect={this.fetchRestaurantByCategory.bind(this, '13')} eventKey="13">Clubs & Lounges</MenuItem>
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

const mapStateToProps = (state) => ({
  restaurants: state.restaurant.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getRestaurant
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantList);