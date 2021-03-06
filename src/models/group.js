const bookshelf = require('../bookshelf');
const { Invitation } = require('./invitation');
const { Meeting } = require('./meeting');

const Group = bookshelf.Model.extend({
  tableName: 'groups',
  hasTimestamps: true,

  users() {
    return this.belongsToMany('User', 'users_groups');
  },

  invitations() {
    return this.hasMany(Invitation);
  },

  meetings() {
    return this.hasMany(Meeting);
  },
}, {
  create(data, options) {
    return this.forge(data).save(null, options);
  },

  byID(id) {
    return this.forge().query({ where: { id } }).fetch();
  },
});

const Groups = bookshelf.Collection.extend({
  model: Group,
});

module.exports.Group = bookshelf.model('Group', Group);
module.exports.Groups = bookshelf.model('Groups', Groups);
