var myData = {
  skip : 2
, limit : 30
, numResults : 95
};

//////////// PAGINATIONLEFTCONTAINER COMPONENT

var PaginationContainerLeft = React.createClass({
  getInitialState: function() {
   return {isVisible : (this.props.skip > 0 ? true : false)};
  }
, render : function() {
  var optionalHyperlink = function (isVisible) {
    if (isVisible)
      return (<a href="#">&lt; Previous</a>);
      return;
    }
    return (
      <div className="container-left">
        {optionalHyperlink(this.state.isVisible)}
      </div>
    );
  }
});


////////////// PAGINATIONRIGHTCONTAINER COMPONENT
var PaginationContainerRight = React.createClass({
  getInitialState: function() {
   return {isVisible : (this.props.config.numResults - (this.props.config.skip * this.props.config.limit) > this.props.config.limit ? true : false)};
  }
, render : function() {
  var optionalHyperlink = function (isVisible) {
    if (isVisible)
      return (<a href="#">Next &gt;</a>);
      return;
    }
    return (
      <div className="container-left">
        {optionalHyperlink(this.state.isVisible)}
      </div>
    );
  }
});

////////////// PAGINATION COMPONENT

var Pagination = React.createClass({
  getInitialState: function() {
   return {configuration : this.props.config};
  }
, render : function (){
    return (
      <div id="container-pager">
        <PaginationContainerLeft skip={this.state.configuration.skip}/>
        <PaginationContainerRight config={this.state.configuration} />
    </div>
    )
  }
});


React.render(
  <Pagination config={myData}/>,
  document.getElementById('pagination')
);
