const q = require('../questions2.js')

xdescribe('javascript-Basecall', function() {

  // la fonction doit retourner un nombre
  it('return the argument passed as the only parameter', function() {
    var result = q.getArgument('bonjour');
    expect(result).toEqual('bonjour');
  });

  xit('return the argument passed as the second parameter', function() {
    var result = q.getSecondArgument('bonjour', 'tout le monde');
    expect(result).toEqual('tout le monde');
  });

  xit('return an array including both passed arguments', function() {
    var result = q.getArgumentsArray(302, 404);
    expect(result.indexOf(302)).toBeGreaterThan(-1);
    expect(result.indexOf(404)).toBeGreaterThan(-1);
  });

  xit('return the sum of both arguments', function() {
    var result = q.getArgumentsSum(302, 404);
    expect(result).toEqual(706);
  });

  xit('return a string that concatenate both arguments', function() {
    var result = q.getArgumentsConcat(302, 404);
    expect(result).toEqual('302404');
  });

  xit('return a string that concatenate both arguments', function() {
    var result = q.getArgumentsConcat(302, 404);
    expect(result).toEqual('302404');
  });

  xit('return true (boolean) if first argument is greater than the second one, otherwise return false', function() {
    var result = q.getFirstGreaterThanSecond(302, 404);
    expect(result).toEqual(false);
    result = q.getFirstGreaterThanSecond(404, 404);
    expect(result).toEqual(false);
    result = q.getFirstGreaterThanSecond(404, 302);
    expect(result).toEqual(true);
  });

  xit('return true (boolean) if second argument is in between first and third one, otherwise return false', function() {

    var result = q.getSecondInBetweenFirstAndThird(302, 404, 606);
    expect(result).toEqual(true);

    result = q.getSecondInBetweenFirstAndThird(604, 404, 303);
    expect(result).toEqual(true);

    result = q.getSecondInBetweenFirstAndThird(404, 404, 303);
    expect(result).toEqual(false);

    result = q.getSecondInBetweenFirstAndThird(101, 302, 302);
    expect(result).toEqual(false);

    result = q.getSecondInBetweenFirstAndThird(101, 302, 102);
    expect(result).toEqual(false);

    result = q.getSecondInBetweenFirstAndThird(404, 302, 401);
    expect(result).toEqual(false);

  });

  xit('return the person\'s firstName property value', function() {

    var obj = {
      firstName: 'toto'
    };
    var result = q.getFirstName(obj);
    expect(result).toEqual(obj.firstName);

  });

  xit('return the sum of all scores', function() {

    var scores = [33, 102, 203, 401, 5, 2, 4, 5, 7, 1, 18];
    var result = q.getScoresSum(scores);
    expect(result).toEqual(781);

  });

  xit('return the sum of each person\'age listed in the argument', function() {

    var list = [{
      name: 'a',
      age: 27
    },{
      name: 'b',
      age: 18
    },{
      name: 'c',
      age: 32
    },{
      name: 'd',
      age: 33
    }];
    var result = q.getAgeSum(list);
    expect(result).toEqual(110);

  });

  xit('return an array containing all person\'s names', function() {

    var list = [{
      name: 'a',
      age: 27
    },{
      name: 'b',
      age: 18
    },{
      name: 'c',
      age: 32
    },{
      name: 'd',
      age: 33
    }];
    var result = q.getNamesArray(list);
    expect(result.indexOf('a')).toBeGreaterThan(-1);
    expect(result.indexOf('b')).toBeGreaterThan(-1);
    expect(result.indexOf('c')).toBeGreaterThan(-1);
    expect(result.indexOf('d')).toBeGreaterThan(-1);

  });

  xit('return an array containing all person\'s names', function() {

    var list = [{
      name: 'a',
      age: 27
    },{
      name: 'b',
      age: 18
    },{
      name: 'c',
      age: 32
    },{
      name: 'd',
      age: 33
    }];
    var result = q.getAllYoungerThan30(list);
    expect(result.length).toEqual(2);
    expect(result[0].age).toBeGreaterThan(-1);
    expect(result[1].age).toBeGreaterThan(-1);

  });

});
