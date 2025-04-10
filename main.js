function BuscarPiada() {
  
  fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json()) 
      .then(data => {
          
          document.getElementById('resultado').innerText = data.value;
      })
      .catch(error => {
        
          console.error('Erro ao buscar piada:', error);
          document.getElementById('resultado').innerText = 'Ocorreu um erro ao buscar a piada!';
      });
}
