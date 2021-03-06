/**
 * @copyright Maichong Software Ltd. 2018 http://maichong.it
 * @date 2018-01-06
 * @author Liang <liang@maichong.it>
 */

const { ObjectID } = require('bson');

exports.data = {
  name: 'Alaska',
  license: 'MIT',
  company: 'Maichong',
  author: 'Liang',
  nodejs: true,
  lang: 'nodejs',
  tags: ['web', 'app'],
  numbers: [0, 15, 20],
  empty: [],
  contributors: [
    { name: 'Liang', email: 'liang@maichong.it', url: 'https://github.com/liangxingchen' },
    { name: 'Maichong Cloud', email: 'support@maichong.io', url: 'https://maichong.io' }
  ],
  obj: {},
  object: { attr: 1, foo: 'bar' },
  regexp: '/Alaska/',
  from: 2016,
  awesome: true,
  bugs: 0,
  zero: 0,
  one: 1,
  no: false,
  others: null,
  undefined: undefined,
  objectid: new ObjectID('5eec088b6032cb16eb2418ba'),
  ids: [new ObjectID('5eec088b6032cb16eb2418ba'), new ObjectID('5eec088b6032cb16eb2418bb')]
};

exports.parent = {
  platform: 'nodejs',
  products: [exports.data]
};

exports.top = {
  name: 'Maichong',
  address: 'Zhengzhou',
  since: 2013,
  platforms: [exports.parent]
};
