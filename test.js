'use strict';

var assert = require('assert');
var gcf = require('./');

describe('gcf()', function(){
  it('finds out that 9 should be 3x3', function(){
    var val = gcf(9);
    assert.equal(3, val[0]);
    assert.equal(3, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 25 should be 5x5', function(){
    var val = gcf(25);
    assert.equal(5, val[0]);
    assert.equal(5, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 36 should be 6x6', function(){
    var val = gcf(36);
    assert.equal(6, val[0]);
    assert.equal(6, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 24 should be 4x6', function(){
    var val = gcf(24);
    assert.equal(4, val[0]);
    assert.equal(6, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 15 should be 3x5', function(){
    var val = gcf(15);
    assert.equal(3, val[0]);
    assert.equal(5, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 12 should be 3x4', function(){
    var val = gcf(12);
    assert.equal(3, val[0]);
    assert.equal(4, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 2 should be 1x2', function(){
    var val = gcf(2);
    assert.equal(1, val[0]);
    assert.equal(2, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 4 should be 2x2', function(){
    var val = gcf(4);
    assert.equal(2, val[0]);
    assert.equal(2, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 35 should be 5x7', function(){
    var val = gcf(35);
    assert.equal(5, val[0]);
    assert.equal(7, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 7 should be 2x4', function(){
    var val = gcf(7);
    assert.equal(2, val[0]);
    assert.equal(4, val[1]);
  });
});

describe('gcf()', function(){
  it('finds out that 13 should be 2x7', function(){
    var val = gcf(13);
    assert.equal(2, val[0]);
    assert.equal(7, val[1]);
  });
});

describe('gcf() 1-10000', function(){
  it('runs gcf for the numbers 1-10000 and doesn\'t throw', function(){
    for (var i = 0; i < 10000; i++) gcf(i);
  });
});
