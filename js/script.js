async function perrito() {
    var response = await fetch("https://dog.ceo/api/breeds/image/random");
    var responseJson = await response.json();
    var img = responseJson.message;
    var ContenedorPerrito = document.querySelector(".ContenedorPerrito ")
    ContenedorPerrito.innerHTML = "<img src='" + img + "' alt='perrito' />";
}
