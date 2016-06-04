var CommentList = React.createClass({
  render: function() {
    var commentsNodes = this.props.data.map(function (comment) {
      return (
        <Comment data={comment} />
      );
    });
    return (
      <div className="comments">
        <h4>ALL COMMENT</h4>
        {commentsNodes}
      </div>
    );
  }
});
