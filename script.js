// Função que exibe uma nova parte da história com base nas escolhas
function showStory(choice) {
  const storyElement = document.getElementById('story');
  const buttonsElement = document.getElementById('buttons');
  buttonsElement.innerHTML = ''; // Limpa os botões

  if (choice === 'start') {
    storyElement.innerHTML = 'Você está em uma floresta escura. À sua frente, há duas opções misteriosas: um caminho tortuoso e uma caverna profunda. O que você fará?';
    createButtons('followPath', 'enterCave');
  } else if (choice === 'followPath') {
    storyElement.innerHTML = 'Você segue pelo caminho sinuoso, com o som da floresta ao seu redor. À frente, você vê uma ponte sobre um rio turvo. O que fará agora?';
    createButtons('crossBridge', 'turnBack');
  } else if (choice === 'enterCave') {
    storyElement.innerHTML = 'Você entra na caverna escura. Dentro, há dois corredores: um iluminado por uma luz misteriosa e outro tão sombrio que você mal consegue ver. Qual você escolherá?';
    createButtons('exploreBright', 'ventureDark');
  } else if (choice === 'crossBridge') {
    storyElement.innerHTML = 'Você atravessa a ponte com coragem e chega a uma clareira. Um velho sábio te oferece uma escolha: um mapa antigo ou uma poção mágica. O que você escolhe?';
    createButtons('takeMap', 'takePotion');
  } else if (choice === 'turnBack') {
    storyElement.innerHTML = 'Você decide voltar, mas ao seguir o caminho de volta, encontra um acampamento com pessoas amigáveis. Eles te oferecem comida e uma rota alternativa. Você aceita?';
    createButtons('joinCamp', 'declineCamp');
  } else if (choice === 'exploreBright') {
    storyElement.innerHTML = 'Você segue o corredor iluminado e encontra uma sala cheia de tesouros e artefatos antigos. Porém, algo parece estranho... Você decide investigar mais ou fugir?';
    createButtons('investigate', 'escape');
  } else if (choice === 'ventureDark') {
    storyElement.innerHTML = 'Você se aventura pelo corredor sombrio e encontra uma criatura monstruosa. Mas, ao invés de atacar, ela te oferece um pacto. Você aceita?';
    createButtons('acceptPact', 'refusePact');
  } else if (choice === 'takeMap') {
    storyElement.innerHTML = 'O mapa leva você a um esconderijo de piratas! Você encontra um baú com ouro, mas também é emboscado. Como você reage?';
    createButtons('fightPirates', 'fleePirates');
  } else if (choice === 'takePotion') {
    storyElement.innerHTML = 'A poção te dá força sobre-humana! Com isso, você atravessa a floresta rapidamente, mas acaba atraindo a atenção de uma besta selvagem. Você a enfrenta ou foge?';
    createButtons('fightBeast', 'runFromBeast');
  } else if (choice === 'joinCamp') {
    storyElement.innerHTML = 'Você aceita a ajuda do acampamento. Depois de uma noite tranquila, o líder do acampamento te oferece uma missão: resgatar um prisioneiro. Você aceita a missão?';
    createButtons('acceptMission', 'declineMission');
  } else if (choice === 'declineCamp') {
    storyElement.innerHTML = 'Você recusa a ajuda e continua sua jornada sozinho. Ao longo do caminho, encontra uma aldeia misteriosa onde as pessoas parecem te conhecer. Você investiga ou segue em frente?';
    createButtons('investigateVillage', 'leaveVillage');
  } else if (choice === 'investigate') {
    storyElement.innerHTML = 'Você começa a investigar os artefatos, mas descobre que eles estão amaldiçoados. A sala começa a desmoronar! Você corre para a saída ou tenta desarmar a armadilha?';
    createButtons('escapeRoom', 'disarmTrap');
  } else if (choice === 'escape') {
    storyElement.innerHTML = 'Você foge da sala e, ao sair da caverna, encontra um grupo de exploradores que te ajudam a escapar. Juntos, vocês encontram um tesouro escondido!';
    createEndButton();
  } else if (choice === 'acceptPact') {
    storyElement.innerHTML = 'A criatura te oferece um poder imenso em troca de sua alma. Você aceita o pacto e ganha força, mas será perseguido por caçadores de almas pelo resto de sua vida!';
    createEndButton();
  } else if (choice === 'refusePact') {
    storyElement.innerHTML = 'Você recusa o pacto e enfrenta a criatura em uma batalha épica. Você vence, mas descobre que o caminho para a liberdade está além da montanha.';
    createEndButton();
  } else if (choice === 'fightPirates') {
    storyElement.innerHTML = 'Você luta bravamente contra os piratas, mas está em desvantagem. Justo quando tudo parecia perdido, o velho sábio te aparece com uma ajuda mágica!';
    createEndButton();
  } else if (choice === 'fleePirates') {
    storyElement.innerHTML = 'Você foge com sucesso, mas o mapa te leva a um rio cheio de crocodilos. Você tenta atravessar ou procurar uma alternativa?';
    createButtons('crossRiver', 'searchPath');
  } else if (choice === 'fightBeast') {
    storyElement.innerHTML = 'Você enfrenta a besta e vence, mas encontra uma cidade abandonada cheia de segredos antigos. Você decide explorar a cidade?';
    createButtons('exploreCity', 'leaveCity');
  } else if (choice === 'runFromBeast') {
    storyElement.innerHTML = 'Você foge da besta e encontra uma gruta secreta, onde você encontra um pergaminho mágico que revela segredos sobre o passado.';
    createEndButton();
  } else if (choice === 'acceptMission') {
    storyElement.innerHTML = 'Você aceita a missão e resgata o prisioneiro, mas descobre que ele é um mago que te dá um poder imenso em troca de sua liberdade.';
    createEndButton();
  } else if (choice === 'declineMission') {
    storyElement.innerHTML = 'Você decide seguir seu caminho sozinho. Mais tarde, encontra uma aldeia cheia de mistérios e decide investigar.';
    createEndButton();
  } else if (choice === 'investigateVillage') {
    storyElement.innerHTML = 'Você descobre que a aldeia está sendo controlada por um feiticeiro. Você decide lutar contra ele ou fugir?';
    createButtons('fightSorcerer', 'escapeVillage');
  } else if (choice === 'leaveVillage') {
    storyElement.innerHTML = 'Você decide deixar a aldeia e continua sua jornada. No caminho, encontra um portal que leva a um novo mundo.';
    createButtons('enterPortal', 'ignorePortal');
  } else if (choice === 'fightSorcerer') {
    storyElement.innerHTML = 'Você derrota o feiticeiro e liberta a aldeia. O povo te agradece, e você recebe uma bênção que te guia para novos caminhos.';
    createEndButton();
  } else if (choice === 'escapeVillage') {
    storyElement.innerHTML = 'Você foge da aldeia, mas acaba se deparando com uma armadilha. Você é capturado, mas um misterioso herói te liberta.';
    createEndButton();
  }

  // Função para criar o botão de reinício da aventura
  function createEndButton() {
    const buttonsElement = document.getElementById('buttons');
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Recomeçar a Aventura';
    restartButton.onclick = function() {
      showStory('start');
    };
    buttonsElement.appendChild(restartButton);
  }
}

