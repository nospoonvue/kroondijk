<template>
 <div id="projects">
  <h1>bla</h1>
  {{status}}

 <div v-for="(item, index) in info" :key="index">
   {{ item.fields["Title-NL"]}}
</div>
</div>
</template>

<script>
import axios from 'axios';
const url = `https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec`;

async function getData(appding)
{
     await axios.get (url, {})
            .then(response => 
            {
                 appding.info = response.data.records;
                 appding.status = "";

            }).catch
            (
                function (error) 
                {
                    console.log(error)
                    appding.status = error;
                }
            )
}

export default 
{
  data() {
    return {
      info: null,
      status: ""
    }
  },
  // Fetches posts when the component is created.
    created() 
    {
        this.status = "loading...";
        getData(this);
    }
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



