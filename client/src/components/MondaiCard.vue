<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{item.title}}</p>
    </header>
    <div class="card-content">
      <p>{{item.author}}</p>
      <b-tag class="is-primary mr">{{site[item.site].name}}</b-tag>
      <b-tag class="is-info">{{genre[item.genre]}}</b-tag>
      <p class="multiline mb">{{item.description}}</p>
      <p class="multiline"><a target="_blank" v-bind:href="url(item.site, item.id)">{{url(item.site, item.id)}}</a></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      id: Number,
      title: String,
      site: String,
      author: String,
      genre: String,
      description: String
    }
  },
  computed: {
    site: function () {
      return this.$store.state.site
    },
    genre: function () {
      return this.$store.state.genre
    }
  },
  methods: {
    url: function (siteName, id) {
      return this.site[siteName].showUrl + id
    }
  }
}
</script>
<style scoped>
.card {
  display:flex;
  flex-direction: column;
  height: 100%;
}
</style>
