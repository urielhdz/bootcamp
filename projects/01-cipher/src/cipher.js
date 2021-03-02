const cipher = {
  // ...
  encode(offset, str) {
    if (!offset || !str) throw new TypeError('Wrong arguments');
    return str.split('').map((c) => {
      const newChar = ((c.charCodeAt() - 65 + offset) % 26) + 65;
      return String.fromCharCode(newChar);
    }).join('');
  },

  decode(offset, str) {
    if (!offset || !str) throw new TypeError('Wrong arguments');
    const regulatedOffset = offset % 26;
    return str.split('').map((c) => {
      let newChar = c.charCodeAt() - 65 - regulatedOffset;
      if (newChar < 0) newChar = 26 + newChar;
      return String.fromCharCode(newChar + 65);
    }).join('');
  },
};

export default cipher;
