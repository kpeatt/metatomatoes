Metatom.GameController = Ember.ArrayController.extend({
  actions: {
    createGame: function () {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      var positive = this.get('newStatus');
      if (!title.trim()) { return; }

      // Create the new Game model
      var game = this.store.createRecord('game', {
        title: title,
        isPositive: positive,
        score: 8
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      game.save();
    },
    isPositive: function(key, value){
      var model = this.get('model');

      if (value === undefined) {
        // property being used as a getter
        return model.get('isCompleted');
      } else {
        // property being used as a setter
        model.set('isCompleted', value);
        model.save();
        return value;
      }
      }.property('model.isCompleted')
  },
  totalRotten: function() {
    return this.filterBy('isPositive', false).get('length');
  }.property('@each.isPositive'),
  totalFresh: function() {
    return this.filterBy('isPositive', true).get('length');
  }.property('@each.isPositive')
});