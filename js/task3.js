function findBestEmployee(employees) {
  let maxvalue = 0;
  let name;
  const entries = Object.entries(employees);
  for (let [key, value] of entries) {
    if (maxvalue < value) {
      maxvalue = value;
      name = key;
    }
  }
  return name;
}
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
