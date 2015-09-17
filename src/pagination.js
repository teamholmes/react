var componentPaginationLeft = React.createClass({
  render : function() {
    <div class='container-left'>
      <a href='#'>Previous</a>
    </div>
  }
});


React.render(
  React.createElement(componentPaginationLeft, {}),
  document.getElementById('tag2')
);
