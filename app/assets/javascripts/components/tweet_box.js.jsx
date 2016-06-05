var TweetBox = React.createClass({
  getInitialState: function() {
    return {tweets: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(result) {
        this.setState({tweets: result.tweets});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleTweetSubmit: function(tweet) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: tweet,
      success: function(result) {
        this.setState({tweets: [result].concat(this.state.tweets)});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="tweetBox">
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
        <TweetList tweets={this.state.tweets}/>
      </div>
    );
  }
});
