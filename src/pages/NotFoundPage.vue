<script>
export default {

}
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="error-message text-center">
            <div>
                <i class="fa-solid fa-4 text-danger me-3"></i>
                <i class="fa-solid fa-circle-exclamation text-danger me-3"></i>
                <i class="fa-solid fa-4 text-danger"></i>
            </div>
            <h3 class="fw-bold py-4">ERRORE</h3>
            <h6 class="fw-light fst-italic">pagina non trovata</h6>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    height: 75vh;
}

.error-message {
    i {
        font-size: 10rem;
        padding-bottom: .2em;
    }
}
</style>
