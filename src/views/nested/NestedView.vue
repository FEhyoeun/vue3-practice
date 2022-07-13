<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one"
          >Nested One</RouterLink
        >
        <RouterLink
          class="nav-link"
          active-class="active"
          :to="{ name: 'NestedOne', replace: true }"
          >Nested One(replace)</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two"
          >Nested Two</RouterLink
        >
      </li>
    </ul>
    <hr />
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'NestedView',
};
</script>

<style scoped></style>
