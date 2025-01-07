//our item could look like this
//{name: 'item name', awesomeLevel: 3}

//what would be our box to hold our items? an array
const animals = [
    {
      name: 'Whale',
      awesomeLevel: 6,
      lameness: 3,
      isDomestic: true,
      numbers: [1, 2, 3],
    },
    {
      name: 'Penguin',
      awesomeLevel: 7,
      lameness: 1,
      isDomestic: false,
      numbers: [4, 5, 6],
    },
    {
      name: 'Gerbil',
      awesomeLevel: 7,
      lameness: 2,
      isDomestic: true,
      numbers: [7, 8, 9],
    },
    {
      name: 'Tiger',
      awesomeLevel: 8,
      lameness: 1,
      isDomestic: true,
      numbers: [4, 5, 6],
    },
    {
      name: 'Dragon',
      awesomeLevel: 2, // 👈 kinda dangerous...
      lameness: 10,
      isDomestic: true,
      numbers: [4, 5, 6],
    },
    {
      name: 'Bear',
      awesomeLevel: 10,
      lameness: 0,
      isDomestic: false,
      numbers: [4, 5, 6],
    },
  ];
  
  let sports = [
    {
      name: 'Tennis',
      awesomeLevel: 10,
    },
    {
      name: 'Archery',
      awesomeLevel: 5,
    },
    {
      name: 'Basketball',
      awesomeLevel: 7,
    },
    {
      name: 'Cycling',
      awesomeLevel: 7,
    },
    {
      name: 'Soccer',
      awesomeLevel: 9,
    },
    {
      name: 'Disc Golf',
      awesomeLevel: 6,
      lameness: 3,
    },
  ];
  
  //function will have a parameter on an array
  //build a loop to go through the array
  // function awesomeThings(array, userAwesomeLevel) {
  //   let array6Up = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].awesomeLevel >= userAwesomeLevel) {
  //       //   console.log(array[i].awesomeLevel);
  //       array6Up.push(array[i]);
  //     }
  //   }
  //   //how does a function 'give back' to the caller?
  //   return array6Up;
  // }
  
  //refactor to use array.filter method
  function awesomeThings(array, userAwesomeLevel, lameness) {
    const array6Up = array.filter((item) => item.awesomeLevel >= userAwesomeLevel && item.lameness < lameness);
    return array6Up;
  }
  
  //filter so the awesome level is 6 ^ let
  console.log('awesome things', awesomeThings(animals, 6, 2));
  
  function isDomestic(animalArray) {
    const domesticAnimals = animalArray.filter((item) => item.isDomestic);
    return domesticAnimals;
  }
  console.log('Domestic Animals', isDomestic(animals));
  
  //Remember typeof! It will tell you what it is!
  