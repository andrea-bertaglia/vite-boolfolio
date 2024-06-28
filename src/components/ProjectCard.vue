<script>
export default {
    props: {
        projectObj: Object,
    },
    data() {
        imageBaseUrl: 'http://127.0.0.1:8000/storage'
    },
}
</script>

<template>
    <div class="card h-100 w-100" style="width: 18rem;">
        <img :src="projectObj.thumb ? `${imageBaseUrl}/${projectObj.thumb}` : `https://placehold.co/300x150?text=Anteprima+non+disponibile`"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ projectObj.title }}</h5>
            <p class="card-text">{{ projectObj.description }}</p>
            <h6 class="me-2 fw-bold d-inline-block">Tipo: </h6>
            <span v-if="projectObj.type" class="badge rounded-pill border" :style="{ color: projectObj.type.color }">
                {{ projectObj.type.name }}
            </span>
            <span v-else class="fst-italic fw-lighter text-secondary small">nessun tipo indicato</span>
            <br>
            <h6 class="me-2 fw-bold d-inline-block">Tecnologie:</h6>
            <span v-if="projectObj.technologies && projectObj.technologies.length > 0"
                v-for="technology in projectObj.technologies" class="badge rounded-pill border me-2"
                :style="{ backgroundColor: technology.color }">
                {{ technology.name }}
            </span>
            <span v-else class="fst-italic fw-lighter text-secondary small">nessuna tecnologia indicata</span>
            <div class="mt-3">
                <a href="#" class="btn btn-success btn-sm">Dettagli</a>
            </div>
        </div>
    </div>
</template>

<style></style>