const chai = require('chai');
const assert = chai.assert;
const { decode } = require('../reverse-process');

describe('Decode tests', function () {
  function testing_decode(r, expected) {
    let actual = decode(r);
    assert.strictEqual(actual, expected);
  }

  it('Basic tests', function () {
    testing_decode(
      '1273409kuqhkoynvvknsdwljantzkpnmfgf',
      'uogbucwnddunktsjfanzlurnyxmx'
    );
    testing_decode('1544749cdcizljymhdmvvypyjamowl', 'mfmwhbpoudfujjozopaugcb');
    testing_decode('105860ymmgegeeiwaigsqkcaeguicc', 'Impossible to decode');
    testing_decode(
      '1122305vvkhrrcsyfkvejxjfvafzwpsdqgp',
      'rrsxppowmjsrclfljrajtybwviqb'
    );
  });
});
