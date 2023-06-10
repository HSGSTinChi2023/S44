var board;
var checkboard;
var row = 4;
var column = 4;
var t1, t2;
var numSelected = null;
var middleTransform;
var gameOver = false;
var chk_board;

window.onload = function() {
  Start();
  checkLogic();
}
setInterval(updateBoard, 100);
setInterval(gg, 100);

function checkLogic() {
  var checker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      if (board[r][c] == '-')
        return;
    }
    let tich = 1,
      tong = 0;
    for (var c = 0; c < 5; c++) {
      tong += board[r][c];
      tich *= board[r][c];
    }
    if (tong != 15 && tich != 120)
      return;
  }
  for (var c = 0; c < 5; c++) {
    for (var r = 0; r < 5; r++) {
      if (board[r][c] == '-')
        return;
    }
    let tich = 1,
      tong = 0;
    for (var r = 0; r < 5; r++) {
      tong += board[r][c];
      tich *= board[r][c];
    }
    if (tong != 15 && tich != 120)
      return;
  }

  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      if (board[r][c] == '-')
        return;
    }
    let tich = 1,
      tong = 0;
    for (var c = 0; c < 5; c++) {
      tong += board[r][c];
      tich *= board[r][c];
    }
    if (tong != 15 && tich != 120)
      return;
  }
  for (var c = 0; c < 5; c++) {
    for (var r = 0; r < 5; r++) {
      if (checkboard[r][c] == '-')
        return;
    }
    let tich = 1,
      tong = 0;
    for (var r = 0; r < 5; r++) {
      tong += (checkboard[r][c] - 5);
      tich *= (checkboard[r][c] - 5);
    }
    if (tong != 15 && tich != 120)
      return;
  }
  gameOver = true;
  window.alert("You Win!");
}

function updateBoard() {
  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      var tile = document.getElementById(r.toString() + "-" + c.toString());
      if (!gameOver)
        tile.addEventListener("click", selectTile);
      updateTile(tile, checkboard[r][c]);
      updateTile(tile, board[r][c]);
    }
  }
}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
  middleTransform = parseInt(numSelected.id);
}

function selectTile() {
  if (numSelected) {
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    if (middleTransform <= 5 && !chk1_board[r][c]) {
      board[r][c] = middleTransform;
    } else if (middleTransform >= 6 && !chk2_board[r][c]) {
      checkboard[r][c] = middleTransform;
    }
    updateTile(this, middleTransform);
    updateBoard();
  }
}

function gg() {
  if (gameOver == true) {
    var winMessage = document.getElementById("winMessage");
    winMessage.style.display = "block";
  }
}

var ranboard = [
  [
    ['-', 2, '-', 4, '-'],
    ['-', '-', '-', '-', '-'],
    ['-', '-', 4, '-', 5],
    ['-', '-', '-', '-', '-'],
    ['-', 1, '-', '-', '-']
  ],
  [
    ['-', 1, '-', '-', '-'],
    ['-', '-', '-', 3, '-'],
    [2, '-', '-', '-', '-'],
    ['-', '-', 5, '-', '-'],
    ['-', 4, '-', '-', 3]
  ],
  [
    ['-', '-', '-', '-', 2],
    ['-', '-', 3, '-', '-'],
    ['-', 2, '-', '-', '-'],
    ['-', '-', 1, '-', '-'],
    ['-', '-', '-', 5, 1]
  ]
];

var rancheck = [
  [
    [10, '-', 6, '-', '-'],
    ['-', 9, '-', '-', '-'],
    ['-', '-', '-', 8, '-'],
    ['-', 7, '-', '-', '-'],
    ['-', '-', '-', '-', '-']
  ],
  [
    ['-', 10, '-', '-', '-'],
    ['-', '-', '-', '-', 10],
    [9, '-', '-', '-', '-'],
    ['-', '-', '-', 6, '-'],
    ['-', 8, '-', '-', '-']
  ],
  [
    ['-', 6, 7, '-', '-'],
    ['-', '-', '-', '-', '-'],
    ['-', 7, 10, '-', 6],
    ['-', '-', 8, '-', '-'],
    [8, '-', '-', '-', '-']
  ]
];

var rancheck1 = [
  [
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0]
  ],
  [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1]
  ],
  [
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
  ]
];

var rancheck2 = [
  [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  [
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ],
  [
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0]
  ]
];

function Start() {
  var randomNumber1 = Math.floor(Math.random() * 3);
  var randomNumber2 = Math.floor(Math.random() * 3);
  board = ranboard[randomNumber1];
  checkboard = rancheck[randomNumber2];

  for (let i = 1; i <= 5; i++) {
    let number = document.createElement("div");
    number.id = i.toString();
    number.innerText = i.toString();
    if (!gameOver) number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  for (let i = 6; i <= 10; i++) {
    let number = document.createElement("div");
    number.id = i.toString();
    number.innerText = "";
    if (!gameOver) number.addEventListener("click", selectNumber);
    number.classList.add("number");
    number.classList.add("v" + i.toString());
    document.getElementById("digits").appendChild(number);
  }

  for (var r = 0; r < 5; r++) {
    for (var c = 0; c < 5; c++) {
      var tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (!gameOver) tile.addEventListener("click", selectTile);
      var tmp = board[r][c];
      updateTile(tile, checkboard[r][c]);
      updateTile(tile, tmp);
      document.getElementById("board").appendChild(tile);
    }
  }

  chk1_board = rancheck1[randomNumber1];
  chk2_board = rancheck2[randomNumber2];
}

function updateTile(tile, tmp) {
  if (tmp == "-") {
    tile.classList.add("tile");
  } else {
    if (tmp <= 5) {
      tile.innerText = "";
      tile.classList.add("tile");
      tile.innerText = tmp;
    } else {
      tile.classList.value = "";
      tile.classList.add("tile");
      tile.classList.add("v" + tmp.toString());
    }
  }
}
