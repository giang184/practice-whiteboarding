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

console.log("hello there".split(" "));