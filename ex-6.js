const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  let lowerCarBarand = carBrand.toLowerCase();
  let existingIndex = carCollection.findIndex(car => car.toLowerCase() === lowerCarBarand);
  if(existingIndex !== -1) {
    return(`${carBrand} already exists in position ${existingIndex +1} of the car collection.`);
  } else {
    carCollection.push(carBrand);
    return(`New car collection is: ${carCollection.join(",")}`);
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.