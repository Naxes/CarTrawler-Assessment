export default function getCarRentalData() {
  return fetch('http://www.cartrawler.com/ctabe/cars.json')
    .then((res) => res.json())
    .then((result) => result[0])
    .catch((error) => console.log(error));
}
