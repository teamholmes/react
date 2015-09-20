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
   return {data : this.props.config};
  }
, render : function (){
    return (
      <p>HELLdddO1321</p>
    )
  }
});

React.render(
  <Pagination  config="{skip:0,limit:30,numResults:200}"/>,
  document.getElementById('pagination')
);
