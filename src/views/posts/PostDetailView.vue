<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto" />
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goListEdit">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: Number,
});

// const route = useRoute();
const router = useRouter();
// const id = route.params.id;
const form = ref({});

/**
 * ref
 * 장) 객체 할당 가능
 * 단) .value 반복 o
 *
 * reactive
 * 장) .vlaue 반복 x
 * 단) 객체 할당 불가능
 */

const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data }; // 이렇게 객체를 복사하지 않으면 주소값을 참조하고 있기 때문에 원본 데이터가 변경되었을 때 얘도 바뀌게 됨
};
fetchPost();
const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};
const goListEdit = () => {
  router.push({
    name: 'PostEdit',
    params: { id: props.id },
  });
};
</script>

<style scoped></style>
