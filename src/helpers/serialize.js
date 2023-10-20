function serialize(obj) {
  let queryString = '';
  // eslint-disable-next-line no-restricted-syntax, guard-for-in, prefer-const
  for (let key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }

  return queryString;
}

export default serialize;
