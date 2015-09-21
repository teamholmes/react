var myData = {
  skip : 2
, limit : 30
, numResults : 95
};

//////////// PAGINATIONLEFTCONTAINER COMPONENT

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
        optionalHyperlink(this.state.isVisible)
      )
    );
  }
});


////////////// PAGINATIONRIGHTCONTAINER COMPONENT
var PaginationContainerRight = React.createClass({displayName: "PaginationContainerRight",
  getInitialState: function() {
   return {isVisible : (this.props.config.numResults - (this.props.config.skip * this.props.config.limit) > this.props.config.limit ? true : false)};
  }
, render : function() {
  var optionalHyperlink = function (isVisible) {
    if (isVisible)
      return (React.createElement("a", {href: "#"}, "Next >"));
      return;
    }
    return (
      React.createElement("div", {className: "container-left"}, 
        optionalHyperlink(this.state.isVisible)
      )
    );
  }
});

////////////// PAGINATION COMPONENT

var Pagination = React.createClass({displayName: "Pagination",
  getInitialState: function() {
   return {configuration : this.props.config};
  }
, render : function (){
    return (
      React.createElement("div", {id: "container-pager"}, 
        React.createElement(PaginationContainerLeft, {skip: this.state.configuration.skip}), 
        React.createElement(PaginationContainerRight, {config: this.state.configuration})
    )
    )
  }
});


React.render(
  React.createElement(Pagination, {config: myData}),
  document.getElementById('pagination')
);
