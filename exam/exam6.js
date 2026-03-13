function firstUniqueChar(str) {
    const freq = {};
    for (const ch of str) {
      const lower = ch.toLowerCase();
      freq[lower] = (freq[lower] || 0) + 1;
    }
    for (const ch of str) {
      if (freq[ch.toLowerCase()] === 1) return ch;
    }
    return null;
  }

//Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc'));