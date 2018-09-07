<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
const items = [
  {
    Organizations: 'Consulat Général Autriche',
    Adress: '630 boul René-Lévesque O, Montréal QC H3B 1S6',
    Phone: '514-849-3700',
    Website: 'http://www.austriantrade.org/'
  },
  {
    Organizations: 'Consulat Général Autriche',
    Adress: '630 boul René-Lévesque O, Montréal QC H3B 1S6',
    Phone: '514-849-3708',
    Website: 'http://www.austriantrade.org/'
  },
  {
    Organizations: 'Consulat Général Autriche',
    Adress: '630 boul René-Lévesque O, Montréal QC H3B 1S6',
    Phone: '514-849-3708',
    Website: 'http://www.austriantrade.org/'
  },
  {
    Organizations: 'Consulat Général Autriche',
    Adress: '630 boul René-Lévesque O, Montréal QC H3B 1S6',
    Phone: '514-849-3708',
    Website: 'http://www.austriantrade.org/' }
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>



  
