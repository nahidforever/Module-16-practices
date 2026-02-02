let str = "x-ray Xmin";

if (str.includes("x")) {
  str = str.replace("x", "y");
}
console.log(str);

if (str.includes("X")) {
  str = str.replace("X", "Y");
}
console.log(str);