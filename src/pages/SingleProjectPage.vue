<script>
import axios from "axios";
export default {
    deta() {
        return {};
    },
    created() {
        // console.log(this.$route);
        // console.log(this.$router);
        const slug = this.$route.params.slug;
        // console.log(slug);
        axios
            .get(`http://127.0.0.1:8000/api/projects/${slug}`)
            .then((resp) => {
                console.log(resp);
            })
    }
}
</script>

<template>
    <h1>single page</h1>
</template>

<style lang="scss" scoped></style>