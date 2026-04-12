class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < board.length; row++) {
            const rowSet = new Set()
            for (let col = 0; col < board[row].length; col++) {
                if (board[row][col] === '.') {
                    continue
                }
                if (rowSet.has(board[row][col])) {
                    return false
                }
                rowSet.add(board[row][col])
            }
        }

        for (let col = 0; col < board.length; col++) {
            const colSet = new Set()
            for (let row = 0; row < board[col].length; row++) {
                if (board[row][col] === '.') {
                    continue
                }
                if (colSet.has(board[row][col])) {
                    return false
                }
                colSet.add(board[row][col])
            }
        }

        for (let rowBox = 0; rowBox < board.length; rowBox += 3) {
            for (let colBox = 0; colBox < board[rowBox].length; colBox += 3) {
                const helperSet = new Set()

                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const rowPs = row + rowBox
                        const colPs = col + colBox

                        if (board[rowPs][colPs] === '.') {
                            continue
                        }
                        if (helperSet.has(board[rowPs][colPs])) {
                            return false
                        }
                        helperSet.add(board[rowPs][colPs])
                    }
                }
            }
        }

        return true
    }
}
