// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });

var PaginationContainerLeft = React.createClass({
  getInitialState: function() {
   return {isVisible : (this.props.skip > 0 ? true : false)};
  }
, render : function() {
    var linkTag = (this.state.isVisible ? '<a href="#">&lt; Previous</a>' : '');
    return (
      <div className="container-left">
        {linkTag}
        <a href="#">&lt; Previous</a>
      </div>
    );
  }
});

React.render(
  <PaginationContainerLeft skip="1"/>,
  document.getElementById('pagination')
);
