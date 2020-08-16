<template>
  <div class="home">
    <p>{{ $t('message') }}</p>
    <p>{{ $t('hello', { msg: 'hello' }) }}</p>
    <p>{{ $t('hello', ['My name','hello']) }}</p>
    <p>{{ $tc('car', 1) }}</p>
    <p>{{ $tc('car', 2) }}</p>

    <p>{{ $tc('apple', 0) }}</p>
    <p>{{ $tc('apple', 1) }}</p>
    <p>{{ $tc('apple', 10, { count: testCount }) }}</p>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $n(100, 'currency') }}</p>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  testCount = 20;
};
</script>
