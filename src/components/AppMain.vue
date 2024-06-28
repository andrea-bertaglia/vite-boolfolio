<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        }
    },
    created() {
        axios
            .get("http://127.0.0.1:8000/api/projects/")
            .then((resp) => {
                this.projects = resp.data.results;
                // stampo i risultati della chiamata API nella console
                console.log(this.projects);
            });
    },
}
</script>

<template>
    <h1>Questo è AppMain.vue</h1>
</template>

<style lang="scss" scoped></style>