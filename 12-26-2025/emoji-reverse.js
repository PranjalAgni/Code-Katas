/*
The Yeti sent party invitation emails, but they all went to spam! 🎉➡️🗑️

After investigating, Yeti discovered the email system's spam filter uses a string 
reversal function to detect suspicious patterns. Something's wrong with it, and now 
the filter thinks all the party invitations are malicious. Nobody knows about the party!

Fix the string reversal function so the spam filter works correctly.
*/

function reverseString(str) {
  return [...str].reverse().join('');
}
