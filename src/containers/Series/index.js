import React, {Component} from 'react'
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader'
import Intro from '../../components/Intro'

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesInputChange = e => {
        this.setState({
            seriesName: e.target.value,
            isFetching: true
        })
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(series => this.setState({
                series,
                isFetching: false
            }))
    }

    render () {
        const {series, seriesName, isFetching} = this.state
        return (
            <div>
                <Intro
                    message="Here you can find all of your most loved series"
                />
                <div>
                    <input type="text"
                        onChange={this.onSeriesInputChange}
                        value={seriesName}
                    />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input.</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No Tv Series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching &&< SeriesList list={this.state.series}/>
                }
            </div>
        )
    }
}

export default Series