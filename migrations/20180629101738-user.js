'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('user', {
    id: {
      type: 'int',
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: 'string',
      length: 40,
      notNull: true
    },
    lastname: {
      type: 'string',
      length: 40,
      notNull: true
    },
    email: {
      type: 'string',
      length: 50,
      uniqueIndex: true,
      notNull: true
    },
    password: {
      type: 'string',
      notNull: true
    },
    spot_id: {
      type: 'int',
      unsigned: true,
      foreignKey: {
        name: 'spot_to_user',
        table: 'spot',
        rules: {
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    },
    there: {
      type: 'boolean',
      defaultValue: false
    }
  }, callback);

  db.addForeignKey('user', 'spot', 'user_spot_foreign_id',
    {
      'spot_id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
  return null;
};

exports.down = function (db, callback) {
  db.dropTable('user');
  return null;
};

exports._meta = {
  "version": 1
};
