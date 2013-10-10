Metatom.Game = DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  isPositive: DS.attr('boolean')
});

Metatom.Game.FIXTURES = [
 {
   id: 1,
   title: 'GTA',
   score: 8,
   isPositive: true
 },
 {
   id: 2,
   title: 'Halo',
   score: 4,
   isPositive: false
 },
 {
   id: 3,
   title: 'Kingdom Hearts',
   score: 6,
   isPositive: true
 }
];