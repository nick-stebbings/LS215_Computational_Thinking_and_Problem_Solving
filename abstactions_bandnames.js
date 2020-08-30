// There are problems with this data, though, so we first have to clean it up before we can use it:

//     The band countries are wrong: all the bands should have 'Canada' as the country.
//     The band name should have all words capitalized.
//     Remove all dots from the band names.

// Write a function that can process the input band Array and return an Array that contains the fixed information:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.forEach(band => {
    band.country = 'Canada';
    band.name = band.name[0].toUpperCase() + band.name.slice(1).replace('.', '');
    
  });
  return data;
}
console.log(processBands(bands));
console.log(bands);
// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
