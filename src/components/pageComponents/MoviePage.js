import React from 'react';
import { connect } from 'react-redux';

class MoviePage extends React.Component {
    render() {
        return (
            <div style={{paddingTop: 140}}>
                <h2>{this.props.movieData.title}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { movieData: state.movieData }
}

export default connect(mapStateToProps)(MoviePage);