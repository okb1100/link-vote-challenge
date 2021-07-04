<template>
<div class="vote-button-container">
    <div v-if="type === 'up'">↑ Upvote</div>
    <div v-if="type === 'down'">↓ Downvote</div>
</div>
  
</template>

<script>
export default {
    name: 'VoteButton',
    props:{
        type: String
    }
}
</script>

<style>
    .vote-button-container{
        cursor: pointer;
    }
</style>