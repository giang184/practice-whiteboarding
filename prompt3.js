//"aaabccdddda"

const compression = (word) => {
  let result = "";
  if(word.length === 0) {
    return "";
  }
  else { 
    //compress and package the beginning
    //call the recursive function with the rest.
    let begin = '3d';
    let end = word.substring(3);

    return begin + compression(end);
  }
  
}

console.log(compression("aaabccdddda"))
console.log(compression(""))