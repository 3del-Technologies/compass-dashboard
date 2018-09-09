<template>
  <v-card>
    <v-card-title>
      Organizations
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="Organization"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.address }}</td>
        <td class="text-xs-right">{{ props.item.phone }}</td>
        <td class="text-xs-right">{{ props.item.website }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Organization name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Address', value: 'address' },
          { text: 'Phone', value: 'phone' },
          { text: 'Website', value: 'website' },
          { text: 'Email', value: 'email' }
        ],
        Organization: [
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          },
          {
            value: false,
            name: 'Lab12',
            address: '4388 rue Saint-Denis, bureau 200, Montréal, QC H2J 2L1',
            phone: '514-999-1999',
            website: 'http://www.pitonneux.org',
            email: 'pitonneux@lab12.org'
          }
        ]
      }
    }
  }
</script>