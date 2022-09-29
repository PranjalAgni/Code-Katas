class UrlShortener {
  constructor() {
    this.urlVsShortCodeMap = new Map();
    this.shortCodeVsUrlMap = new Map();
  }

  generateCode() {}
  shorten(longURL) {
    if (this.urlVsShortCodeMap.has(longURL))
      return this.urlVsShortCodeMap.get(longURL);
    const code = this.generateCode();
    return shortURL;
  }

  redirect(shortURL) {
    return longURL;
  }
}

const testFormat = (string) => {
  console.log(
    /^short.ly\/[a-z]{1,4}$/.test(string),
    `"${string}" url format is incorrect: should starts with "short.ly/", with length<14 and only lowercase letters a the end.`
  );
};

const urlShortener = new UrlShortener();
let shortUrl1 = urlShortener.shorten(
  'https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e'
);
testFormat(shortUrl1);
let shortUrl2 = urlShortener.shorten(
  'https://www.codewars.com/kata/5efae11e2d12df00331f91a6'
);
testFormat(shortUrl2);
console.log(
  urlShortener.redirect(shortUrl1),
  'https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e'
);
console.log(
  urlShortener.redirect(shortUrl2),
  'https://www.codewars.com/kata/5efae11e2d12df00331f91a6'
);

// const urlShortener = new UrlShortener();
// let shortUrl1 = urlShortener.shorten(
//   'https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f'
// );
// testFormat(shortUrl1);
// let shortUrl2 = urlShortener.shorten(
//   'https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f'
// );
// testFormat(shortUrl2);
// console.log(shortUrl1, shortUrl2, 'Should work with same long URLs');
// console.log(
//   urlShortener.redirect(shortUrl1),
//   'https://www.codewars.com/kata/5ef9c85dc41b4e000f9a645f'
// );
