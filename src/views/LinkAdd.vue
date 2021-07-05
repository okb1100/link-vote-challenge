<template>
<Container>
  <Card :pointer="true" @click.native="showListPage">
      &lt; Return to list
  </Card>
  <h3>Add New Link</h3>
  <form action=""></form>
</Container>
</template>

<script>
import Card from "../components/Card.vue"
import Container from '../components/Container.vue'

export default {
  components: { Card, Container },
    name: "LinkAdd",
    methods:{
        showListPage(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>