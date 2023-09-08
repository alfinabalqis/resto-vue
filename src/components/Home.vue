<template>
    <Header />
    <h1>Halo {{ name }}, this is Landing Page</h1>
    <center>
        <table border="1">
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Address</td>
            </tr>

            <tr v-for="item in restaurant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.addres }}</td>
            </tr>
        </table>
    </center>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'HomeVue',
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).username
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }

        let resto = await axios.get("http://localhost:3000/restaurant");
        console.warn(resto);
        this.restaurant = resto.data;
    }
}
</script>
<style scoped>
td {
    width: 200px;
    height: 40px;
    text-align: center;
}
</style>