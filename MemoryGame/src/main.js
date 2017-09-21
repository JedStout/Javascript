$attempts = $('#attempts')

var iconsEasy = [
  'help_outline', 
  'highlight_off',
  'history',
  'settings_input_svideo'
]
var iconsMedium = [
    'help_outline', 
    'highlight_off',
    'history',
    'settings_input_svideo',
    'settings_backup_restore',
    'update',
    'query_builder',
    'restore'
]
var iconsHard = [
    'help_outline', 
    'highlight_off',
    'history',
    'settings_input_svideo',
    'settings_backup_restore',
    'update',
    'query_builder',
    'restore',

    'help_outline', 
    'highlight_off',
    'history',
    'settings_input_svideo',
    'settings_backup_restore',
    'update',
    'query_builder',
    'restore'
]

var memory_tiles = [];
var choice1;
var choice2;
var tiles_flipped = 0;

function createCardsEasy() {
    iconsEasy.forEach( function(i) {
      images.push(i);
      images.push(i);
    });
  }

function createCardsMedium() {
    iconsMedium.forEach( function(i) {
        images.push(i);
        images.push(i);
    });
}

function createCardsHard() {
    iconsHard.forEach( function(i) {
        images.push(i);
        images.push(i);
    });
}

function tile_shuffle() {
    var j, x, i;
    for (i = images.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = images[i - 1];
      images[i - 1] = images[j];
      images[j] = x;
    }
}

function displayCards() {
    let row = document.getElementById('board');
        var cards = images.map( function(image) {
        var card = document.createElement('div')
            card.className = "col s3 card center pointer"
            card.dataset.value = image;
        var icon = document.createElement('i')
            icon.className = 'material-icons large';
            icon.innerHTML = image;
            card.appendChild(icon);
            row.appendChild(card);
    return card;
    });
}
  
  function hideCards() {
    setTimeout( function() {
      $('.card').children('i').toggleClass('hidden');
    }, 3000);
  }

function easyGame() {
    guess1 = 0
    guess2 = 0
    numGuesses = 0
    images = []
    createCardsEasy();
    tile_shuffle();
    displayCards();
    hideCards();
}

function mediumGame() {
    guess1 = 0
    guess2 = 0
    numGuesses = 0
    images = []
    createCardsMedium();
    tile_shuffle();
    displayCards();
    hideCards();
}

function hardGame() {
    guess1 = 0
    guess2 = 0
    numGuesses = 0
    images = []
    createCardsHard();
    tile_shuffle();
    displayCards();
    hideCards();
}

function checkForMatch() {
    numGuesses = 0;
    numGuesses += 1
    $attempts.text('Attempts: ' + numGuesses);
  
    setTimeout( function() {
      if (guess1 !== guess2) {
        var card1 = $("[data-value='" + guess1 + "']");
        var card2 = $("[data-value='" + guess2 + "']");
        card1.children('i').addClass('hidden')
        card2.children('i').addClass('hidden')
      }
  
      guess1 = null;
      guess2 = null;
    }, 1000);
  }
  
  $(document).ready( function() {
    easyGame()
  
    $(document).on('click', '.card', function() {
      var card = $(this);
      if (card.children('i').hasClass('hidden')) {
        if (!guess1) {
          card.children('i').toggleClass('hidden')
          guess1 = card.data('value')
        } else if (!guess2) {
          card.children('i').toggleClass('hidden')
          guess2 = card.data('value')
        }
  
        if (guess1 && guess2) {
          checkForMatch()
        }
      }
    });
  
    $('#easy_game').on('click', function() {
      $('#board').empty();
      $attempts.text('Attempts: ');
      easyGame()
    });

    $('#medium_game').on('click', function() {
        $('#board').empty();
        $attempts.text('Attempts: ');
        mediumGame()
    });

    $('#hard_game').on('click', function() {
        $('#board').empty();
        $attempts.text('Attempts: ');
        hardGame()
    });
  });