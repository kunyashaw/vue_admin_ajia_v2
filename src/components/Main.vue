<template>
    <div>
        <p>{{msg}}</p>

        <router-view></router-view>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            msg: 'Main'
        }
    },
    methods: {

    }
}
</script>

<style>

</style>


