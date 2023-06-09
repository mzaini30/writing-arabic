export default function (text) {
  const conversionTable = {
    "'": "\u0621",
    "|": "\u0622",
    ">": "\u0623",
    "&": "\u0624",
    "<": "\u0625",
    "}": "\u0626",
    A: "\u0627",
    b: "\u0628",
    p: "\u0629",
    t: "\u062A",
    v: "\u062B",
    j: "\u062C",
    H: "\u062D",
    x: "\u062E",
    d: "\u062F",
    "*": "\u0630",
    r: "\u0631",
    z: "\u0632",
    s: "\u0633",
    $: "\u0634",
    S: "\u0635",
    D: "\u0636",
    T: "\u0637",
    Z: "\u0638",
    E: "\u0639",
    g: "\u063A",
    _: "\u0640",
    f: "\u0641",
    q: "\u0642",
    k: "\u0643",
    l: "\u0644",
    m: "\u0645",
    n: "\u0646",
    h: "\u0647",
    w: "\u0648",
    Y: "\u0649",
    y: "\u064A",
    F: "\u064B",
    N: "\u064C",
    K: "\u064D",
    a: "\u064E",
    u: "\u064F",
    i: "\u0650",
    "~": "\u0651",
    o: "\u0671",
    P: "\u067E",
    J: "\u06A4",
    G: "\u06AF",
  };
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i]; //.toLowerCase();
    if (conversionTable[char]) {
      result += conversionTable[char];
    } else {
      result += text[i];
    }
  }
  return result;
}
