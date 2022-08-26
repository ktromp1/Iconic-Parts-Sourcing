document.addEventListener("DOMContentLoaded", async () => {
  const yearStatus = document.querySelector("#year")
  const makeStatus = document.querySelector("#make")
  const modelStatus = document.querySelector("#model")
  const partNumber = document.querySelector("#part-number")
  const unknownYear = document.createElement("option")
  const cmsLink = document.querySelector("#link-to-cms")
  unknownYear.innerText = "Unknown"
  unknownYear.value = "unknown"
  const blankYear = document.createElement("option")
  blankYear.innerText = "Year"
  blankYear.value = "blankYear"

  /**
   * Changes stuff everytime the Make select is changed
   */
  makeStatus.addEventListener("change", (e) => {
    console.log("test")
    yearStatus.disabled = false
    // modelStatus.disabled = false

    // if make is set to blank, everything is disabled again
    if (makeStatus.value == "blankMake") disableYearModel()

    yearStatus.innerHTML = ""
    yearStatus.appendChild(blankYear)
    // changes stuff depending on the selection
    switch (makeStatus.value) {
      case "Ducati":
        const ducatiYears = []
        for (let i = 2001; i < 2019; i++) {
          ducatiYears.push(i)
        }
        ducatiYears.forEach((year) => {
          const element = document.createElement("option")
          element.innerText = year
          element.value = year
          yearStatus.appendChild(element)
        })
        break
      case "Honda":
        const hondaYears = []
        yearStatus.appendChild(unknownYear)
        for (let i = 1958; i < 2017; i++) {
          hondaYears.push(i)
        }
        hondaYears.forEach((year) => {
          const element = document.createElement("option")
          element.innerText = year
          element.value = year
          yearStatus.appendChild(element)
        })

        break
      case "Kawasaki":
        const kawasakiYears = []
        yearStatus.appendChild(unknownYear)
        for (let i = 1966; i < 2023; i++) {
          kawasakiYears.push(i)
        }
        kawasakiYears.forEach((year) => {
          const element = document.createElement("option")
          element.innerText = year
          element.value = year
          yearStatus.appendChild(element)
        })
        break
      case "Suzuki":
        const suzukiYears = [1960]
        yearStatus.appendChild(unknownYear)
        for (let i = 1962; i < 2015; i++) {
          suzukiYears.push(i)
        }
        suzukiYears.forEach((year) => {
          const element = document.createElement("option")
          element.innerText = year
          element.value = year
          yearStatus.appendChild(element)
        })
        break
      case "Yamaha":
        const yamahaYears = [1964]
        yearStatus.appendChild(unknownYear)
        for (let i = 1966; i < 2020; i++) {
          yamahaYears.push(i)
        }
        yamahaYears.forEach((year) => {
          const element = document.createElement("option")
          element.innerText = year
          element.value = year
          yearStatus.appendChild(element)
        })
        break
      default:
        null
        break
    }
  })
  modelStatus.addEventListener("change", () => {
    updateCMSLinkAddress()
  })
  yearStatus.addEventListener("change", () => {
    updateCMSLinkAddress()
  })
  makeStatus.addEventListener("change", () => {
    updateCMSLinkAddress()
  })
  const cmsURL = document.createElement("a")
  cmsURL.rel = "noopener noreferrer nofollow"
  cmsURL.target = "_blank"
  cmsURL.innerText = "Dealer CMSNL Catalog"
  cmsLink.appendChild(cmsURL)
  updateCMSLinkAddress()

  const form = document.querySelector("form")
  const partsUnlimited = document.querySelector("#parts-unlimited")
  partsUnlimited.rel = "noopener noreferrer nofollow"
  partsUnlimited.target = "_blank"

  partNumber.addEventListener("input", () => {
    updatePULinkAddress()
  })

  function disableYearModel() {
    yearStatus.disabled = true
    modelStatus.disabled = true
  }
  function updateCMSLinkAddress() {
    cmsURL.href = `https://dealers.cmsnl.com/en-gb/models-browse?category=Motorcycle${
      yearStatus.value != "blankYear" ? "&year=" + yearStatus.value : ""
    }${makeStatus.value != "blankMake" ? "&make=" + makeStatus.value : ""}${
      makeStatus.value == "blankModel" ? "&model=" + modelStatus.value : ""
    }`
  }
  function updatePULinkAddress() {
    partsUnlimited.href = `https://dealer.parts-unlimited.com/search;q=${partNumber.value};r=eJyrVkrLzClJLSpWsoqOrQUAJusFKA%3D%3D`
  }
})
