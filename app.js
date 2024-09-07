function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campoPsquisa for uma string sem nada
    if(campoPesquisa == " ") {
      section.innerHTML = "Não encontrado. Pesquise por filmes, categorias..."
      return // Finaliza a execução
    }

    //Aceita letras minusculas e maiusculas
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de resultados
    for (let dado of dados) {
      //Verifica letras minusculas e maiusculas
      titulo = dado.titulo.toLowerCase()
      sinopse = dado.sinopse.toLowerCase()
      tags = dado.tags.toLowerCase()
      //Se no tituulo Includes campoPesquisa
      if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //Cria um novo elemento
         // Constrói o HTML de cada item do resultado da pesquisa
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.sinopse}</p>
        <p>${dado.Duracao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
  }
      }

      // Se resultados não existir digite a mensagem: "Nada encontrado"
      if(!resultados) {
        resultados = "<p>Nada encontrado</P"
      }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }