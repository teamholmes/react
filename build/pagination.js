// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });

var PaginationContainerLeft = React.createClass({displayName: "PaginationContainerLeft",
  getInitialState: function() {
   return {isVisible : (this.props.skip > 0 ? true : false)};
  }
, render : function() {
    var linkTag = (this.state.isVisible ? '<a href="#">&lt; Previous</a>' : '');
    return (
      React.createElement("div", {className: "container-left"}, 
        linkTag, 
        React.createElement("a", {href: "#"}, "< Previous")
      )
    );
  }
});

React.render(
  React.createElement(PaginationContainerLeft, {skip: "1"}),
  document.getElementById('pagination')
);
