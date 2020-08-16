<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { Item } from "../types";

@Component
export default class ArticleView extends Vue {
  @Prop() item?: Item;

  truncate(str: string, n: number) {
    return str.length > n ? `${str.substr(0, n - 1)} ...` : str;
  }

  viewMore(id: string, item: any) {
    this.$router.push({
      name: "Article",
      params: { id, item }
    });
  }
}
</script>

<template>
  <el-row type="flex" justify="center">
    <el-col :xs="23" :sm="22" :md="20" :lg="18" :xl="18" class="post-view">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <h3>
            {{ item.title }}
          </h3>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="post-sub-title">
        <el-col :span="5">
          {{ $t("article.destination-title") }}
          <strong>{{ item.destination }}</strong>
        </el-col>
        <el-col :span="5">
          {{ $t("article.added-title") }}
          <strong>{{ item.autor }}</strong>
        </el-col>
        <el-col :span="5">
          {{ item.postTime }}
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <img :src="item.image" alt="post picture" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <p>
            {{ truncate(item.text, 200) }}
          </p>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col class="post-control" :span="12">
          <el-button @click="viewMore(item.id, item)">
            {{ $t("article.view-more-button") }}
          </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.post-view {
  margin-bottom: 40px;
  &:first-child {
    margin-top: 20px;
  }
  h3 {
    margin: 0;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    color: #1e1e1e;
  }
  img {
    width: 100%;
  }
}
.post-sub-title {
  margin: 25px 0;
  div {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #9b9b9b;
    strong {
      color: #4a4a4a;
    }
  }
}
.post-control{
  text-align: center;
  margin: 15px 0;
}
</style>
