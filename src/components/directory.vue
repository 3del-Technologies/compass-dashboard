<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
import jsontable from './directory.json'

export default {
  data () {
    return {
      data: jasontable
    }
  }
}
</script>




  
