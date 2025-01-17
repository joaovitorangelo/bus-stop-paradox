let $ = jQuery;
$(document).ready(function() {
  let user_name = sessionStorage.getItem('user_name') || '';
  play();
  // questions();

  function play() {
    $('.text').hide();
    $('main').append('<h1 class="title">' + user_name + '</h1>');
    $('main').append('<form id="play"><label for="name">Seu nome:</label><input id="name" name="name" type="text"><button id="btn-start" type="submit">Enviar</button></form>');
  
    $('#play').on('submit', function(event) {
      event.preventDefault();
      sessionStorage.setItem('user_name', $('input[name="name"]').val());
      
      if (  $('input[name="name"]').val() === '' ) return $('#play').append('<p class="error">"Seu nome" é um campo obrigatório!</p>');
      
      $('#play').remove();
  
      $('main').append('<h1 class="title" style="display: none;">O Paradoxo<br>da Espera do Ônibus</h1>');
  
      $('.title').fadeIn(1000, function() {
        setTimeout(function() {
          $('.title').fadeOut(1000, function() {
            $(this).remove();
            frame1();
          });
        }, 5000);
      });
    });
  }
  
  function frame1() {
    $('.frames').attr('src', frameData['frame-1']);
    $('.text').show();
    $('.text').text('');
    sessionStorage.removeItem('user_name')

    setTimeout(function() {
      frame2();
    }, 10000);
  }

  function frame2() {
    $('.frames').attr('src', frameData['frame-2']);
    $('.text').text('');

    setTimeout(function() {
      const blinkSrc = frameData['frame-3']; // Frame que pisca
      const defaultSrc = frameData['frame-2']; // Frame original
      const blinkInterval = 100; // Tempo entre piscadas em milissegundos
      const maxBlinks = 6; // Número total de alternâncias (3 piscadas)
      let blinkCount = 0; // Contador de piscadas

      // Iniciar efeito de piscada
      const blinkEffect = setInterval(function() {
        $('.frames').attr('src', blinkCount % 2 === 0 ? blinkSrc : defaultSrc);
        blinkCount++;

        // Após 6 alternâncias (3 piscadas), para o efeito e chama frame3
        if (blinkCount >= maxBlinks) {
          clearInterval(blinkEffect); // Para o efeito de piscada
          $('.frames').attr('src', defaultSrc);

          // Chama frame3 após o efeito de piscada
          setTimeout(function() {
            frame3();
          }, 5000); // Pequeno atraso antes de chamar frame3
        }
      }, blinkInterval);
    }, 5000); // Espera 5 segundos
  }

  function frame3() {
    $('.frames').attr('src', frameData['frame-4']);
    
    const text = 'Porran... Ñ passa Ônibus :/';
    typeText(text, 100, function() {
      frame4();
    });
  }

  function frame4() {
    $('.frames').attr('src', frameData['frame-5']);

    const text = 'Pelo o que eu sei ele ainda circula de madrugada';
    typeText(text, 100, function() {
      frame5();
    });
  }

  function frame5() {
    $('.frames').attr('src', frameData['frame-6']);
    
    let text = 'Mas quando mais ele demoran';
    typeText(text, 100, function() {
        setTimeout(function() {
            text = 'tambem mais perto ele ta pra passa aqui ne';
            typeText(text, 100, function() {
                frame6();
            });
        }, 2000);
    });
  }

  function frame6() {
    $('.frames').attr('src', frameData['frame-5']);

    let text = 'Pq se esse tempo todo ele nao passou';
    typeText(text, 100, function() {
        setTimeout(function() {
            text = 'isso quer dizer que ele ta vindo';
            typeText(text, 100, function() {
                frame7();
            });
        }, 2000);
    });
  }

  function frame7() {
    $('.frames').attr('src', frameData['frame-7']);

    let text = 'Pelo menos na teoria';
    typeText(text, 100, function() {
      setTimeout(function() {
          text = 'Nunca se sabe... sla';
          typeText(text, 100, function() {
              frame8();
          });
      }, 2000);
    });
  }

  function frame8() {
    $('.frames').attr('src', frameData['frame-8']);
    
    text = 'Podia pegar aquele outro que da uma volta do caraio';
    typeText(text, 100, function() {
        setTimeout(function() {
            text = 'esse sim';
            typeText(text, 100, function() {
                setTimeout(function() {
                    text = 'de vez enquando passa';
                    typeText(text, 100, function() {
                        frame9();
                    });
                }, 5000); // Aguarda 5 segundos antes de exibir o terceiro texto
            });
        }, 4000); // Aguarda 4 segundos após o primeiro texto
    });
  }

  function frame9() {
    $('.frames').attr('src', frameData['frame-9']);
    // $('.text').text('frame 9');
    
    setTimeout(function() {
      frame10();
    }, 10000);
  }

  function frame10() {
    $('.frames').attr('src', frameData['frame-10']);
    // $('.text').text('frame 10');
    
    setTimeout(function() {
      frame11();
    }, 10000);
  }

  function frame11() {
    $('.frames').attr('src', frameData['frame-11']);
    // $('.text').text('frame 11');
    
    setTimeout(function() {
      frame12();
    }, 10000);
  }

  function frame12() {
    $('.frames').attr('src', frameData['frame-12']);
    // $('.text').text('frame 12');
    
    setTimeout(function() {
      frame13();
    }, 10000);
  }

  function frame13() {
    $('.frames').attr('src', frameData['frame-13']);
    // $('.text').text('frame 13');
    
    setTimeout(function() {
      frame14();
    }, 10000);
  }

  function frame14() {
    $('.frames').attr('src', frameData['frame-14']);
    // $('.text').text('frame 14');
    
    setTimeout(function() {
      frame15();
    }, 10000);
  }

  function frame15() {
    $('.frames').attr('src', frameData['frame-15']);
    // $('.text').text('frame 15');

    setTimeout(function() {
      frame16();
    }, 10000);
  }

  function frame16() {
    $('.frames').attr('src', frameData['frame-16']);
    // $('.text').text('frame 16');

    setTimeout(function() {
      frame17();
    }, 10000);
  }

  function frame17() {
    $('.frames').attr('src', frameData['frame-17']);
    // $('.text').text('frame 17');

    setTimeout(function() {
      frame18();
    }, 10000);
  }

  function frame18() {
    $('.frames').attr('src', frameData['frame-18']);
    // $('.text').text('frame 18');

    // setTimeout(function() {
    //   frame19();
    // }, 10000);
  }

});
function typeText(text, speed, callback) {
  let index = 0;
  let typedText = ''; // Variável para armazenar o texto digitado

  function typeLetter() {
      if (index < text.length) {
          typedText += text[index]; // Adiciona a letra à variável
          $('.text').text(typedText); // Atualiza o conteúdo do h1
          index++;
          setTimeout(typeLetter, speed); // Chama a função novamente após o intervalo
      } else {
          // Após completar o texto, aguarda 5 segundos antes de chamar o callback
          if (callback) {
              setTimeout(callback, 5000); // Atraso de 5 segundos antes de chamar o callback
          }
      }
  }

  typeLetter(); // Inicia o efeito de digitação
}
// function questions() {
//   $('main').append('<div id="questions"><button>Verdade</button><button>As vezes esse horario até que passa</button></div>');

// }
