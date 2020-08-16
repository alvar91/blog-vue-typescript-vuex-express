<template>
  <div class="home">
    <div v-if="articles">
      <ArticleView
        v-for="item in articles"
        v-bind:key="item.id"
        :item="item"
      ></ArticleView>
    </div>
    <div v-else>
      {{ $t("empty-page") }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ArticleView from "../components/ArticleView";

@Component({
  components: {
    ArticleView
  }
})
export default class Home extends Vue {
  articles = [
    {
      id: 1,
      title: "Test",
      destination: "Destination Europe",
      autor: "Added by John Williams Doe",
      postTime: "January 01, 2018",
      image:
        "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    },
    {
      id: 2,
      title: "Test2",
      destination: "Destination Europe",
      autor: "Added by John Williams Doe2",
      postTime: "January 01, 2018",
      image:
        "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    },
    {
      id: 3,
      title: "Test3",
      destination: "Destination Europe",
      autor: "Added by John Williams Doe 3",
      postTime: "January 01, 2018",
      image:
        "https://images.wallpaperscraft.com/image/beautiful_scenery_mountains_lake_nature_93318_1280x800.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis viverra sapien. Mauris vehicula est vitae sodales aliquam. Aliquam sem nisl, pretium et justo vitae, sagittis dictum nunc. Nulla facilisi. Sed ultrices nisl lorem, in consequat urna facilisis a. Sed eu hendrerit risus."
    }
  ];
}
</script>
