app.factory('List', ['Card', function(Card) {

  function List(listData) {
    if (listData) {
        this.setData(listData);
    }else{
      this.new();
    }
  };

  List.sortIndex = 0;

  List.prototype = {
    setData: function(listData) {
      angular.extend(this, listData);
    },

    new: function(){
      var listData = {
        name: 'Add a List',
        cards: [],
        sortIndex: List.sortIndex
      }
      this.setData(listData);
      List.sortIndex++;
    },

    addCard: function(){
      this.cards.push(new Card());
    },

    dropCallback: function(index, item, external, type){
      return new Card(item);
    }


  };
  return List;
}]);
