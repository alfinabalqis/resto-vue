<template>
    <img class="logo" alt="Logo Brand" src="../assets/logo-makan.webp">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="username" placeholder="Enter Username" required>
        <input type="email" v-model="email" placeholder="Enter Email" required>
        <input type="password" v-model="password" placeholder="Enter Password" required>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() 
        { 
             let result = await axios.post("http://localhost:3000/users", {
                username: this.username,
                email : this.email,
                password: this.password
             });

             console.warn(result)
             if(result.status==201){
                // alert("Berhasil Register");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: "HomeVue"})
             }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if (user){
            this.$router.push({name: "HomeVue"})
        }
    }
}
</script>
