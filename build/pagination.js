var componentPaginationLeft = React.createClass({displayName: "componentPaginationLeft",
  render : function() {
    React.createElement("div", {class: "container-left"}, 
      React.createElement("a", {href: "#"}, "Previous")
    )
  }
});


React.render(
  React.createElement(componentPaginationLeft, {}),
  document.getElementById('tag2')
);
