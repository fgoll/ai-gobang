/* eslint-disable no-continue */
/* eslint-disable class-methods-use-this */
import ROLE from './role';
import m from './negamax';
import createArray from './array';

// class Board {
//   init(size) {
//     this.allSteps = [];
//     this.board = [];
//     this.count = 0; // 棋子数

//     for (let i = 0; i < size; i++) {
//       const row = [];
//       for (let j = 0; j < size; j++) {
//         row.push(0);
//       }
//       this.board.push(row);
//     }

//     this.comScore = createArray(size, size);
//     this.humScore = createArray(size, size);

//     this.initScore();
//   }

//   initScore() {
//     const { board } = this;

//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] === ROLE.empty) {
//           if (this.hasNeighbor(i, j, 2, 2)) {

//           }
//         }
//       }
//     }
//   }

//   // 当前位置评分
//   evaluate(role) {
//     this.comMaxScore = 0;
//     this.humMaxScore = 0;

//     const { board } = this;

//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] == ROLE.com) {
//           // this.comMaxScore +=
//         } else if (board[i][j] === ROLE.hum) {

//         }
//       }
//     }
//   }

//   // 下子
//   put(p, role) {
//     p.role = role;
//     console.log(`put [${p}] ${role}`);
//     this.board[p[0]][p[1]] = role;
//     this.zobrist.go(p[0], p[1], role);
//     this.updateScore(p);
//     this.allSteps.push(p);
//     this.count++;
//   }

//   hasNeighbor(x, y, distance, count) {
//     const { board } = this;
//     const len = board.length;

//     const startX = x - distance;
//     const endX = x + distance;
//     const startY = y - distance;
//     const endY = y + distance;

//     for (let i = startX; i <= endX; i++) {
//       if (i < 0 || i >= len) continue;
//       for (let j = startY; j <= endY; j++) {
//         if (j < 0 || j >= len) continue;
//         if (i === x && j === y) continue;
//         if (board[i][j] !== ROLE.empty) {
//           count--;
//           if (count <= 0) return true;
//         }
//       }
//     }
//     return false;
//   }
// }

// const board = new Board();

class AI {
  // start() {
  //   board.init(15);
  //   return {
  //     board: undefined,
  //   };
  // }

  // begin() {
  //   const p = m(undefined, 6);
  //   board.put(p, ROLE.com);
  // }

  turn(x, y) {
    // this.set(x, y, ROLE.hum);
    return [Math.ceil(Math.random() * 15), Math.ceil(Math.random() * 15)];
    // return this.begin();
  }

  // set(x, y, r) {
  //   board.put([x, y], r);
  // }
}


export default AI;
