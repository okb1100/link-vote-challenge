<template>
  <div>
   
      
      <Container>
        <Card :pointer="true" @click.native="showSubmitPage">
          Submit a link
        </Card>
        <LinkCard
          v-for="item in items.filter(
            (item, index) =>
              index + 1 > (currentPage - 1) * pageSize &&
              index < currentPage * pageSize
          )"
          :title="item.name"
          :url="item.url"
          :points="item.points"
          :key="item.id"
        />
      </Container>

      <Pagination
        @set-page="handlePageChange"
        v-if="items.length > pageSize"
        :currentPage="currentPage"
        :totalPages="Math.ceil(items.length / pageSize)"
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
  data: () => ({
    pageSize: 5,
    currentPage: 1,
    items: [
      {
        id: "uuid-1",
        name: "1",
        url: "https://google.com",
        points: 5,
      },
      {
        id: "uuid-2",
        name: "2",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "3",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "4",
        url: "https://google.com",
        points: -5,
      },{
        id: "uuid-2",
        name: "5",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "6",
        url: "https://google.com",
        points: -5,
      },
     
    ],
  }),
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

</style>
