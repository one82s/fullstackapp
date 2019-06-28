import Vue from 'vue'

const state = {
    months: [
        {name: 'Zero', abbrev: 'ZZZ', index: 0},
        {name: 'January', abbrev: '1', index: 1},
        {name: 'February', abbrev: '2', index: 2},
        {name: 'March', abbrev: '3', index: 3},
        {name: 'April', abbrev: '4', index: 4},
        {name: 'May', abbrev: '5', index: 5},
        {name: 'June', abbrev: '6', index: 6},
        {name: 'July', abbrev: '7', index: 7},
        {name: 'August', abbrev: '8', index: 8},
        {name: 'September', abbrev: '9', index: 9},
        {name: 'October', abbrev: '10', index: 10},
        {name: 'November', abbrev: '11', index: 11},
        {name: 'December', abbrev: '12', index: 12}
      ],
      days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      currentMonth: 6,
      currentDay: 27,
      currentYear: 2019,
      product:'',
      transactions:[]
}

const getters ={
    productById: state=>state.transactions
}

const actions ={
    getProductById({commit, state, rootState}, payload){
        commit('productById')
    },
    async gotoMonth({commit}, increment){
        commit('gotoMonth', increment)
    },
    async gotoCurrentMonth({commit}){
        commit('gotoCurrentMonth')
    }
}

const mutations ={
    productById(state, data){
        state.product = ''
        if(data && data.length>0){
            data.array.forEach(tx => {
                state.transactions.push(this.mapTransactions(tx, state))
            })
        }
        console.log('Product by ID mutated: ', state.product)
    },
    mapTransactions(tx, state){
        const transDate = new Date(tx.transactionDate)
        const months = state.months
        const days = state.days
        const currentYear = state.currentYear
        let transaction = {
          transactionDate: months[transDate.getUTCMonth() + 1].abbrev + '/' + days[transDate.getDay] + '/' + currentYear,
          productId: tx.productId,
          productName: tx.productName,
          amount: tx.amount
        }
        return transaction
    },
    gotoMonth(state, increment){
        let newMonth = state.currentMonth+=increment
        //Sanity check
        if(newMonth>12){
            newMonth=1
        }else if(newMonth<1){
            newMonth=12
            state.currentYear -=1
        }
        state.currentMonth = newMonth
    },
    gotoCurrentMonth(state){
        let dt = new Date(Date.now)
        state.currentMonth=dt.getUTCMonth()+1
        state.currentDay=dt.getUTCDay()
        state.currentYear=dt.getUTCFullYear()
    }
}

export default{
    state,
    getters, 
    actions,
    mutations
}
