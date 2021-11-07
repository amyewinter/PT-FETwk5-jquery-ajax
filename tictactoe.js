/*
A game of tic tac toe - for two players
by Amy Winter, November 6, 2021

-- A heading states whether it is X’s or O’s turn and changes with each move made.
-- Creates a tic-tac-toe grid using divs. When a cell in the grid is clicked, an X or O appears in that spot depending on whose turn it is, and clicks are disabled for that cell for the duration of the game.
-- A reset button is available to clear the grid and restart the game.
-- When a player has won, a Bootstrap alert appears below the game board announcing the winner and the players are rewarded with a random philosophical quote about winning and losing.
-- When the board is full and the game results in a draw, a message notifies the players and the board is automatically reset.

*/

//initializing variables
let counter = 0;
let player = "";

$("#msgs").text('Click "Start Game" to begin!');

//when user clicks "Start Game" button
$("#startBtn").on("click", function () {
  //setting player - player X always goes first
  player = "X";
  //outputting player turn message
  $("#msgs").text(`Player ${player} - Go!`);
});

//when user clicks "Reset Game" button
$("#resetBtn").on("click", function () {
  resetGame();
});

//resets everything back to initial state
function resetGame() {
  $(".cell").removeClass("played");
  $(".cell").removeClass("X");
  $(".cell").removeClass("O");
  $(".cell").css("pointer-events", "auto");
  $(".cell").text(" ");
  counter = 0;
  player = "";
  $("#msgs").text('Click "Start Game" to begin!');
}

$(".cell").on("click", function () {
  if (counter >= 9) {
    $("#msgs").text("Game is tied.  The End.");
    setTimeout(function () {
      resetGame();
    }, 3000);
  } else if (
    ($("#c1").text() == player &&
      $("#c2").text() == player &&
      $("#c3").text() == player) ||
    ($("#c4").text() == player &&
      $("#c5").text() == player &&
      $("#c6").text() == player) ||
    ($("#c7").text() == player &&
      $("#c8").text() == player &&
      $("#c9").text() == player) ||
    ($("#c1").text() == player &&
      $("#c4").text() == player &&
      $("#c7").text() == player) ||
    ($("#c2").text() == player &&
      $("#c5").text() == player &&
      $("#c8").text() == player) ||
    ($("#c3").text() == player &&
      $("#c6").text() == player &&
      $("#c9").text() == player) ||
    ($("#c1").text() == player &&
      $("#c5").text() == player &&
      $("#c9").text() == player) ||
    ($("#c3").text() == player &&
      $("#c5").text() == player &&
      $("#c7").text() == player)
  ) {
    //display alert banner with winner
    $("#winAlert").css("display", "block");
    $("#winAlert").text(`Player ${player} has won!`);

    //hide banner after 3 seconds
    setTimeout(function () {
      $("#winAlert").css("display", "none");
    }, 3000);

    //display winning quote
    $("#msgs").text(winMsg());
  } else {
    //outputting player turn message
    $("#msgs").text(`Player ${player} - Go!`);
    //mark cell played, insert character, increment counter
    $(this).addClass(player);
    $(this).css("pointer-events", "none");
    console.log("space marked");
    $(this).text(player);
    counter++;
    console.log("counter incremented; counter is " + counter);
    console.log("after counter increment player is " + player);

    if (counter >= 9) {
      $("#msgs").text("Game is tied.  The End.");
      setTimeout(function () {
        resetGame();
      }, 3000);
    } else if (
      ($("#c1").text() == player &&
        $("#c2").text() == player &&
        $("#c3").text() == player) ||
      ($("#c4").text() == player &&
        $("#c5").text() == player &&
        $("#c6").text() == player) ||
      ($("#c7").text() == player &&
        $("#c8").text() == player &&
        $("#c9").text() == player) ||
      ($("#c1").text() == player &&
        $("#c4").text() == player &&
        $("#c7").text() == player) ||
      ($("#c2").text() == player &&
        $("#c5").text() == player &&
        $("#c8").text() == player) ||
      ($("#c3").text() == player &&
        $("#c6").text() == player &&
        $("#c9").text() == player) ||
      ($("#c1").text() == player &&
        $("#c5").text() == player &&
        $("#c9").text() == player) ||
      ($("#c3").text() == player &&
        $("#c5").text() == player &&
        $("#c7").text() == player)
    ) {
      //display alert banner with winner
      $("#winAlert").css("display", "block");
      $("#winAlert").text(`Player ${player} has won!`);

      //hide banner after 3 seconds
      setTimeout(function () {
        $("#winAlert").css("display", "none");
      }, 3000);

      //display winning quote
      $("#msgs").text(winMsg());
    } else {
      //swap player
      if (player == "X") {
        player = "O";
      } else if (player == "O") {
        player = "X";
      }
      console.log("player swapped; player is " + player);
      $("#msgs").text(`Player ${player} - Go!`);
    }
  }
});

//randomly selects and returns winning quote
function winMsg() {
  let winArr = [
    "'When you go through hardships and decide not to surrender, that is strength.'  -- Arnold Schwarzenegger",
    "'You learn more from losing than winning.  You learn how to keep going.'  -- Morgan Wootten",
    "'The thrill isn't in the winning, it's in the doing.'   -- Chuck Noll",
    "'A champion is afraid of losing.  Everyone else is afraid of winning.'  -- Billie Jean King",
    "'I've failed over and over and over again in my life.  And that is why I succeed.'  -- Michael Jordan",
    "'Don't fight a battle if you don't gain anything by winning.'  -- Erwin Rommel",
    "'Realize that without losing, winning isn't so great.'  -- Alyssa Milano",
    "'A winning effort begins with preparation.'  -- Joe Gibbs",
    "'Never change a winning game; always change a losing one.'  -- Bill Tilden",
    "'The essential thing in life is not conquering but fighting well. -- Pierre de Coubertin",
    "'As long as you are winning it is a good day.'  -- Per Mertesacker",
    "'The determination to win is the better part of winning.'  -- Daisaku Ikeda",
    "'The role of a leader is to always display a winning attitude.'  -- Colin Powell",
    "'Everything is good when you're winning.  But true colors come out when you lose.'  -- Jamal Murray",
    "'Who cares about winning?  We should focus on serving.'  -- Justin Trudeau",
    "'A life of frustration is inevitable for any coach whose main enjoyment is winning.'  -- Chuck Noll",
    "'Losing feels worse than winning feels good.'  -- Vin Scully",
    "'When you're not winning, you're losing.'  -- John McCain",
    "'Winning is fun, but those moments that you can touch someone's life in a very positive way are better.'  -- Tim Howard",
    "'Winning isn't everything, but wanting it is.'  -- Arnold Palmer",
    "'Winning isn't everything, but it sure beats anything that comes in second.'  -- Bear Bryant",
    "'Winning the peace is harder than winning the war.'  -- Xavier Becerra",
    "'Winning isn't everything, it's the only thing.'  -- Vince Lombardi",
    "'Winning is like shaving -- you do it every day or you wind up looking like a bum.'  -- Jack Kemp",
    "'Winning is not always the barometer of getting better.'  -- Tiger Woods",
    "'Every winning streak will have to end sometime.'  -- Jahangir Khan",
    "'The person that said winning isn't everything, never won anything.'  -- Mia Hamm",
    "'Winning isn't getting ahead of others.  It's getting ahead of yourself.'  -- Roger Staubach",
    "'Winning starts with beginning.'  -- Robert H. Schuller",
    "'The key to winning is poise under stress.'  -- Paul Brown",
  ];
  return winArr[Math.floor(Math.random() * winArr.length)];
}
