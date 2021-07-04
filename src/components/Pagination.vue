<template>
    <div class="pagination-container">
        <div 
        v-on:click="setPage(currentPage-1)"
        class="pagination-arrow" v-if="currentPage > 1">
            &lt;
        </div>
        <div 
            class="pagination-number"
            v-bind:class="{ current: currentPage === page}"
            :key="page"
            v-for="page in pagesArray"
            v-on:click="setPage(page)"
        >
            {{page}}
        </div>
        <div 
        v-on:click="setPage(currentPage+1)"
        class="pagination-arrow" v-if="currentPage < pagesArray.length">
            &gt;
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        currentPage: Number,
        totalPages: Number
    },
    computed: {
        pagesArray() {
            return [...Array(this.totalPages).keys()].map(i => i+1)
        }
    },   
    methods: {
        setPage(page) {
            this.$emit('set-page', page)
        }
    }
}
</script>

<style>
    .pagination-container{
        display: flex;
        flex-direction: row;
        margin: 10px 0 10px 0;
        font-size: 1.15em;
        align-self: center;
        justify-self: flex-end;
    }

    .pagination-number, .pagination-arrow{
        padding: 5px;
        cursor: pointer;
    }

    .pagination-number.current{
        font-weight: bold;
    }
</style>