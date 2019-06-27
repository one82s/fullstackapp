<template>
    <v-card style="width:100%">
        <v-card-title>
            <span class="pr-3">
                Transaction
            </span>
            <v-btn flat icon class="pr-2" v-on:click="gotoMonth(-1)">
                <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn flat icon class="pr-2" v-on:click="gotoCurrentMonth">
                <v-icon>today</v-icon>
            </v-btn>
             <v-btn flat icon v-on:click="gotoMonth(1)">
                <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="search"
                label="Search"
                single-line
                v-model="transaction.transactionDate"
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            v-bind:headers="headers"
            v-bind:items="items"
            v-bind:search="search"
            item_key="_id"
        >
            <template slot="items" slot-scope="props">
                <tr>
                    <td>
                        <v-edit-dialog lazy>
                            {{props.item.transactionDate}}
                            <v-text-field
                                slot="input"
                                label="Edit"
                                v-model="props.item.transactionDate"
                                single-line
                            ></v-text-field>
                        </v-edit-dialog>
                    </td>
                    <td class="text-xs-left">{{props.item.productId}}</td>
                    <td class="text-xs-left">{{props.item.productName}}</td>
                    <td class="text-xs-right">{{props.item.amount}}</td>
                </tr>
            </template>

            <template slot="pageText" slot-scope="{pageStart, pageStop}">
                From {{pageStart}} to {{pageStop}}
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
  data(){
      return{
          months:[
            {name:'Zero', abbrev:'ZZZ', index:0},
            {name:'January', abbrev:'Jan', index:1},
            {name:'February', abbrev:'Feb', index:2},
            {name:'March', abbrev:'Mar', index:3},
            {name:'April', abbrev:'Apr', index:4},
            {name:'May', abbrev:'May', index:5},
            {name:'June', abbrev:'Jun', index:6},
            {name:'July', abbrev:'Jul', index:7},
            {name:'August', abbrev:'Aug', index:8},
            {name:'September', abbrev:'Sep', index:9},
            {name:'October', abbrev:'Oct', index:10},
            {name:'November', abbrev:'Nov', index:11},
            {name:'December', abbrev:'Dec', index:12}
          ],
          max25Chars:(v)=>v.length<=25||'Input too long',
          search:'',
          pagination:{},
          headers:[
            {text:'Date', align:'center', sortable:false, value:'date'},
            {text:'Product Id', align:'center', sortable:false, value:'productId'},
            {text:'Product Name', align:'center', sortable:false, value:'productName'},
            {text:'amount', align:'center', sortable:false, value:'amount'},
          ],
        items:[
            {'id':'5d143e5de02f3318f61e6e7a'},
            {'transactionDate':'12/29/2018'},
            {'productId':'product1'},
            {'productName':'Cookie Dough - Peanut Butter'},
            {'amount':'26'}
        ]
      }
  },  
  methods: {
    gotoMonth: function (param) {
      console.log('here in gotoMonth')
    },
    gotoCurrentMonth: function () {
      console.log('here in gotoCurrentMonth')
    }
  }
}
</script>

<style>

</style>
