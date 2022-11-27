<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ book.name }}
        </div>
        
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ book.email }}
        </div>

        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ book.address }}
        </div>
        
        <div class="p-1">
            <strong>Liên hệ yêu thích:&nbsp;</strong>
            <i
                v-if="book.favorite"
                class="fas fa-check"
            />
            <i
                v-else
                class="fas fa-times"
            />
        </div>
    </div>
</template>