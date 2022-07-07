function cookieParser(cookie) {
  const cookies = {};

  if (!cookie) {
    return cookies;
  }

  const cookieString = cookie.split(';').map((item) => item.split('='));

  for (const item of cookieString) {
    cookies[item[0]] = item[1];
  }

  return cookies;
}

module.exports = cookieParser;
