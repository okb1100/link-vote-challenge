<template>
    <div class="header">
        <div class="brand-container">
            <slot name="brand"></slot>
        </div>
        <div class="title-container">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style>
    .header{
        border-bottom: 1px solid #c7c7c7;
        padding: 20px 0 10px 0;
        display: flex;
        justify-content: space-between;
    }

    .header div{
        display: inline-block;
    }

    .brand-container{
        max-width: 30%;
        margin-left: 30px;
    }
    .title-container{
        max-width: 30%;
        margin-right: 30px;
    }
</style>