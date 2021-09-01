const canPaint = (painter) => ({
  paint: () => {
    return `Paints ${painter.color}!`
  }
});

const painter = function(color) {
  let state = {
    color
  }

  return { ...state, ...canPaint(state)};
}

const painter1 = painter("green");
console.log(painter1.paint());