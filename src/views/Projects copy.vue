<template>
 <div id="projects">
  <h1>Bitcoin Price Index</h1>
 {{info}}
</div>
</template>

<script>
import axios from 'axios';
import App from '../App.vue'

async function loadItems()
{
     try {
       const response = await axios.get(`https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec`);
       this.info = response.data;
     //  this.blaat2();
     } catch (e) {
         alert(e);
       //this.errors.push(e)
     }

}

var config = {
    headers: {'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain;charset=utf-8'}
};

export default {
  data() {
    return {
      info: "blaat"
    }
  },
  methods()
  {
      blaat2()
      {
          this.info = "fdsfssfsd";
      }
  },

  // Fetches posts when the component is created.
  created() {

loadItems();
/*
    axios.get
            (
            "https://script.google.com/macros/s/AKfycbxdxAaP33kUP1kO0J4TOHKdz6FMoiIVPCqQvrGaoNfrWbAeJiY/exec", 
            {}
            ).then(function (response) {
             
             this.info = response.data.records[0].id;
            //alert(response.data.records[0].id);

            }).catch
            (
                function (error) 
                {
                    console.log(error)
                }
            )
  */
/*
    axios({
    method: 'get',
    url: 'https://script.google.com/macros/s/AKfycbx4cVgWqXOtoRqvX70nqhlP0N6dslt2uUoPTymyZwsB-cE81-H8/exec',
    data: {

    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain;charset=utf-8'
    },
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
*/
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