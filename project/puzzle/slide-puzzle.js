'use strict';

///////////////////////////////////////////////////////////////////////////////
// SlidePuzzle constructor.

function SlidePuzzle($table, rows, cols) {
  if (rows <= 0 || cols <= 0) {
    console.error('Given invalid rows or cols');
    return;
  }

  this.$gameTable = $table;
  this.rows = Math.floor(rows);
  this.cols = Math.floor(cols);
  this.hasGameStarted = false;
  this.timesLeft = 0;
  this.gameTickInterval = null;
  
  // Generate cells.
  this.cells = this.generateSequencialNumbers();
  if (this.cells.len < this.rows * this.cols) {
    this.logError('Generated cells are too short.');
    return;
  }

  this.setHasGameStarted(false);
  this.buildSlides();
};

///////////////////////////////////////////////////////////////////////////////
// Abstract methods; you should implement belows in your code.

SlidePuzzle.prototype.createRowDOM = function (row) { };
SlidePuzzle.prototype.createColumnDOM = function (row, col, val, onClickEventHandler) { };
SlidePuzzle.prototype.getCellDataFromDOM = function ($cell) {
  return { row: 0, col: 0, val: 0, isBlank: false, };
};
SlidePuzzle.prototype.getBlankCellData = function () { };
SlidePuzzle.prototype.swapDOMs = function (cell1) { };

///////////////////////////////////////////////////////////////////////////////
// Virtual methods; you can override in your codes.

SlidePuzzle.prototype.onGameStarting = function () { };
SlidePuzzle.prototype.onGameStarted = function () { };
SlidePuzzle.prototype.onGameSet = function (hasPlayerWon) { };
SlidePuzzle.prototype.onGameTick = function (resolution) { };
SlidePuzzle.prototype.onCountdown = function (remains) { };

///////////////////////////////////////////////////////////////////////////////
// Methods.

SlidePuzzle.prototype.startGame = function (counts, timer) {
  // Fire gameStart event.
  this.onGameStarting();

  var count = 0;

  // Countdown.
  const countdownInterval = setInterval(function () {
    const remains = counts - count++;
    if (remains == 0) {
      clearInterval(countdownInterval);

      this.timesLeft = timer;
      this.setHasGameStarted(true);

      this.onGameStarted();

      // Start the main game ticking interval.
      const resolution = 100;
      this.gameTickInterval = setInterval(function () {
        this.tickTimer(resolution);
      }.bind(this), resolution);

      return;
    }

    this.onCountdown(remains);
  }.bind(this), 1000);
};

SlidePuzzle.prototype.stopGame = function (hasPlayerWon) {
  clearInterval(this.gameTickInterval);
  this.setHasGameStarted(false);
  this.onGameSet(hasPlayerWon);
};

SlidePuzzle.prototype.buildSlides = function () {
  this.$gameTable.innerHTML = '';

  // Build and append rows.
  for (var row = 0; row < this.rows; ++row) {
    const $row = this.createRowDOM(row);
    
    // Build and append columns.
    for (var col = 0; col < this.cols; ++col) {
      const $col = this.createColumnDOM(
        row, col, this.cells[row * this.rows + col], this.onCellClick);

      $row.appendChild($col);
    }
    
    this.$gameTable.appendChild($row);
  }
};

SlidePuzzle.prototype.onCellClick = function (e) {
  if (!this.hasGameStarted) {
    return;
  }

  const swapped = this.swapCells(this.getCellDataFromDOM(e.target));
  if (swapped && this.checkCellHasOrdered()) {
    this.stopGame(true);
  }
};

SlidePuzzle.prototype.swapCells = function (targetCell) {
  const blankCell = this.getBlankCellData();

  var delta;
  if (targetCell.row == blankCell.row &&
      targetCell.col != blankCell.col) {
    // Swap with same row cell.
    delta = targetCell.col - blankCell.col;
  } else if (targetCell.col == blankCell.col &&
             targetCell.row != blankCell.row) {
    // Swap with same column cell.
    delta = targetCell.row - blankCell.row;
  } else {
    // Clicked cell(targetCell) is not swappable or
    // target cell is a blank cell.
    return false;
  }

  if (Math.abs(delta) != 1) {
    return false;
  }

  const targetCellIdx = this.getCellIdx(targetCell.row, targetCell.col);
  const blankCellIdx = this.getCellIdx(blankCell.row, blankCell.col);
  
  // Swap elements in this.cells.
  const tmp = this.cells[targetCellIdx];
  this.cells[targetCellIdx] = null;
  this.cells[blankCellIdx] = tmp;
  
  // Swap DOM elements.
  this.swapDOMs(targetCell);
  return true;
};

SlidePuzzle.prototype.getCellIdx = function (row, col) {
  return parseInt(row) * this.rows + parseInt(col);
}

SlidePuzzle.prototype.checkCellHasOrdered = function () {
  return this.cells.every(function (val, i, arr) {
    return !i || (val >= arr[i - 1]) || (val == null && i == arr.length - 1);
  });
};

SlidePuzzle.prototype.tickTimer = function (resolution) {
  this.timesLeft -= resolution * 0.001;
  if (this.timesLeft <= 0) {
    this.stopGame(false);
    return;
  }

  this.onGameTick(resolution);
}

SlidePuzzle.prototype.setHasGameStarted = function (value) {
  this.$gameTable.setAttribute('data-started', value);
  this.hasGameStarted = value;
};

SlidePuzzle.prototype.logError = console.error;

SlidePuzzle.prototype.generateSequencialNumbers = function () {
  // Build sequenced number array.
  var array = Array.apply(null, {length: this.rows * this.cols - 1})
    .map(Number.call, Number);

  // Make array to randomized and return it.
  return array.sort(function () { return 0.5 - Math.random(); });
};
