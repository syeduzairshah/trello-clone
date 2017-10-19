app.factory('Card', [function() {
  function Card(cardData) {
    if (cardData) {
        this.setData(cardData);
    }else{
      this.new();
    }
  };

  Card.prototype = {
    setData: function(cardData) {
      angular.extend(this, cardData);
    },

    new: function(){
      var cardData = {
        text: '',
        status: '',
        createdAt: new Date()
      }
      this.setData(cardData);
    }
  };
  return Card;
}]);
