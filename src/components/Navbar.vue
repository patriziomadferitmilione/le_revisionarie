<template>
  <w-toolbar class="navbar" height="15vh" fixed shadow>
    <div class="spacer"></div>
    <router-link to="/">
      <img class="logo" src="/images/logooo.png" alt="logo" />
    </router-link>
    <div class="spacer"></div>
    <router-link class="r_link" to="/" active-class="active-link">
      <span class="navbar_titles">Home</span>
    </router-link>
    <router-link class="r_link" to="/about" active-class="active-link">
      <span class="navbar_titles">Chi Siamo</span>
    </router-link>
    <router-link class="r_link" to="/blog" active-class="active-link">
      <span class="navbar_titles">Il Blog</span>
    </router-link>
    <router-link class="r_link" to="/paths" active-class="active-link">
      <span class="navbar_titles">Percorsi</span>
    </router-link>
    <router-link class="r_link" to="/contacts" active-class="active-link">
      <span class="navbar_titles">Contatti</span>
    </router-link>
    <div class="spacer"></div>
  </w-toolbar>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const showDropdown = ref(false)
    let openTimeout = null

    function openDropdown() {
      console.log('Dropdown should open now')
      showDropdown.value = true
    }

    function closeDropdown() {
      console.log('Dropdown should close after a delay')
      setTimeout(() => {
        showDropdown.value = false
        console.log('Dropdown should be closed now')
      }, 200) // 200ms delay before closing the dropdown
    }

    return {
      activeIndex,
      handleSelect,
      showDropdown,
      openDropdown,
      closeDropdown,
    }
  },
}
</script>

<style scoped>
.navbar {
  font-size: 22px;
  background-color: var(--white) !important;
}

.logo {
  height: 45vh;
}

.active-link {
  font-weight: bold;
  border-bottom: 2px solid var(--one);
  padding: 1rem;
  margin: 0 1rem;
}

.r_link {
  margin-left: 1rem;
  margin-right: 1rem;
}

#logo_nav {
  max-width: 10%;
}

.flex-grow {
  flex-grow: 1;
}

a {
  text-decoration: none;
  color: var(--one);
}

a:hover {
  cursor: pointer;
  color: var(--two);
}

@media screen and (max-width: 430px) {
  .navbar_titles {
    display: none;
  }
}
</style>
