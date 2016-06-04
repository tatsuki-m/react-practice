var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    this.props.onCommentSubmit({text: text});
    ReactDOM.findDOMNode(this.refs.text).value = '';
  },
  render: function() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <textarea cols="30"placeholder="Comment sth about this picture" rows="2" ref="text" />
        <input type="submit" value="SENT" />
      </form>
    );
  }
});
