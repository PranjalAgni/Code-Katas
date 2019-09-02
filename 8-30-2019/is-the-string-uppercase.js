String.prototype.isUpperCase = function(s) {
  // your code here
  const charArray = this.replace(/\s+/g, '').split('');
  return charArray.every(char => {
    if (char >= 'a' && char <= 'z') {
      return false;
    }
    return true;
  });
};
