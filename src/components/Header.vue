<template>
    <div>
        <nav class="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/add">Add Restaurant</router-link>
            <router-link to="/update">Update Restaurant</router-link>
            <a v-on:click="logout" href="#">Logout</a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'HeaderVue',
    methods: {
        logout(){
            localStorage.clear();
            this.$router.push({name: 'LoginPage'})
        }
    }
}
</script>
