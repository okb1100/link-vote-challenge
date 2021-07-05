<template>
  <div>
   
      
      <Container>
        <Card :pointer="true" @click.native="showSubmitPage">
          Submit a link
        </Card>
        <div class="list-empty" v-if="!$store.state.links.length">No record found</div>
        <LinkCard
          v-for="item in $store.state.links.filter(
            (item, index) =>
              index + 1 > (currentPage - 1) * pageSize &&
              index < currentPage * pageSize
          )"
          :link="item"
          :key="item.id"
        />
      </Container>

      <Pagination
        @set-page="handlePageChange"
        v-if="$store.state.links.length > pageSize"
        :currentPage="currentPage"
        :totalPages="Math.ceil($store.state.links.length / pageSize)"
      />
    </div>
</template>

<script>
import LinkCard from "../components/LinkCard.vue";
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import Container from '../components/Container.vue';
export default {
  name: "LinkList",
  components: {
    LinkCard,
    Pagination,
    Card,
    Container,
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
    },
    showSubmitPage(){
      this.$router.push('add')
    }
  },
  data() {return {
    pageSize: 5,
    currentPage: 1,
  }},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.links-container {
  display: flex;
  flex-direction: column;
}

.list-empty{
  margin-top: 20px;
}

</style>
