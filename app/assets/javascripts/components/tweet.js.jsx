var Tweet = React.createClass({
  render: function() {
    var userUrl = "/users/" + this.props.tweet.user_id;
    var divStyle = {
      backgroundImage: 'url(' + this.props.tweet.image + ')'
    }
    return (
        <div className="content_post" style={divStyle} >
          <p>{this.props.tweet.text}</p>
          <span className="name">
            <a href={userUrl}>
              <span>Post</span>
              {this.props.tweet.nickname}
            </a>
          </span>
        </div>
    );
  }
});
