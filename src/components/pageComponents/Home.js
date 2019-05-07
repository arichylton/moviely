import React from 'react';
import { connect } from 'react-redux';
import { featureMovies } from '../../actions';

class Home extends React.Component {
    componentDidMount() {
        this.props.featureMovies();
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default connect(null, { featureMovies })(Home);