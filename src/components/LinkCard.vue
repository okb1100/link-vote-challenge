<template>
  <Card class="link-card-container">
    <PointsCounter :points="link.points" />
    <div class="info">
      <div class="link-card-title">
          {{ link.name }}
          <span class="link-card-time">
            {{ createdAt }}
          </span>
      </div>
      <div class="link-card-url">
        <a target="_blank" :href="link.url">{{ link.url }}</a>
      </div>
      <div class="vote-container">
        <VoteButton @click.native="vote(true)" type="up" />
        <VoteButton @click.native="vote(false)" type="down" />
      </div>
    </div>
    <div @click="removeLink" class="link-card-delete">&times;</div>
  </Card>
</template>

<script>
import PointsCounter from "./PointsCounter.vue";
import Card from "./Card.vue";
import VoteButton from "./VoteButton.vue";
import { mapActions } from 'vuex';
export default {
  name: "LinkCard",
  components: {
    PointsCounter,
    VoteButton,
    Card,
  },
  props: {
    link: Object,
  },
  methods: {
    ...mapActions(['voteLink']),
    removeLink() {
      this.$emit("delete", this.link);
    },
    vote(voteUp) {
      this.voteLink({ id: this.link.id, voteUp });
    },
  },
  computed: {
      createdAt(){
          return new Date(this.link.createdAt).toLocaleTimeString()
      }
  }
};
</script>

<style>
.link-card-delete {
  transition: opacity 300ms;
  opacity: 0;
  cursor: pointer;
  background: #565656;
  width: 24px;
  height: 24px;
  position: absolute;
  right: -10px;
  top: -10px;
  color: white;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #c2c2c2;
}

.link-card-container:hover .link-card-delete {
  opacity: 1;
}

.info {
  width: 90%;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vote-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

.link-card-title {
  font-weight: bold;
  font-size: 1.25em;
}

.link-card-time{
    font-size: x-small;
    color: #969696;
    font-weight: lighter;
}

.link-card-url a,
.link-card-url a:hover,
.link-card-url a:visited,
.link-card-url a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>