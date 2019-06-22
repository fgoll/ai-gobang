import * as STATUS from '@/status';
import ai from '@/ai';

console.log(ai);
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

export default {
  data() {
    return {
      board: null,
      steps: [],

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
      this.board[x][y] = role;
      const step = {
        position,
        role,
      };
      this.steps.push(step);
    },

    set(position) {
      console.log(position, this.status);
      if (this.status !== STATUS.PLAYING) return;

      const [x, y] = position;

      if (this.board[x][y] !== 0) {
        throw new Error('NOT_EMPTY');
      }

      this._set(position, 2);
      this.status = STATUS.THINKING;
      this.startTime = +new Date();

      this.handleAiPut(x, y);
    },

    handleAiPut(x, y) {
      const position = ai.turn(x, y);

      this._set(position, 1);
      this.status = STATUS.PLAYING;
    },

  },
};
