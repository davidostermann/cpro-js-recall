const q1  = require('../questions1')

describe('javascript-Basecall', function() {

  // la fonction doit retourner une chaine de caractère
  it('return a string', function () {
    var result = q1.getString();
    expect(result).toEqual(jasmine.any(String));
  });
  
  // la fonction doit retourner un nombre
  it('return a number', function() {
    var result = q1.getNumber();
    expect(result).toEqual(jasmine.any(Number));
  });

  // la fonction doit retourner un booléen
  it('return a boolean', function() {
    var result = q1.getBoolean();
    expect(result).toEqual(jasmine.any(Boolean));
  });

  // la fonction doit retourner un tableau
  xit('return an array', function() {
    var result = q1.getArray();
    expect(result).toEqual(jasmine.any(Array));
  });

  // la fonction doit retourner BONJOUR sous forme de string
  xit('return boujour and it should be uppercase', function() {
    var result = q1.getBonjourUppercase();
    expect(result).toEqual('BONJOUR');
  });

  // la fonction doit retourner 123 sous forme de string
  xit('return 123 and it should be a string', function() {
    var result = q1.get123String();
    expect(result).toEqual('123');
  });

  // la fonction doit retourner un tableau avec les 3 elements suivants : foo, bar et buzz
  // les elements doivent être retournés dans l'ordre où ils sont cités
  xit('return an array with 3 strings : foo, bar and buzz', function() {
    var result = q1.getArrayWithRequiredItems();
    expect(result).toEqual(['foo', 'bar', 'buzz']);
  });

  // la fonction doit retourner un tableau avec 5 nombres
  xit('return an array with 5 numbers', function() {
    var result = q1.getArrayWith5Numbers();
    result.map( function(item) {
      expect(item).toEqual(jasmine.any(Number));
    });
    expect(result.length).toEqual(5);
  });

  // la fonction doit retourner un objet avec une clé A and une clé B
  xit('return an object with a key A and a key B', function() {
    var result = q1.getObjectWithRequiredKeys();
    expect(result.A).not.toBeUndefined();
    expect(result.B).not.toBeUndefined();
  });

  // la fonction doit retourner un objet avec une clé A and a key B qui retournent respectivement 'foo' et 'bar'
  xit('return an object with a key A with \'foo\' as value and a key B with \'bar\' as value', function() {
    var result = q1.getObjectWithRequiredKeys();
    expect(result.A).toEqual('foo');
    expect(result.B).toEqual('bar');
  });

  // la fonction doit retourner un objet avec une clé A avec comme valeur un tableau de 5 nombres
  xit('return an object with required key A that value is an array with 5 numbers', function() {
    var result = q1.getObjectWithArrayWith5Numbers();
    expect(result.A).toEqual(jasmine.any(Array));

    result.A.map( function(item) {
      expect(item).toEqual(jasmine.any(Number));
    });
    expect(result.A.length).toEqual(5);
  });

  // la fonction doit retourner un tableau comprenant 3 objets.
  // chaque objet doit avoir une clé firstName et une clé lastName
  xit('return an array with 3 objects. Each object have to have a key lastName and a key firstName', function() {
    var result = q1.getArrayWith3ObjectsWithSpecificFormat();
    result.map( function(item) {
      expect(item.firstName).not.toBeUndefined();
      expect(item.lastName).not.toBeUndefined();
    });
  });

});
