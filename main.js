function enviarSaludo() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let requisito = `Debes ingresar nombre y apellido`;
  let saludo = `Bienvenido ${nombre} ${apellido}, registro completado`;

  return (
    nombre === "" || apellido === ""
      ? (document.getElementById("saludo").innerHTML = requisito)(
          document.getElementById("saludo").classList.add("incorrecto")
        )(document.getElementById("saludo").classList.remove("correcto"))
      : (document.getElementById("saludo").innerHTML = saludo),
    document.getElementById("saludo").classList.add("correcto"),
    document.getElementById("saludo").classList.remove("incorrecto"),
    (document.getElementById("nombre").value = ""),
    (document.getElementById("apellido").value = "")
  );
}
document.getElementById("btn").onclick = function () {
  enviarSaludo();
};
