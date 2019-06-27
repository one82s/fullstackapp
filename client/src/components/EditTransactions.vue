<template>
    <div>
        <v-btn
            fab
            bottom
            right
            color="orange"
            dark
            fixed
            @click.stop="showEditTransactionDialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800">
            <v-card>
                <v-card-title class="grey lighten py-4 title">
                    New Transaction
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-menu
                                ref="datePicker"
                                lazy
                                :close-on-content-click="false"
                                v-model="transactionDatePicker"
                                transition="scale-trasition"
                                offset-y
                                full-width
                                :nudge-right="40"
                                max-width="290px"
                                min-width="290px"
                            >
                                <v-text-field
                                    slot="activator"
                                    label="Select Transaction Date"
                                    v-model="transaction.transactionDate"
                                    prepend-icon="event"
                                    readonly
                                ></v-text-field>
                                <v-datepicker
                                    v-model="transaction.transactionDate"
                                    v-on:input="$refs.datePicker.save(transaction.transactionDate)"
                                ></v-datepicker>
                            </v-menu>
                        </v-flex>
                        <!-- <v-flex xs12>
                            <v-select
                                prepend-icon="credit_card"
                                v-bind:items="transactionTypes"
                                v-model="transaction.transactionType"
                                label="Transaction Type"
                                single-line
                                bottom
                            ></v-select>
                        </v-flex> -->
                        <v-flex xs12>
                            <v-select
                                prepend-icon="description"
                                placeholder="Description"
                                v-model="transaction.productName"
                            ></v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog=false">Cancel</v-btn>
                    <v-btn flat @click="saveTransaction">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    transaction: {
      productId: null,
      transactionDate: null,
      productName: '',
      amount: 0.0
    },
    transactionDatePicker: false
  }),
  methods: {
    saveTransaction: function () {
      console.log('saveTransaction here')
    },
    showEditTransactionDialog: function () {
      this.transaction.transactionDate = this.getCurrentDate()
      this.dialog = true
    },
    getCurrentDate: function () {
      const dt = new Date(Date.now)
      let month = '' + (dt.getMonth + 1)
      let day = '' + dt.getDate()
      let year = dt.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day
      return [year, month, day].join('-')
    }
  }
}
</script>

<style>

</style>
