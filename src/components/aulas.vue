<template>
    <tbody>
        <tr v-for="(aula, index) in allAulas" :key="index">
            <td>{{aula.titulo}}</td>
            <td>{{aula.materia}}</td>
            <td>{{aula.data}}</td>
            <td v-if="aula.aovivo == true" style="background:#06d6a0; font-weight: 800; color: #FFF">Sim</td>
            <td v-else style="background: #ef476f; font-weight: 800; color: #FFF">Não</td>
            <td>{{aula.descricao}}</td>
            <td><label v-on:click="delete_Aula(index)"><button class="button-30"><span class="erro">X</span></button></label></td>
        </tr>
    </tbody>
    
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapActions } from "vuex";

    export default {
    name: 'aula_form',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["allAulas"])
    },
    methods: {
        ...mapActions(["deleteAula"]),
        delete_Aula(index) {
            this.deleteAula(index)
        },
    }
}
</script>

<style>
    td {border: 3px solid #416cb3; padding: 0.8em 0 0.8em 0; font-size: 0.8em; text-align: center;}
    .erro {font-weight: 800; color: #DB2B39;}
</style>