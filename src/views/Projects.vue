<template>
 <div id="projects">
  <h1>toemaar</h1>
 {{info}}
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      info: null
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec`, { crossdomain: true })
    .then(response => {
      // JSON responses are automatically parsed.
      this.info = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>