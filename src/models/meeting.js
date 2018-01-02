const bookshelf = require('../bookshelf');
const { Group } = require('./group');

const Meeting = bookshelf.Model.extend({
  tableName: 'meetings',
  hasTimestamps: true,

  group() {
    return this.belongsTo(Group);
  },
});

const Meetings = bookshelf.Collection.extend({
  model: Meeting,
});

module.exports.Meeting = bookshelf.model('Meeting', Meeting);
module.exports.Meetings = bookshelf.model('Meetings', Meetings);
