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
      <p>Pagination here </p>
        {optionalHyperlink(this.state.isVisible)}
      </div>
    );
  }
});

var Pagination = React.createClass({
  getInitialState: function() {
   return {configuration : this.props.config};
  }
, render : function (){
    return (
      <PaginationContainerLeft skip={this.state.configuration.skip}/>
    )
  }
});

var myData = {
  skip : 0
, limit : 30
, numResults : 2000
};

React.render(
  <Pagination  config={myData}/>,
  document.getElementById('pagination')
);
