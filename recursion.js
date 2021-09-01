const reverse = (string) => {
  if (string === "") {
    return "";
  } else if (string.split(" ").length === 1){
    return string;
  } else {
    splitString = string.split(" ");
    return `${splitString.pop()} ${reverse(splitString.join(' '))}`;
  }
}
console.log(reverse("hello there my friend"));

const concat = (x) => {
  if(x<1) {
    return "";
  } else if (x===1) {
    return "red green refactor";
  } else {
    return `red green refactor ` + concat(x-1);
  }
}

console.log(concat(4));