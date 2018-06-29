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
  // db.addForeignKey('iXspots.user', 'iXspots.spot', 'user_spot_foreign_id',
  // {
  //   'spot_id': 'id'
  // },
  // {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'RESTRICT'
  // }, callback);
  db.createTable('spot', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true
    },
    name: {
      type: 'string',
      length: 50,
      notNull: true
    },
    going: {
      type: 'int',
      notNull: true
    },
    there: {
      type: 'int',
      notNull: true
    },
    address: {
      type: 'string',
      notNull: true
    },
    category: {
      type: 'string',
      length: 50,
      notNull: true
    },
    logoUrl: {
      type: 'string',
      notNull: true
    },
    imageUrl: {
      type: 'string',
      notNull: true
    },
  }, callback);

  return null;
};

exports.down = function (db, callback) {
  db.dropTable('spot');
  return null;
};

exports._meta = {
  "version": 1
};
