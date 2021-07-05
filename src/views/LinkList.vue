<template>
  <div>
    <ConfirmModal
      :visible="modalVisible"
      :title="modalTitle"
      @confirmed="removeLink"
      @canceled="hideModal"
    >
      <div v-html="modalContent"></div>
    </ConfirmModal>
    <Container>
      <Card :pointer="true" @click.native="showSubmitPage">
        Submit a link
      </Card>
      <div class="sort-container">
        <label for="sort-by">Sort By:</label>
        <select id="sort-by" v-model="sortBy">
          <option value="createdAt|DESC">Newest First (Z->A)</option>
          <option value="createdAt|ASC">Oldest First (A->Z)</option>
          <option value="points|DESC">Most Voted (Z->A)</option>
          <option value="points|ASC">Least Voted (A->Z)</option>
        </select>
      </div>

      <div class="list-empty" v-if="!linkCount">No record found</div>
      <LinkCard
        v-for="link in sortedLinks"
        :link="link"
        :key="link.id"
        @delete="askRemoveLink"
      />
    </Container>
    <Pagination
      @set-page="handlePageChange"
      v-if="linkCount > pageSize"
      :currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LinkCard from "../components/LinkCard.vue";
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import Container from "../components/Container.vue";
import ConfirmModal from "../components/ConfirmModal.vue";
export default {
  name: "LinkList",
  components: {
    LinkCard,
    Pagination,
    Card,
    Container,
    ConfirmModal,
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
    },
    showSubmitPage() {
      this.$router.push("add");
    },
    hideModal() {
      this.linkToRemove, this.modalContent, (this.modalTitle = null);
      this.modalVisible = false;
    },
    askRemoveLink(link) {
      this.linkToRemove = link;
      this.modalContent = `Are you sure you want to remove <b>${link.name}</b>?`;
      this.modalTitle = "Remove link";
      this.modalVisible = true;
    },
    removeLink() {
      this.$store.commit("removeLink", this.linkToRemove.id);
      this.$store.dispatch("showToast", {
        content: `${this.linkToRemove.name} removed`,
        type: "success",
      });
      this.hideModal();
    },
  },
  computed: {
    ...mapGetters(["linkCount", "links"]),
    sortedLinks() {
      return this.links(this.pageSize, (this.currentPage - 1) * this.pageSize, {
        key: this.sortBy.split("|")[0],
        order: this.sortBy.split("|")[1],
      });
    },
    totalPages() {
      return Math.ceil(this.linkCount / this.pageSize);
    },
  },
  data() {
    return {
      pageSize: 5,
      currentPage: 1,
      sortBy: "createdAt|DESC",
      modalContent: null,
      modalTitle: null,
      linkToRemove: null,
      modalVisible: false,
    };
  },
};
</script>

<style>
.links-container {
  display: flex;
  flex-direction: column;
}

.list-empty {
  margin-top: 20px;
}

.sort-container {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}
.sort-container select {
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
}
</style>
