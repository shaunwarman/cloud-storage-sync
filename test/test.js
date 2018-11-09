const test = require('ava');

const { copyFile } = require('..');

test('returns itself', t => {
  t.true(typeof copyFile === 'function');
});
