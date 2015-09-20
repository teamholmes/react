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
   return {configuration : this.props.config};
  }
, render : function (){
    return (
      React.createElement(PaginationContainerLeft, {skip: this.state.configuration.skip})
    )
  }
});

var myData = {
  skip : 0
, limit : 30
, numResults : 2000
};

React.render(
  React.createElement(Pagination, {config: myData}),
  document.getElementById('pagination')
);
