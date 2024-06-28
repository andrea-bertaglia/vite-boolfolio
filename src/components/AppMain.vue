<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

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
                // console.log(this.projects);
            });
    },
    components: {
        ProjectCard,
    },
}
</script>

<template>

    <div class="container">
        <h1 class="py-3 text-center fw-bold">Elenco Progetti</h1>
        <div class="row row-cols-1 row-cols-md-2 g-3">
            <div class="col" v-for="project in projects">
                <!-- Card Project -->
                <ProjectCard :projectObj="project" />
                <!-- /Card Project -->
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>