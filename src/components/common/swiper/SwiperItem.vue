<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

/* 解决了 真是脑壳疼 */
/* .slide img { */
    /* width: 100%; */
    /* 优点小bug 图片无法100%显示 后面再来看吧 有点崩溃*/
  /* width: 100%; */
    /* background-color: #fff; */
  /* }  */
</style>