
import board from '@/ai/board';

describe('测试evaluate速度', () => {
  it('速度', () => {
    board.init(15);
    const start = +new Date();
    let i = 0;
    while (i++ < 100000) {
      board.put([6, 10], 1);
      board.remove([6, 10]);
    }
    console.log(new Date() - start);
  });
});
