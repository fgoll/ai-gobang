<template>
  <div id="home">
    <div class="board">
      <div
        ref="board"
        class="board-inner"
        @click="click"
      >
        <div>
          <div v-for="(row, rIndex) in board" :key="rIndex">
            <template v-for="(col, cIndex) in row">
              <div
                v-if="col"
                :key="cIndex"
                class="chessman"
                :class="(col === 1 ? 'black' : 'white') +
                  (isLast([rIndex, cIndex]) ? ' last-step' : '') +
                  (isFives([rIndex, cIndex]) ? ' fives' : '')"
                :style="{
                  marginTop: (1.5 + rIndex*6.53) + '%',
                  marginLeft: (1.5 + cIndex*6.53) + '%',
                }"
              />
            </template>

          </div>
        </div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step"
          :class="(step.role === 1 ? 'black' : 'white') + (isFives(step.position) ? ' fives' : '')"
          :style="{
            marginTop: (1.5 + step.position[0]*6.53) + '%',
            marginLeft: (1.5 + step.position[1]*6.53) + '%',
          }"
        >
          {{ index+1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from './index';

export default Home;
</script>

<style lang="scss" scoped>
.board-inner {
  width: 37rem;
  height: 37rem;
  margin: 0 auto;
  position: relative;
  background-image: url("../../assets/board.jpg");
  background-size: 100%;
}
.chessman, .step {
  position: absolute;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 50%;
  font-size: 1.2rem;
  user-select: none;
}
.chessman {
  top: 0;
  bottom: 0;
  background-color: black;

  &.white {
    background-color: white;
  }
}

.step {
  color: white;
  &.white {
    color: black;
  }
}

.last-step {
  box-shadow: 0 0 0 .4rem rgba(255, 0, 0, 0.4);
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.8);
  }
  70% {
    box-shadow: 0 0 0 .6rem rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}

.fives {
  animation: flash .8s infinite;
  box-shadow: none;
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
