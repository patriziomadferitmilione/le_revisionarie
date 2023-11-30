<template>
  <w-toolbar class="navbar" height="15vh" fixed shadow>
    <div class="spacer"></div>
    <router-link to="/">
      <img class="logo" src="/images/logo.png" alt="logo" />
    </router-link>
    <div class="spacer"></div>
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
    <router-link class="r_link" to="/typeform" active-class="active-link">
      <span class="navbar_titles">Questionario</span>
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
  height: 15vh;
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
  color: var(--link);
}

.menu-item {
  position: relative;
  display: inline-block;
}

.dropdown {
  position: relative;
  display: inline-block;
  box-shadow: none;
}

.dropbtn {
  background-color: transparent !important;
  color: var(--one);
  padding: 1rem;
  font-size: 22px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.dropbtn.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid var(--one);
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: var(--white);
  border-radius: 5px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: var(--white);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: var(--light-grey);
}

@media screen and (max-width: 430px) {
  .navbar_titles {
    display: none;
  }

  .dropbtn {
    padding: 0.5rem;
    font-size: 18px;
  }

  .dropdown-content {
    box-shadow: none;
  }

  .dropdown-content a {
    padding: 8px 12px;
  }
}
</style>
