<template>
  <Card class="link-card-container">
    <PointsCounter :points="points" />
    <div class="info">
      <div class="link-card-title">{{ title }}</div>
      <div class="link-card-url">
        <a :href="url">{{ url }}</a>
      </div>
      <div class="vote-container">
        <VoteButton type="up" />
        <VoteButton type="down" />
      </div>
    </div>
    <div class="link-card-delete">&times;</div>
  </Card>
</template>

<script>
import PointsCounter from "./PointsCounter.vue";
import Card from "./Card.vue";
import VoteButton from "./VoteButton.vue";
export default {
  name: "LinkCard",
  components: {
    PointsCounter,
    VoteButton,
    Card,
  },
  props: {
    title: String,
    url: String,
    points: Number,
  },
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

.link-card-url a,
.link-card-url a:hover,
.link-card-url a:visited,
.link-card-url a:active {
  color: inherit;
  text-decoration: inherit;
}
</style>