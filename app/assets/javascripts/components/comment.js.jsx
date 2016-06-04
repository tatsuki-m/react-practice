var Comment = React.createClass({
  render: function() {
    var url = "/users/" + this.props.data.user_id
    return (
        <div class="comment" key={this.props.data.id} >
          <p>
            <strong>
              <a href={url}>{this.props.data.nickname}</a> :  
            </strong>
            {this.props.data.text}
          </p>
        </div>
    );
  }
});
