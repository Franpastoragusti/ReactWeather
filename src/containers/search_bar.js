/**
 * Created by fran on 13/7/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onImputChange = this.onImputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onImputChange(event){
        console.log(event.target.value)
        this.setState({term: event.target.value})
    }


    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({term: ''})
    }

    render(){



        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onImputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>


        )
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch)
}


export default connect(null,mapDispathToProps)(SearchBar);