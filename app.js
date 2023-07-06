function toggleMode() {
  // logic of light mode
  const html = document.documentElement
  html.classList.toggle("light")

  //getting image
  const img = document.querySelector("#profile img")

  //switch image
  if (html.classList.contains("light")) {
    //image with lightmode on
    img.setAttribute("src", "./assets/personal-avatar-light.png") //with setAttibute we can change the attribute we set o the html file
    img.setAttribute("alt", "Imagem do Milton Junior.")
  } else {
    //image with lightmode off
    img.setAttribute("src", "./assets/personal-avatar.png")
    img.setAttribute("alt", "Imagem do Milton Junior em preto e branco.")
  }
}
