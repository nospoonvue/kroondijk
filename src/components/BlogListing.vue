<template>
  <div class="BlogListing">
     <div v-for="(item, index) in blogs" :key="index">
   {{ item.fields["Title-NL"]}}
</div>
    Bloglisting
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BlogListing extends Vue {
 // @Prop() private msg!: string;
 @Prop() private blogs!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
