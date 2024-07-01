<script>
import axios from "axios";
export default {
    data() {
        return {
            project: null,
            imageBaseUrl: 'http://127.0.0.1:8000/storage'
        };
    },
    created() {
        // console.log(this.$route);
        // console.log(this.$router);
        const slug = this.$route.params.slug;
        // console.log(slug);
        axios
            .get(`http://127.0.0.1:8000/api/projects/${slug}`)
            .then((resp) => {
                // console.log(resp);
                this.project = resp.data.results;
                console.log(this.project);
            })
            .catch((error) => {
                // console.log(error);
                this.$router.push({ name: "not-found" });
            });
    }
}
</script>

<template>
    <div class="container">
        <div class="project-content" v-if="project !== null">
            <div class="py-4 text-center">
                <h1 class=" fw-bold">{{ project.title }}</h1>
            </div>
            <div class="d-flex gap-3">
                <img :src="project.thumb ? `${imageBaseUrl}/${project.thumb}` : `https://placehold.co/300x150?text=Anteprima+non+disponibile`"
                    class="card-img-top" :alt="`Immagine di ${project.title}`">
                <p>{{ project.description }}</p>
            </div>
            <h6 class="me-2 fw-bold d-inline-block pt-5">Tipo: </h6>
            <span v-if="project.type" class="badge rounded-pill border" :style="{ color: project.type.color }">
                {{ project.type.name }}
            </span>
            <span v-else class="fst-italic fw-lighter text-secondary small">nessun tipo indicato</span>
            <br>
            <h6 class="me-2 fw-bold d-inline-block pt-3">Tecnologie:</h6>
            <span v-if="project.technologies && project.technologies.length > 0"
                v-for="technology in project.technologies" class="badge rounded-pill border me-2"
                :style="{ backgroundColor: technology.color }">
                {{ technology.name }}
            </span>
            <span v-else class="fst-italic fw-lighter text-secondary small">nessuna tecnologia indicata</span>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>