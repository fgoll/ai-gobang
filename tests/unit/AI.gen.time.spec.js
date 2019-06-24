
import board from '@/ai/board';

describe('测试 gen 函数性能', () => {
  it('性能', () => {
    board.init(15);
    board.put([5, 10], 1);
    board.put([4, 11], 2);
    board.put([6, 10], 1);
    const start = +new Date();
    let i = 0;
    while (i++ < 100000) board.gen(2, true, true);
    console.log(new Date() - start);
  });
});