// Função para criar os botões para a escolha do usuário com nomes mais interessantes
function createButtons(option1, option2) {
  const buttonsElement = document.getElementById('buttons');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');

  button1.textContent = getButtonLabel(option1);
  button2.textContent = getButtonLabel(option2);

  button1.onclick = function() {
    showStory(option1);
  };
  button2.onclick = function() {
    showStory(option2);
  };

  buttonsElement.appendChild(button1);
  buttonsElement.appendChild(button2);
}

// Função que retorna os nomes mais legais para os botões
function getButtonLabel(option) {
  const labels = {
    'followPath': 'Seguir o Caminho Sinuoso',
    'enterCave': 'Entrar na Caverna Misteriosa',
    'crossBridge': 'Atravesse a Ponte da Coragem',
    'turnBack': 'Voltar para a Segurança',
    'exploreBright': 'Explorar o Corredor Brilhante',
    'ventureDark': 'Aventurar-se no Corredor Sombrio',
    'end': 'Finalizar Aventura',
    'takeMap': 'Pegar o Mapa Antigo',
    'takePotion': 'Pegar a Poção Mágica',
    'joinCamp': 'Juntar-se ao Acampamento',
    'declineCamp': 'Recusar a Ajuda',
    'investigate': 'Investigar Artefatos',
    'escape': 'Fugir da Caverna',
    'acceptPact': 'Aceitar o Pacto',
    'refusePact': 'Recusar o Pacto',
    'fightPirates': 'Lutar contra os Piratas',
    'fleePirates': 'Fugir dos Piratas',
    'fightBeast': 'Lutar contra a Besta',
    'runFromBeast': 'Fugir da Besta',
    'acceptMission': 'Aceitar a Missão',
    'declineMission': 'Recusar a Missão',
    'investigateVillage': 'Investigar a Aldeia',
    'leaveVillage': 'Deixar a Aldeia',
    'fightSorcerer': 'Lutar contra o Feiticeiro',
    'escapeVillage': 'Fugir da Aldeia',
    'enterPortal': 'Entrar no Portal',
    'ignorePortal': 'Ignorar o Portal'
  };
  return labels[option] || option;
}

// Iniciar a história
showStory('start');
