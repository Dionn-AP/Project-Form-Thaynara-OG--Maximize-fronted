export function setItem(key, value) {
  return localStorage.setItem(key, value);
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}

export function clear() {
  return localStorage.clear();
}

export function getHeaders(iToken) {
  const headers = {
    headers: {
      Authorization: `Bearer ${iToken}`
    }
  };
  return headers;
}

export function nameInitial(name) {
  const compoundName = name.split(" ");
  if (compoundName.lenght > 1) {
    return name.split(" ")[0].substring(0, 1);
  } else {
    return compoundName[0].substring(0, 1)
  }
}