const state = { 
    email:'',
    userId:null,
    isLoggeIn:false,
    loginError:''
}

const getters = {
    isLoggeIn: state=>state.isLoggeIn,
    userId: state=>state.userId,
    loginError: state=>state.loginError,
}

const actions ={
    loginUser({commit},payload){
        //Stubbing for now, call to API to follow
        if(payload.email === 'test@user.com' && payload.password ==='12345'){
            payload.userId = '5d11bc9ee02f3318f61e6db9'
            commit('loginUser', payload)
        }else{
            commit('loginError')
        }
    }
}

const mutatins ={
    loginUser(state, paylod){
        state.email=payload.email
        state.userId=paylod.userId
        state.isLoggeIn = true
    },
    loginError(state){
        state.isLoggeIn=false
        state.loginError='Email and/or password are invalid. Login failed'

    }
}