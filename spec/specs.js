// var findAndReplace = function(stringToSearch, wordToFind, replacement);

describe('findAndReplace', function() {
    it('handles a single-character replacement found in a single-character input', function() {
        expect(findAndReplace('a', 'a', 'b')).to.equal('b');
    });

    it('handles a single-character replacement not found in a single-character input', function() {
        expect(findAndReplace('a', 'i', 'b')).to.equal('a');
    });

    it('handles a single-word replacement found in a single-word input', function() {
        expect(findAndReplace('the', 'the', 'you')).to.equal('you');
    });

    it('handles a single-word replacement not found in a single-word input', function() {
        expect(findAndReplace('the', 'for', 'you')).to.equal('the');
    });

    it('handles a single-word replacement found in a multi-word input', function() {
        expect(findAndReplace('the quick brown fox', 'the', 'you')).to.equal('you quick brown fox');
    });

    it('handles a single-word replacement not found in a multi-word input', function() {
        expect(findAndReplace('the quick brown fox', 'dog', 'you')).to.equal('the quick brown fox');
    });

    it('handles punctuation', function() {
        // Writing out the assertion with vars to make it look cleaner
        var stringToSearch = 'the quick brown fox jumped over the lazy dog!';
        var wordToFind = 'dog';
        var replacement = 'cat';
        var expectedString = 'the quick brown fox jumped over the lazy cat!';

        expect(
            findAndReplace(stringToSearch, wordToFind, replacement)
        ).to.equal(expectedString);
    });

    it('handles mixed case', function() {
        // Writing out the assertion with vars to make it look cleaner
        var stringToSearch = 'tHE qUIck brown fOx jumped ovER the lazy DoG!';
        var wordToFind = 'the';
        var replacement = 'a';
        var expectedString = 'a qUIck brown fOx jumped ovER a lazy DoG!';

        expect(
            findAndReplace(stringToSearch, wordToFind, replacement)
        ).to.equal(expectedString);
    })
});
