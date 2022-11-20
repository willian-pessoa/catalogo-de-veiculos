const puppeteer = require("puppeteer");

const KAVAK_URL = "https://www.kavak.com/br/carros-usados";

async function getKavakCars() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage()

  await page.goto(KAVAK_URL, { waitUntil: "networkidle2" })

  let data = await page.evaluate(() => {
    function splitNameAndBrand(nameAndBrand) {
      let name = ""
      let brand = ""
      let tempArr = nameAndBrand.split(" ")
      switch (nameAndBrand[0].toUpperCase()) {
        case "V":
        case "F":
        case "C":
        case "B":
        case "J":
        case "A":
        case "H":
          brand = tempArr.shift()
          name = tempArr.join(" ")
          break;
        case "M":
          brand = [tempArr.shift(), tempArr.shift()].join(" ")
          name = tempArr.join(" ")
        default:
          console.log("erro to filter")
      }

      return {
        name,
        brand
      }
    }

    let carId = 0;

    let carData = [...document.querySelectorAll(".card-inner")].map(anchor => {
      carId++
      let { name, brand } = splitNameAndBrand(anchor.querySelector(".car-name").innerHTML.substring(1))
      naem = name.substring(0, brand.length - 1)
      let price = anchor.querySelector(".payment-total").innerHTML
      price = Number(price.substring(10, price.length - 1).split(".").join(""))
      let imageUrl = anchor.querySelector("img").src
      return { brand, name, price, imageUrl, carId };
    });
    return carData.slice(0, 9)
  })

  await browser.close()

  return data
}

module.exports = {
  getKavakCars,
}