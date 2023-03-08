function guardar_mascota (event) {
  // 1. Evitamos que se recargue la página
  event.preventDefault()

  // 2. Recupero en JS las etiquetas que usaré
  const nombre_input = document.querySelector('#nombre')
  const especie_select = document.querySelector('#especie')
  const comentarios_ta = document.querySelector('#comentarios')
  const mascotas_ul = document.querySelector('#mascotas')

  // 3. Obtengo los valores de cada campo de formulario (etiqueta)
  const nombre = nombre_input.value
  const especie = especie_select.value
  const comentarios = comentarios_ta.value

  console.log("Se agrega la mascota " + nombre  + ' que es ' + especie + ' con el comentario ' + comentarios)
  // 4. Agrego la mascota a la UL
  mascotas_ul.innerHTML = mascotas_ul.innerHTML + ('<li class="list-group-item"><h5>' + nombre + ' (' + especie + ')</h5><p>' + comentarios + '</p></li>')

  // 5. Limpiamos el formulario
  nombre_input.value = ''
  especie_select.value = ''
  comentarios_ta.value = ''
}

