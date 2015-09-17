var component1 = React.createClass({displayName: "component1",
  render : function() {
    return React.DOM.span(null, 'My name is ' + this.props.nmae);
  }
});
