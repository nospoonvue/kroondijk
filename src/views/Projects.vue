<template>
 <div id="projects">
  <h1>bla</h1>
  <BlogListing id="blogListing" v-bind:blogs="info" />

  
wat een mooie template
</div>
</template>

<script>
import axios from 'axios';
import BlogListing from '@/components/BlogListing.vue'

const baseUrl = `https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec`;

async function getData(viewStatus)
{
     await axios.get (baseUrl, {})
            .then(response => 
            {
                 viewStatus.info = response.data.records;
                 viewStatus.status = "done";

            }).catch
            (
                function (error) 
                {
                    console.log(error)
                    viewStatus.status = error;
                }
            )
}

export default 
{
    name: "projects",
    components: {BlogListing},

    data() 
    {
    return {
        info: null,
        status: ""
        }
    },
    created() 
    {
        this.status = "loading...";
        getData(this);
    },
}


/*
 axios.get
            (
            `https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec`, //google script, NOT Airtable
            {
            }
            ).then(response => {
                 this.info = response.data.records;

            }).catch
            (
            function (error) {
                console.log(error)

            }
            )
           */ 
      /*
    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.info = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
*/
    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
</script>



