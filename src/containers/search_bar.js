/**
 * Created by fran on 13/7/17.
 */
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};

        this.onImputChange = this.onImputChange.bind(this)
    }

    onImputChange(event){
        console.log(event.target.value)
        this.setState({term: event.target.value})
    }


    onFormSubmit(event){
        event.preventDefault();
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
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>


        )
    }
}
