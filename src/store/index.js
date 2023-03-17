import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    isAuthenticated:false,
    token:null,
    users:[
        {
            id:1,
            username:'Emeka',
            password:'Emmyboi'
        },
        {
            id:2,
            username:'Makuo',
            password:'mackpass'
        }
    ],
    Auth: localStorage.getItem("signup"),
},
mutations: {
    setUser(state,user){
        state.user=user
        state.isAuthenticated=true
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('auth',state.isAuthenticated)
    },
    unsetUser(state){
        state.user=null
        state.isAuthenticated=false
        state.token=null
        localStorage.removeItem('user')
        localStorage.removeItem('auth')
    },
    setToken(state,token) {
        state.token=token
    },
    signup(state) {
    state.users=JSON.parse(localStorage.getItem("signup"))
    }
},
actions: {
    login({commit},{username,password}) {
        // const users =[
        //     {
        //         id:1,
        //         username:'Emeka',
        //         password:'Emmyboi'
        //     },
        //     {
        //         id:2,
        //         username:'Makuo',
        //         password:'mackpass'
        //     }
        // ]
        const user=this.state.users.find(user => user.username===username && user.password===password)
        if (user) {
            const token ='abc123'
            commit ('setUser',user)
            commit ('setToken',token)
            // this.state.user=user
        }
        else {
            // console.log('Invalid Details')
            throw new Error('Invalid Creditendials')
            // History.pushState({},null,'/about')
        }
    },
    // signUp({commit,state},user) {
    //     const newUser = {
    //         id:state.users.length+1,...user
    //     }
    //     commit('addUser',newUser)
    //     commit('setUser',newUser)
    // },
    signup({state},user) {
        user.id=state.users.length+1
        // state.users = JSON.parse(localStorage.getItem('set') || this.store.$state.users)
        state.users.push(user)
        // localStorage.setItem('set',JSON.stringify(state.users))
    },
    logout({commit}) {
        commit('unsetUser')
    },
    set() {
        localStorage.setItem("signup", JSON.stringify(this.state.users));
      },
      get() {
        const stored = localStorage.getItem("signup");

        if (stored) {
          return JSON.parse(stored);
        }
        return this.state.users
      },
},
getters: {
    isAuthenticated(state) {
        return state.isAuthenticated
    },
    users(state) {
        return state.users
    }
}
})
