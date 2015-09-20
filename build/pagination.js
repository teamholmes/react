var PaginationContainerLeft = React.createClass({displayName: "PaginationContainerLeft",
  getInitialState: function() {
   return {isVisible : (this.props.skip > 0 ? true : false)};
  }
, render : function() {

  var optionalHyperlink = function (isVisible) {
    if (isVisible)
      return (React.createElement("a", {href: "#"}, "< Previous"));
      return;
    }

    return (
      React.createElement("div", {className: "container-left"}, 
      React.createElement("p", null, "Pagination here "), 
        optionalHyperlink(this.state.isVisible)
      )
    );
  }
});

var Pagination = React.createClass({displayName: "Pagination",
  getInitialState: function() {
   return {data : this.props.config};
  }
, render : function (){
    return (
      React.createElement("p", null, "HELLdddO1321")
    )
  }
});

React.render(
  React.createElement(Pagination, {config: "{skip:0,limit:30,numResults:200}"}),
  document.getElementById('pagination')
);
