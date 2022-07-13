<template>
  <div class="text-center py-5">
    <h1>Oops!</h1>
    <h2>404 Not Found</h2>
    <div class="text-muted">요청한 페이지를 찾을 수 없습니다.</div>
    <button class="mt-4">
      <RouterLink to="/">
        <button class="btn btn-primary">HOME</button>
      </RouterLink>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
};
</script>

<style scoped></style>
