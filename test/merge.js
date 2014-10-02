/* global describe, it, after, before, afterEach, beforeEach */

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var should = require('should');
var gutil = require('gulp-util');

module.exports = function(git, util){

  it('should merge branches', function(done){
    var opt = { cwd: './test/repo' };
    git.merge('testBranch', opt, function(){
      fs.readFileSync(util.testCommit)
        .toString('utf8')
        .should.match(/initial commit/);

      done();
    });
  });
};
