document.addEventListener("DOMContentLoaded", async () => {
  const yearStatus = document.querySelector("#year")
  const makeStatus = document.querySelector("#make")
  const modelStatus = document.querySelector("#model")
  const partNumber = document.querySelector("#part-number")

  if (makeStatus.value == "blankMake") {
    yearStatus.disabled = true
    modelStatus.disabled = true
  }

  if (partNumber.value) {
    const part = partNumber.value
    const form = document.querySelector("form")
    const partsHeading = document.querySelector("h1")
  }
})
