class UrlShortener {
  constructor() {
    this.urlVsShortCodeMap = new Map();
    this.shortCodeVsUrlMap = new Map();
    // this.numCharacters = 0;
  }

  generateCode() {
    const numCharacters = Math.floor(Math.random() * 4);
    let code = '';
    for (let idx = 0; idx < numCharacters; idx++) {
      const charIndex = Math.floor(Math.random() * 26);
      code += String.fromCharCode(97 + charIndex);
    }

    return code;
  }

  prefixHost(code) {
    return `short.ly/${code}`;
  }

  shorten(longURL) {
    if (this.urlVsShortCodeMap.has(longURL))
      return this.prefixHost(this.urlVsShortCodeMap.get(longURL));
    let code = this.generateCode();
    while (this.shortCodeVsUrlMap.has(code)) {
      code = this.generateCode();
    }
    this.urlVsShortCodeMap.set(longURL, code);
    this.shortCodeVsUrlMap.set(code, longURL);
    return this.prefixHost(code);
  }

  redirect(shortURL) {
    if (!shortURL) return null;
    const code = shortURL.split('/')[1];
    return this.shortCodeVsUrlMap.get(code);
  }
}

const testFormat = (string) => {
  console.log(string);
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
