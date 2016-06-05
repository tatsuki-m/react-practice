var TweetForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var image = ReactDOM.findDOMNode(this.refs.image).value.trim();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !image) {
      alert("Please fill in your form");
      return;
    }
    this.props.onTweetSubmit({image: image, text: text});
    ReactDOM.findDOMNode(this.refs.image).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
  },
  render: function() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <input placeholder="Image Url" type="text" name="image" ref="image" />
        <textarea cols="30" name="text" placeholder="text" rows="2" ref="text" />
        <input type="submit" value="SENT" />
      </form>
    );
  }
});
