const frases = [
    "Você é mais forte do que imagina.",
    "Sua beleza vem da sua confiança.",
    "Nunca duvide do seu potencial.",
    "Você merece amor e felicidade.",
    "Se ame em primeiro lugar.",
    "Seu brilho é único."
  ];
  
  function mostrarFrase() {
  
    const fraseAleatoria =
      frases[Math.floor(Math.random() * frases.length)];
  
    document.querySelector(".motivacao p").innerText =
      fraseAleatoria;
  }