app.factory('Board', ['List', function(List) {
  function Board(boardData) {
    if (boardData) {
        this.setData(boardData);
    }else{
      this.new();
    }
  };

  Board.prototype = {
    setData: function(boardData) {
      angular.extend(this, boardData);
    },

    new: function(){
      var boardData = {
        lists: []
      }
      this.setData(boardData);
    },

    addList: function(){
      this.lists.push(new List());
    },

    dropCallback: function(index, item, external, type){
      return new List(item);
    }


  };
  return Board;
}]);
