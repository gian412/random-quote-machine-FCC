import React from "react";
import quotes from "../resources/quotes";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    let quoteAndLink = this.randQuote();
    this.state = {
      quote: quoteAndLink.quote,
      twitterLink: quoteAndLink.link,
    };
  }

  randQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const link = this.twitterLinkCreator(quote);
    return { quote: quote, link: link };
  }

  twitterLinkCreator(quote) {
    let link =
      "https://twitter.com/intent/tweet?hashtags=quotes&text=%22" +
      quote.quote.replace(/ /g, "%20") +
      "%22%20" +
      quote.author.replace(/ /g, "%20");
    return link;
  }

  handleNewQuote() {
    let newQuote = {};
    do {
      newQuote = this.randQuote();
    } while (newQuote.quote === this.state.quote);
    this.setState({
      quote: newQuote.quote,
      twitterLink: newQuote.link,
    });
  }
  render() {
    return (
      <div id="quote-box">
        <div id="span" />
        <div id="quote">
          <i className="fas fa-quote-left" />
          <span id="text">{this.state.quote.quote}</span>
          <i className="fas fa-quote-right" />
        </div>

        <div id="author-box">
          <span id="author">- {this.state.quote.author}</span>
        </div>
        <div id="buttons">
          <button className="btn btn-primary" id="tweet-quote">
            <a
              href={this.state.twitterLink}
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </button>
          <button
            id="new-quote"
            className="btn btn-primary"
            onClick={this.handleNewQuote.bind(this)}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
