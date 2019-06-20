<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <div class="weui-tabbar">
      <router-link to="/" class="weui-tabbar__item">
        <div class="icon-wrap">
          <svg-icon icon-class="home" />
        </div>
        <p class="weui-tabbar__label">Home</p>
      </router-link>
      <router-link to="/settings" class="weui-tabbar__item">
        <div class="icon-wrap">
          <svg-icon icon-class="setting" />
        </div>
        <p class="weui-tabbar__label">Setting</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
.weui-tabbar {
  position: fixed !important;
  width: 100%;
  bottom: 0;
  .icon-wrap {
    font-size: 16px;
  }
}

.weui-tabbar__item.router-link-exact-active {
  i, p {
    color: #96e7ba;
  }
}
</style>
