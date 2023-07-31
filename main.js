let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('¡Hola! Soy Carmen Dessiré González Bibiesca.')
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(500)
  .typeString('Bienvenido/a a mi página web.')
  .pauseFor(2000)
  .deleteAll()
  .pauseFor(500)
  .typeString('¡Gracias por visitar!')
  .pauseFor(3000)
  .start();



