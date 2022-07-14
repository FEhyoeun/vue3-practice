<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />

    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :createdAt="post.createdAt"
          @click="goPage(post.id)"
        />
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const fetchPosts = async () => {
  try {
    const { data } = await getPosts();
    posts.value = data;
    // 위 두 줄을 대체해서
    // ({ data: posts.value } = await getPosts())
    // 이렇게도 사용할 수 있음
  } catch (error) {
    console.error(error);
  }

  // console.dir(response); // 객체는 console.dir로 찍는 게 편함

  // .then(value => {
  //   posts.value = value;
  // })
  // .catch(err => {
  //   console.err(err);
  // });

  // posts.value = getPosts();
};

const router = useRouter();
const goPage = id => {
  // router.push(`/posts/${id}`);
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

fetchPosts();
</script>

<style scoped></style>
