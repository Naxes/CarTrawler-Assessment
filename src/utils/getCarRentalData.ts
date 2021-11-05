export default function getCarRentalData() {
  return fetch('/api/cars')
    .then((res) => res.json())
    .then((result) => result.cars[0])
    .catch((error) => console.log(error));
}
