<template>
    <div id="app">
        <img src="./assets/logo.png" alt="">
        <h1>Hola desde el componente APP de vue</h1>
        <Checkout msg="Hola"></Checkout>
    </div>
</template>
<script>
import Checkout from './components/Checkout.vue';
export default {
    name: 'app',
    components: {
        Checkout,
    },
}
</script>

<style>
#app{
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smooting: antialiesed;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>