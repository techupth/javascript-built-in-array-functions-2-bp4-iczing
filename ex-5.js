let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(name) {
  if (crimeRecordNames.includes(name)) {
    return(`${name} has a crime record!!!`);
  } else {
    return(`${name} has no crime record.`);
  }
}

console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"