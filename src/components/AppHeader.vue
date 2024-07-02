<script>
export default {
    data() {
        return {
            navItems: [
                {
                    routeName: 'home',
                    title: 'Home'
                },
                {
                    routeName: 'about-us',
                    title: 'About Us'
                },
                {
                    routeName: 'projects',
                    title: 'Elenco Progetti'
                },
            ]
        }
    }
}

</script>

<template>

    <nav class="navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Boolean/original.png?1623187562"
                class="rounded rounded-circle me-2 border" alt="Boolfolio" style="width: 40px;">
            <a class="navbar-brand fw-bold" href="#">Boolfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in navItems">
                        <router-link :to="{ name: item.routeName }" class="nav-link active">
                            {{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>

<style lang="scss" scoped></style>