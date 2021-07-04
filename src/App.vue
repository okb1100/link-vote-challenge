<template>
  <div id="app">
    <Header>
      <template v-slot:brand>
        <span>Digitastic<strong>.Plus</strong></span>
      </template>
      <template v-slot:title>
        <span>Link<strong>Vote</strong> Challenge</span>
      </template>
    </Header>
    <div class="links-container">
      <div class="links-inner-container">
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
      </div>

      <Pagination
        @set-page="handlePageChange"
        v-if="items.length > pageSize"
        :currentPage="currentPage"
        :totalPages="Math.ceil(items.length / pageSize)"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LinkCard from "./components/LinkCard.vue";
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    Header,
    LinkCard,
    Pagination,
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
    },
  },
  data: () => ({
    pageSize: 5,
    currentPage: 3,
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
      },
      {
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
      {
        id: "uuid-2",
        name: "7",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "8",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "9",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "10",
        url: "https://google.com",
        points: -5,
      },
      {
        id: "uuid-2",
        name: "11",
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

.links-inner-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
}
</style>
