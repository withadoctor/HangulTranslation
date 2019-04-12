<template>
  <div id="home-view">
    <textarea class="input-text" @keyup="setKeyUp" />
    <div class="out-text" />
  </div>
</template>

<script>
import { getConvertText } from '@/core'

export default {
  methods: {
    setKeyUp(e) {
      $('.out-text').html( getConvertText( $('.input-text').val() ) );
    },
  }
}
</script>

<style lang="scss">

#home-view {
  height: 100%;
  padding: 60px;
  .input-text {
    width: 100%;
    height: calc( 50vh - 30px );
    margin-bottom: 30px;
    padding: 0;
    resize: none;
  }
  .out-text {
    width: 100%;
    height: calc( 50vh - 30px );
    margin-top: 30px;
    border: 1px solid black;
  }

}

</style>
