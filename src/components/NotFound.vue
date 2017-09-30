<template>
    <div>
        <p>{{msg}}</p>
        <router-link to='/main'>去首页</router-link>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: '404 - Page Not Found'
        }
    },
    methods: {

    }
}
</script>

<style>

</style>


