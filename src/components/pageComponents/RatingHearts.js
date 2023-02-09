import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Rating } from 'semantic-ui-react'

class RatingHearts extends Component {
  state = {}

  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating icon='heart' maxRating={10}  rating={this.props.movieData.vote_average} onRate={this.handleRate} disabled />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { movieData: state.movieData }
}

export default connect(mapStateToProps)(RatingHearts);