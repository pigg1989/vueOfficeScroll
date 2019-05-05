<template>
    <div class="boxmy">
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
  name: 'boxmy',
};
</script>
<style lang="scss">
    .boxmy {
        width: px2rem(1200);
        margin: 0 auto;
    }
</style>
