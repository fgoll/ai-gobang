import * as STATUS from '@/status';
import ai from '@/ai';
import SCORE from '@/ai/score';
import win from '@/ai/win';

const getBoard = () => [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


const copy = a => a.map(r => r.slice()).slice();


export default {
  data() {
    return {
      board: [],
      steps: [],
      fives: [],
      status: STATUS.PLAYING,
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.board = getBoard();
    },

    click(e) {
      let y = e.offsetX;
      let x = e.offsetY;
      const width = this.$refs.board.clientWidth;
      const offset = width * 0.044;
      const step = width * 0.065;
      x = Math.floor((x + offset) / step) - 1;
      y = Math.floor((y + offset) / step) - 1;

      this.set([x, y]);
    },

    _set(position, role) {
      const [x, y] = position;

      const board = copy(this.board);
      board[x][y] = role;
      const step = {
        position,
        role,
      };
      this.steps.push(step);

      this.board = board;
    },

    set(position) {
      if (this.status !== STATUS.PLAYING) return;

      const [x, y] = position;

      if (this.board[x][y] !== 0) {
        throw new Error('NOT_EMPTY');
      }

      this._set(position, 2);

      this.status = STATUS.THINKING;
      this.startTime = +new Date();

      setTimeout(() => {
        this.handleAiPut(x, y);
      }, 1000);
    },

    handleAiPut(x, y) {
      const p = ai.turn(x, y);
      const { score, step } = p;
      this._set([p[0], p[1]], 1);
      this.status = STATUS.PLAYING;

      if (score >= SCORE.FIVE / 2) {
        if (step <= 1) {
          this.fives = win(this.board);
          console.log('you lose');
          this.status = STATUS.LOCKED;
        }
      } else if (score <= -SCORE.FIVE / 2) {
        if (step <= 1) {
          console.log('you win');
          this.status = STATUS.LOCKED;
          this.fives = win(this.board);
        }
      }
    },

    isLast(p) {
      if (!this.steps.length) return false;
      const last = this.steps[this.steps.length - 1].position;

      return last[0] === p[0] && last[1] === p[1];
    },

    isFives(p) {
      if (!this.fives.length) return false;
      for (let i = 0; i < this.fives.length; i++) {
        const f = this.fives[i];
        if (p[0] === f[0] && p[1] === f[1]) {
          return true;
        }
      }
      return false;
    },

  },
};
