const q = require('../questions3')

describe('javascript-Recall', function() {

    it('selects elements starting with A', function() {
        var result = q.selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);
        expect(result).toEqual(['apples', 'avocados']);
    });

    it('selects elements starting with a vowel', function() {
        var result = q.selectElementsStartingWithVowel(['john', 'david', 'omar', 'fred', 'idris', 'angela']);
        expect(result).toEqual(['omar', 'idris', 'angela']);
    });

    xit('removes null values from an array', function() {
        var result = q.removeNullElements(['a', 'b', null, null, false, 0]);
        expect(result).toEqual(['a', 'b', false, 0]);
    });

    xit('removes null and false values from an array', function() {
        var result = q.removeNullAndFalseElements(['a', 'b', null, null, false, 0]);
        expect(result).toEqual(['a', 'b', 0]);
    });

    xit('reverses the letters of each element in an array', function() {
        var result = q.reverseWordsInArray(['dog', 'monkey', 'elephant', 'kayak']);
        expect(result).toEqual(['god', 'yeknom', 'tnahpele', 'kayak']);
    });

    xit('makes every possible pairing of students', function() {
        var result = q.everyPossiblePair(['Jon', 'Tyrion', 'Daenerys']);
        // sorted alphabetically
        expect(result).toEqual([
            ['Daenerys', 'Jon'],
            ['Daenerys', 'Tyrion'],
            ['Jon', 'Tyrion']
        ]);
    });

    xit('takes all elements except the first 3', function() {
        var result = q.allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(result).toEqual([4, 5, 6, 7, 8]);
    });

    xit('adds an element to the beginning of an array', function() {
        var result = q.addElementToBeginning([2, 3, 4, 5], 1);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    xit('sorts an array by the last letter of each word', function() {
        var result = q.sortByLastLetter(['Lannister', 'Stark', 'Greyjoy', 'Targaryen']);
        expect(result).toEqual(['Stark', 'Targaryen', 'Lannister', 'Greyjoy']);
    });

    xit('gets the first half of a string', function() {
        var resultOne = q.getFirstHalf('dragon');
        var resultTwo = q.getFirstHalf('snake');

        expect(resultOne).toEqual('dra');
        expect(resultTwo).toEqual('sna');
    });

    xit('makes numbers negative', function() {
        var resultOne = q.makeNegative(5);
        var resultTwo = q.makeNegative(-5);

        expect(resultOne).toEqual(-5);
        expect(resultTwo).toEqual(-5);
    });

    xit('counts elements in an array that are palindromes', function() {
        var result = q.numberOfPalindromes(['kayak', 'noon', 'khaleesi', 'hodor', 'racecar', 'abcbc', 'abcba']);
        expect(result).toEqual(4);
    });

    xit('returns the shortest word in an array', function() {
        var result = q.shortestWord(['winter', 'is', 'coming']);
        expect(result).toEqual('is');
    });

    xit('returns the longest word in an array', function() {
        var result = q.longestWord(['A', 'Lannister', 'always', 'pays', 'his', 'debts'])
        expect(result).toEqual('Lannister');
    });

    xit('sums up the numbers in an array', function() {
        var result = q.sumNumbers([1, 3, 5, 6, 2, 8]);
        expect(result).toEqual(25);
    });

    xit('repeats the elements of an array', function() {
        var result = q.repeatElements(['a', 'b', 'c']);
        expect(result).toEqual(['a', 'b', 'c', 'a', 'b', 'c']);
    });

    xit('turns a number string into a number', function() {
        var result = q.stringToNumber('3');
        expect(result).toEqual(3);
    });

    xit('calculates the average of an array of numbers', function() {
        var result = q.calculateAverage([10, 15, 25]);
        expect(result).toEqual((10 + 15 + 25) / 3);
    });

    xit('gets elements until greater than five', function() {
        var result = q.getElementsUntilGreaterThanFive([1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7]);
        expect(result).toEqual([1, 3, 5, 4, 1, 2]);
    });

    xit('converts an array to an object', function() {
        var result = q.convertArrayToObject(['Jaime', 'Lannister', 'Robb', 'Stark', 'Joffrey', 'Baratheon']);
        expect(result).toEqual({
            'Jaime': 'Lannister',
            'Robb': 'Stark',
            'Joffrey': 'Baratheon'
        });
    });

    xit('gets all letters in an array of words', function() {
        // returns sorted
        var result = q.getAllLetters(['cat', 'dog', 'fish']);
        expect(result).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
        // deals with repeated letters
        var result2 = q.getAllLetters(['cat', 'dog', 'fish', 'cat']);
        expect(result2).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
    });

    xit('swaps keys and values in an object', function() {
        var result = q.swapKeysAndValues({
            'Frodo': 'Baggins',
            'Samwise': 'Gamgee',
            'Gandalf': 'The Gray'
        });
        expect(result).toEqual({
            'Baggins': 'Frodo',
            'Gamgee': 'Samwise',
            'The Gray': 'Gandalf'
        });
    });

    xit('adds together keys and values', function() {
        var result = q.sumKeysAndValues({
            5: 3,
            1: 7
        });
        expect(result).toEqual(16);
    });

    xit('removes capital letters from a string', function() {
        var result = q.removeCapitals('Hello Kitty');
        expect(result).toEqual('ello itty');
    });

    xit('rounds up a number', function() {
        var result = q.roundUp(4.3942);
        expect(result).toEqual(5);
    });

    xit('formats a date nicely', function() {
        var result = q.formatDateNicely(new Date('2015-03-04'));
        expect(result).toEqual('04/03/2015');
    });

    xit('gets the domain name from an email address', function() {
        var result = q.getDomainName('spike@makersacademy.com');
        expect(result).toEqual('makersacademy');
        var result2 = q.getDomainName('spike@ssh.makersacademy.com');
        expect(result2).toEqual('ssh.makersacademy');
    });

    xit('titleizes a string', function() {
        var result = q.titleize('the lion the witch and the wardrobe');
        expect(result).toEqual('The Lion the Witch and the Wardrobe');
        var result2 = q.titleize('the lion the witch. and the wardrobe');
        expect(result2).toEqual('The Lion the Witch. And the Wardrobe');
    });

    xit('checks a string for special characters', function() {
        var resultOne = q.checkForSpecialCharacters('ABCdef123');
        var resultTwo = q.checkForSpecialCharacters('ABC@dsklfj!');

        expect(resultOne).toBe(false);
        expect(resultTwo).toBe(true);
    });

    xit('finds the square root of a number', function() {
        var resultOne = q.squareRoot(9);
        var resultTwo = q.squareRoot(3);

        expect(resultOne).toEqual(3.0);
        expect(resultTwo).toEqual(1.7320508075688772);
    });

    xit('finds the factorial of a number', function() {
        var result = q.factorial(5);
        expect(result).toEqual(120); // = q.5 * 4 * 3 * 2 * 1
    });

    xit('finds all possible anagrams of a word', function() {
        var result = q.findAnagrams('mad');
        var expectedAnagrams = ["adm", "amd", "dam", "dma", "mad", "mda"];
        for (var anagram of expectedAnagrams) {
            expect(result).toContain(anagram);
        }
        var result2 = q.findAnagrams('ma');
        var expectedAnagrams2 = ["am", "ma"];
        for (var anagram of expectedAnagrams2) {
            expect(result2).toContain(anagram);
        }
    });

    xit('converts Fahrenheit to Celsius rounding to the nearest integer', function() {
        var resultOne = q.convertToCelsius(32);
        var resultTwo = q.convertToCelsius(55);

        expect(resultOne).toEqual(0);
        expect(resultTwo).toEqual(13);
    });

    xit('changes each letter of an array into its position in the alphabet', function() {
        var result = q.letterPosition(['H', 'e', 'l', 'l', 'o', 'k', 'i', 't', 't', 'y']);
        expect(result).toEqual([8, 5, 12, 12, 15, 11, 9, 20, 20, 25]);
    });


});
