function loadDummyData() {
    let sudoku = [
        [
            [0, 0, 5, 0, 0, 0, 9, 8, 7],
            [0, 4, 0, 0, 5, 0, 0, 0, 1],
            [0, 0, 7, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 4, 8, 0, 0, 0],
            [0, 9, 0, 1, 0, 0, 0, 0, 0],
            [6, 0, 0, 2, 0, 0, 0, 0, 0],
            [3, 0, 0, 6, 0, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 9, 0, 7, 0],
            [0, 0, 0, 0, 0, 0, 5, 0, 0],
        ],
        [
            [6, 0, 0, 0, 0, 0, 8, 0, 3],
            [0, 4, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 4, 0, 7, 0],
            [3, 0, 0, 2, 0, 0, 0, 0, 0],
            [1, 0, 6, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 5, 0],
            [0, 0, 0, 0, 8, 0, 6, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
        ],
        [
            [0, 4, 7, 0, 8, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 0, 0, 7, 0, 0],
            [6, 0, 0, 0, 0, 3, 5, 7, 0],
            [0, 0, 0, 0, 0, 5, 0, 0, 0],
            [0, 1, 0, 0, 6, 0, 0, 0, 0],
            [2, 8, 0, 0, 4, 0, 0, 0, 0],
            [0, 9, 0, 1, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 2, 0, 6, 9, 0],
        ],
        [
            [0, 2, 0, 0, 0, 0, 0, 0, 0],
            [3, 0, 5, 0, 6, 2, 0, 0, 9],
            [0, 6, 8, 0, 0, 0, 3, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 6, 4, 0, 8, 0, 2],
            [0, 0, 4, 7, 0, 0, 9, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 6, 0, 0, 0],
            [1, 7, 0, 4, 3, 0, 0, 0, 0],
        ],
        [
            [1, 0, 0, 0, 0, 6, 0, 8, 0],
            [0, 6, 4, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0, 7],
            [0, 0, 0, 0, 9, 0, 6, 0, 0],
            [0, 7, 0, 4, 0, 0, 5, 0, 0],
            [5, 0, 0, 0, 7, 0, 1, 0, 0],
            [0, 5, 0, 0, 0, 0, 0, 2, 0],
            [3, 0, 0, 0, 0, 8, 0, 0, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 8, 0, 0, 0, 0, 9],
            [0, 8, 7, 3, 0, 0, 0, 4, 0],
            [6, 0, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 8, 5, 0, 0, 9, 7, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 4, 3, 0, 0, 7, 5, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0, 0],
            [0, 3, 0, 0, 0, 1, 4, 5, 0],
            [4, 0, 0, 0, 0, 2, 0, 0, 1],
        ],
        [
            [0, 4, 0, 5, 0, 0, 0, 0, 0],
            [8, 0, 0, 0, 9, 0, 0, 3, 0],
            [0, 7, 6, 0, 2, 0, 0, 0, 0],
            [0, 1, 4, 6, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 9, 0, 0, 7],
            [0, 0, 0, 0, 0, 3, 6, 0, 0],
            [0, 0, 1, 0, 0, 4, 0, 5, 0],
            [0, 6, 0, 0, 0, 0, 0, 0, 3],
            [0, 0, 7, 1, 0, 0, 2, 0, 0],
        ],
    ];
    let randomNumber = Math.floor(Math.random() * 7);
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById("" + i + ("" + j)).value =
                sudoku[randomNumber][i][j] == 0
                    ? ""
                    : sudoku[randomNumber][i][j];
        }
    }
}

loadDummyData();

function Calculate() {
    let sudoku = [];
    for (let i = 0; i < 9; i++) {
        sudoku[i] = [];
        for (let j = 0; j < 9; j++) {
            sudoku[i][j] = document.getElementById("" + i + ("" + j)).value;
            if (sudoku[i][j] > 9) {
                alert("Invalid Input every number must be in between 1 to 9");
                return;
            }
        }
    }
    if (!Help(sudoku, 0, 0)) {
        alert("No Possible Solution Exist");
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById("" + i + ("" + j)).value =
                sudoku[i][j] == 0 ? "" : sudoku[i][j];
        }
    }
}

function Help(board, r, c) {
    if (r == 9) {
        return true;
    } else if (c == 9) {
        return Help(board, r + 1, 0);
    } else if (board[r][c] != 0) {
        return Help(board, r, c + 1);
    }
    for (let i = 1; i <= 9; i++) {
        board[r][c] = i;
        if (isSafe(board, r, c)) {
            if (Help(board, r, c + 1)) {
                return true;
            }
        }
    }
    board[r][c] = 0;
    return false;
}

function isSafe(board, r, c) {
    let a = parseInt(r / 3, 10) * 3,
        b = parseInt(c / 3, 10) * 3;
    for (let i = 0; i < 9; i++) {
        if (c != i) {
            if (board[r][c] == board[r][i]) {
                return false;
            }
        }
        if (r != i) {
            if (board[r][c] == board[i][c]) {
                return false;
            }
        }
    }
    for (let i = a; i < a + 3; i++) {
        for (let j = b; j < b + 3; j++) {
            if (i != r || j != c) {
                if (board[r][c] == board[i][j]) {
                    return false;
                }
            }
        }
    }
    return true;
}
