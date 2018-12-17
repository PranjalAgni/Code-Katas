function domainName(url) {
  //your code here
  console.log('Domain', url);
  break_url = url.split('.');
  console.log(break_url[0].split('//'));
  console.log(break_url);
  if (url[0] === 'h') {
    return break_url[0].split('//')[1];
  } else {
    return break_url[1];
  }
}



console.log(domainName('http://www.google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://youtube.com'), 'youtube');
