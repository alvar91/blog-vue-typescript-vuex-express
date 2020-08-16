<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "ArticlePage"
})
export default class ArticlePage extends Vue {
  content = "";

  created() {
    this.content = this.$route.params.item;
  }

  backToArticles() {
    this.$router.go(-1);
  }
}
</script>

<template>
  <el-row type="flex" justify="center" class="article-page">
    <el-col :xs="23" :sm="22" :md="20" :lg="16" :xl="16">
      <h1>
        {{ content.title }}
      </h1>
      <img :src="content.image" alt="post picture" />
      <p>
        {{ content.text }}
      </p>
      <el-divider></el-divider>
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="article-information text-left">
          {{ content.autor }}
        </el-col>
        <el-col :span="12" class="article-information text-right">
          {{ content.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="article-control">
        <el-col :span="12">
          <el-button @click="backToArticles" type="primary">{{
            $t("article.back-button")
          }}</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.article-page {
  margin-bottom: 30px;
  img {
    width: 100%;
  }
}
.article-information {
  color: #5c5c5c;
}
.article-control {
  margin-top: 20px;
}
</style>
