const persona = {
  nombre: "Isan",
  isDeveloper: true,
};

function listNumbres(numbers) {
  if (numbers == 0) {
    return null;
  } else if (numbers == 1) {
    return [1];
  } else {
    let listOfNumbres = [1, 1];
    for (let i = 1; i < numbers-1; i++) {
      listOfNumbres = [
        ...listOfNumbres,
        listOfNumbres[i] + listOfNumbres[i - 1],
      ];
    }
    return listOfNumbres;
  }
}
const fibonacci =listNumbres(500);
console.log(fibonacci);
console.log("Golden number: "+fibonacci[499]/fibonacci[498]);