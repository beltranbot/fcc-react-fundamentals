import React, {Component} from 'react'

class Series extends Component {

    state = {
        series: []
    }

    componentDidMount () {
        fetch('http://api.tvmaze.com/search/shows?q=vikings')
            .then((response) => response.json())
            .then(series => this.setState({series}))
    }

    render () {
        return (
            <div>The length of series array - {this.state.series.length}</div>
        )
    }
}

export default Series