import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      dataLoaded: false
    }
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/quotes'
    })
    .then(data => {
      console.log(data.data.data);
      this.setState({
        quotes: data.data.data,
        dataLoaded: true
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  renderQuotes() {
    if (this.state.dataLoaded) {
      return this.state.quotes.map(quote => {
        return (
          <div key={quote.id}>
            <Link to={`/${quote.id}`}>"{quote.quote}"</Link>
            <p className="author">{quote.author}</p>
          </div>
        )
      })
    } else {
      <p>Loading...</p>
    }
  }

  render() {
    return (
      <div className="Home">
        <h1>These are my favorite quotes</h1>
        {this.renderQuotes()}
      </div>
    )
  }
};

export default Home;