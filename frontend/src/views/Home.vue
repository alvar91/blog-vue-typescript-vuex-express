<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="12" class="articles-control">
        <el-input :placeholder="$t('search')" v-model="searchValue"></el-input>
        <el-tooltip
          effect="dark"
          :content="$t('tooltip')"
          placement="top-start"
        >
          <el-button
            type="primary"
            :icon="viewMode ? 'el-icon-edit' : 'el-icon-star-off'"
            circle
            @click="changeView"
          ></el-button>
        </el-tooltip>
      </el-col>
    </el-row>
    <div v-if="articles" :class="viewMode ? '' : 'block-view'">
      <ArticleView
        v-for="item in articles"
        v-bind:key="item.id"
        :item="item"
        :search="searchValue"
        :viewMode="viewMode"
      ></ArticleView>
    </div>
    <div v-else>
      {{ $t("empty-page") }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import ArticleView from "../components/ArticleView.vue";
const Articles = namespace('Articles');
@Component({
  components: {
    ArticleView
  }
})
export default class Home extends Vue {
  @Articles.State articles: any;
  searchValue: string = "";
  viewMode: boolean = true;

  changeView() {
    this.viewMode = !this.viewMode;
  }
}
</script>
<style lang="scss" scoped>
.articles-control {
  .el-input {
    display: inline-block;
    width: 250px;
    margin: 0 5px 0 0;
    @media (max-width: 768px) {
      display: block;
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}
.block-view {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
