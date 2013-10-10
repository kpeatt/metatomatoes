Metatom.Router.map(function () {
  this.resource('game', { path: '/' });
});

Metatom.GameRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('game');
  }
});

Metatom.GameIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('game');
  }
});