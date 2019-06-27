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

    },
    methods:{
        gotoMonth:function(minus){
            console.log('here in gotoMonth')
        },
        gotoCurrentMonth:function(){
            console.log('here in gotoCurrentMonth')
        },
        gotoMonth:function(add){
            console.log('here in gotoMonth')
        }
    }
}
</script>

<style>

</style>
