// var replace = function(stringToSearch, wordToFind, replacement);

describe('replace', function() {
    it('handles a single-character replacement found in a single-character input', function() {
        expect(replace('a', 'a', 'b')).to.equal('b');
    });

    it('handles a single-character replacement not found in a single-character input', function() {
        expect(replace('a', 'i', 'b')).to.equal('a');
    });

    it('handles a single-word replacement found in a single-word input', function() {
        expect(replace('the', 'the', 'you')).to.equal('you');
    });

    it('handles a single-word replacement not found in a single-word input', function() {
        expect(replace('the', 'for', 'you')).to.equal('the');
    });

    it('handles a single-word replacement found in a multi-word input', function() {
        expect(replace('the quick brown fox', 'the', 'you')).to.equal('you quick brown fox');
    });

    it('handles a single-word replacement not found in a multi-word input', function() {
        expect(replace('the quick brown fox', 'dog', 'you')).to.equal('the quick brown fox');
    });

    it('handles punctuation', function() {
        // Writing out the assertion with vars to make it look cleaner
        var stringToSearch = 'the quick brown fox jumped over the lazy dog!';
        var wordToFind = 'dog';
        var replacement = 'cat';
        var expectedString = 'the quick brown fox jumped over the lazy cat!';

        expect(
            replace(stringToSearch, wordToFind, replacement)
        ).to.equal(expectedString);
    });

    it('handles mixed case', function() {
        // Writing out the assertion with vars to make it look cleaner
        var stringToSearch = 'tHE qUIck brown fOx jumped ovER the lazy DoG!';
        var wordToFind = 'the';
        var replacement = 'a';
        var expectedString = 'a qUIck brown fOx jumped ovER a lazy DoG!';

        expect(
            replace(stringToSearch, wordToFind, replacement)
        ).to.equal(expectedString);
    })
});












// describe('format', function() {
//     it("handles uppercase", function() {
//         expect(format("SANTACLAUS")).to.equal("santaclaus");
//     });
//
//     it("handles whitespace", function() {
//         expect(format("SANTA CLAUS")).to.equal("santaclaus");
//         expect(format("there are lots of spaces")).to.equal("therearelotsofspaces");
//     });
//
//     it("handles special characters", function() {
//         expect(format("$ANTA CLAUS number 1!!")).to.equal("antaclausnumber1");
//     });
// });
