<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return {
            projects: [],
            pages: {
                current_page: 1,
                first_page_url: '',
                from: 1,
                last_page: 1,
                last_page_url: '',
                links: []
            }
        }
    },
    created() {
        this.fetchProjects(1);
    },
    methods: {
        fetchProjects(page) {
            axios.get(`http://127.0.0.1:8000/api/projects?page=${page}`)
                .then((resp) => {
                    // Salvo i dati della chiamata API
                    this.projects = resp.data.results.data;

                    // Salvo i dati di paginazione
                    this.pages = {
                        current_page: resp.data.results.current_page,
                        first_page_url: resp.data.results.first_page_url,
                        from: resp.data.results.from,
                        last_page: resp.data.results.last_page,
                        last_page_url: resp.data.results.last_page_url,
                        links: resp.data.results.links
                    };
                })
        },
        changePage(pageLabel) {
            let page = 1;
            if (pageLabel === '&laquo; Previous') {
                page = this.pages.current_page - 1;
            } else if (pageLabel === 'Next &raquo;') {
                page = this.pages.current_page + 1;
            } else {
                page = parseInt(pageLabel, 10);
            }
            this.fetchProjects(page);
        }
    },
    components: {
        ProjectCard,
    },
}
</script>

<template>
    <div class="container">
        <h1 class="py-3 text-center fw-bold">Elenco Progetti</h1>
        <div class="row row-cols-1">
            <div class="col">
                <!-- Pagination -->
                <nav class="py-3" aria-label="Page navigation" v-if="pages.links && pages.links.length">
                    <ul class="pagination pagination-sm justify-content-end">
                        <li v-for="link in pages.links"
                            :class="['page-item', { active: link.active, disabled: !link.url }]">
                            <a v-if="link.url" class="page-link" href="#" @click.prevent="changePage(link.label)"
                                v-html="link.label"></a>
                            <span v-else class="page-link" v-html="link.label"></span>
                        </li>
                    </ul>
                </nav>
                <!-- /Pagination -->
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-3 mb-4">
            <div class="col" v-for="project in projects">
                <!-- Card Project -->
                <ProjectCard :projectObj="project" />
                <!-- /Card Project -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>