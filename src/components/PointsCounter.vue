<template>
    <div class="points-counter">
        <div>
            {{points}} <div>Points</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        points: Number
    }
}
</script>

<style>
    .points-counter{
        border: 1px solid #c2c2c2;
        border-radius: 5px;
        padding: 15px;
    }
</style>