// __tests__/convert.test.js
'use strict';

jest
  .dontMock('fs')
  .dontMock('jquery');
  
const convert = require('./convert.js');

expect(pgne2d(Q)).toBe(D);

test('pgne2g', () => {
  require('../displayUser');
  const $ = require('jquery');

  var result = pgne2g("Q2");

  expect(result).toEqual('D2');
});