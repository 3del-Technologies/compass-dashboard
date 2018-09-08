<template>
 <div id="app">
 <div class="ui container">

    <b-table striped hover :items="fixedData"></b-table>

    <!-- <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination> -->
    </div>
</div>
</template>

<script>
import jsontable from '../../directory.json'

export default {
  data () {
    return {
      data: jsontable
    }
  },
  computed: {
    fixedData: function () {
      return Object.values(this.data.organizations)
    }
  }
}
</script>




  
