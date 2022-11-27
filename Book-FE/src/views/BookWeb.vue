<template>
    <div class="page row">
    <div class="col-md-10">
    <InputSearch v-model="searchText" />
    </div>
    <div class="mt-3 col-md-6">
    <h4>
    Danh bạ
    <i class="fas fa-address-book" />
    </h4>
    <BookList
    v-if="filteredBooksCount > 0"
    :books="filteredBooks"
    v-model:activeIndex="activeIndex"
    />
    <p v-else>
    Không có liên hệ nào.
    </p>
    <div class="mt-3 row justify-content-around align-items-center">
    <button
    class="btn btn-sm btn-primary"
    @click="refreshList()"
    >
    <i class="fas fa-redo" /> Làm mới
    </button>

    <button
    class="btn btn-sm btn-success"
    @click="goToAddBook"
    >
    <i class="fas fa-plus" /> Thêm mới
    </button>

    <button
    class="btn btn-sm btn-danger"
    @click="onDeleteBooks"
    >
    <i class="fas fa-trash" /> Xóa tất cả
    </button>
    </div>
    </div>
    <div class="mt-3 col-md-6">
    <div v-if="activeBook">
    <h4>
    Chi tiết Liên hệ
    <i class="fas fa-address-card" />
    </h4>
    <BookCard :book="activeBook" />
    </div>
    </div>
    </div>
    </template>
    <script>
    import BookCard from '@/components/BookCard.vue';
    import InputSearch from '@/components/InputSearch.vue';
    import BookList from '@/components/BookList.vue';
    import { bookService } from '@/services/book.service';
    export default {
    components: {
    BookCard,
    InputSearch,
    BookList,
    },
    // The full code will be presented below
    };
    </script>
    <style scoped>
    .page {
    text-align: left;
    max-width: 750px;
    }
    </style>