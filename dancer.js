const dancer = () => {
  return () => ({
    samba: () => {
      return 'dancer can samba!',  () => ({
        tango: () => {
          return 'dancer can tango!';
        }
      })
    }
  })
}

let dancer1 = dancer()().samba;
console.log(dancer1)

const dancer = (name) => {
  return () => ({
    samba: () => {
      return `${name} can samba!`
    }
  })
}

const dancer3 = dancer("dancer")()
console.log(dancer3.samba())


const dancer = (name) => {
  return () => ({
    samba: () =>{
      return `${name} sambas!`;
    },
    tango: () =>{
      return `${name} tangos`;
    }
  })
}

let dancer2 = dancer("Andrew");
console.log(dancer2.tango());