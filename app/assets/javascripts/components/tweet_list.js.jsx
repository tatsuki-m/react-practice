var TweetList = React.createClass({
  render: function() {
    var tweetsNodes = this.props.tweets.map(function (tweet) {
      return (
          <Tweet tweet={tweet}/>
      );
    });
    return (
      <div class="tweets">
        {tweetsNodes}
      </div>
    );
  }
});

