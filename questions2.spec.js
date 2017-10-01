'use strict';

describe('javascript-Basecall', function() {

  // la fonction doit retourner un nombre
  it('return the argument passed as the only parameter', function() {
    var result = getArgument('bonjour');
    expect(result).toEqual('bonjour');
  });

  it('return the argument passed as the second parameter', function() {
    var result = getSecondArgument('bonjour', 'tout le monde');
    expect(result).toEqual('tout le monde');
  });

  it('return an array including both passed arguments', function() {
    var result = getArgumentsArray(302, 404);
    expect(result.indexOf(302)).toBeGreaterThan(-1);
    expect(result.indexOf(404)).toBeGreaterThan(-1);
  });

  it('return the sum of both arguments', function() {
    var result = getArgumentsSum(302, 404);
    expect(result).toEqual(706);
  });

  it('return a string that concatenate both arguments', function() {
    var result = getArgumentsConcat(302, 404);
    expect(result).toEqual('302404');
  });

  it('return a string that concatenate both arguments', function() {
    var result = getArgumentsConcat(302, 404);
    expect(result).toEqual('302404');
  });

  it('return true (boolean) if first argument is greater than the second one, otherwise return false', function() {
    var result = getFirstGreaterThanSecond(302, 404);
    expect(result).toEqual(false);
    result = getFirstGreaterThanSecond(404, 404);
    expect(result).toEqual(false);
    result = getFirstGreaterThanSecond(404, 302);
    expect(result).toEqual(true);
  });

  it('return true (boolean) if second argument is in between first and third one, otherwise return false', function() {

    var result = getSecondInBetweenFirstAndThird(302, 404, 606);
    expect(result).toEqual(true);

    result = getSecondInBetweenFirstAndThird(604, 404, 303);
    expect(result).toEqual(true);

    result = getSecondInBetweenFirstAndThird(404, 404, 303);
    expect(result).toEqual(false);

    result = getSecondInBetweenFirstAndThird(101, 302, 302);
    expect(result).toEqual(false);

    result = getSecondInBetweenFirstAndThird(101, 302, 102);
    expect(result).toEqual(false);

    result = getSecondInBetweenFirstAndThird(404, 302, 401);
    expect(result).toEqual(false);

  });

  it('return the person\'s firstName property value', function() {

    var obj = {
      firstName: 'toto'
    };
    var result = getFirstName(obj);
    expect(result).toEqual(obj.firstName);

  });

  it('return the sum of all scores', function() {

    var scores = [33, 102, 203, 401, 5, 2, 4, 5, 7, 1, 18];
    var result = getScoresSum(scores);
    expect(result).toEqual(781);

  });

  it('return the sum of each person\'age listed in the argument', function() {

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
    var result = getAgeSum(list);
    expect(result).toEqual(110);

  });

  it('return an array containing all person\'s names', function() {

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
    var result = getNamesArray(list);
    console.log(result.indexOf('a'));
    console.log(result.indexOf('b'));
    console.log(result.indexOf('c'));
    console.log(result.indexOf('d'));
    expect(result.indexOf('a')).toBeGreaterThan(-1);
    expect(result.indexOf('b')).toBeGreaterThan(-1);
    expect(result.indexOf('c')).toBeGreaterThan(-1);
    expect(result.indexOf('d')).toBeGreaterThan(-1);

  });

  it('return an array containing all person\'s names', function() {

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
    var result = getAllYoungerThan30(list);
    expect(result.length).toEqual(2);
    expect(result[0].age).toBeGreaterThan(-1);
    expect(result[1].age).toBeGreaterThan(-1);

  });

});
