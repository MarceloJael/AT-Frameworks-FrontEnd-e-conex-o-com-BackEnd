<template>
    <div class="container">
      <div class="row">
        <div class="col-12 py-5 text-center">
          <h2>Adicionar aulas</h2>
        </div>
        <div class="col-12">
            <form class="form" @submit.prevent="sendAula" ref="form">
                <div class="row py-2">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-1 text-center">
                        <label for="titulo"><b>Titulo da aula</b></label>
                        <input type="text" id="titulo" name="titulo" v-model="titulo" placeholder="Digite o titulo da aula">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-1 text-center">
                        <label for="materia"><b>Escolha uma matéria</b></label>
                        <select id="materia" name="materia" v-model="materia">
                          <option value="Projeto de Bloco: Desenvolvimento Front-End">Projeto de Bloco: Desenvolvimento Front-End</option>
                          <option value="Frameworks Front-end e conexão com Back-end">Frameworks Front-end e conexão com Back-end</option>
                          <option value="Interação Humano-Computador para Desenvolvimento Front-end Web">Interação Humano-Computador para Desenvolvimento Front-end Web</option>
                          <option value="Javascript">Javascript</option>
                          <option value="Interfaces com HTML e CSS">Interfaces com HTML e CSS</option>
                        </select>

                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-1 text-center">
                        <label for="data"><b>Data da aula</b></label>
                        <input type="date" id="data" name="data" v-model="data">
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-1 text-center">
                        <label for="aovivo"><b>Marque se você viu a aula ao vivo</b></label>
                        <input name="aovivo" type="checkbox" id="aovivo" v-model="aovivo">
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-12 py-1 text-center">
                        <label for="descricao"><b>Descrição da aula</b></label>
                        <textarea id="descricao" name="descricao" v-model="descricao" placeholder="Qual a descrição da aula"></textarea>
                    </div>
                </div>

                <div class="row py-2">
                  <div class="col-12 py-1 text-center">
                    <button class="button-30">Adicionar aula</button>
                  </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
  import { useVuelidate } from '@vuelidate/core'
  import { required, numeric } from '@vuelidate/validators'
  import { mapActions } from "vuex";
  // @ is an alias to /src
  
  export default {
    name: 'AddAula',

    setup() {
      return { v$: useVuelidate() }
    },

    data() {
      return {
        titulo: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].titulo : "",
        materia: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].materia : "",
        data: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].data : "",
        descricao: this.$route.params.id > -1 ? this.$store.state.list[this.$route.params.id].descricao : "",
      }
    },

    validations() {
      return {
        titulo: { required },
        materia: { required },
        data: { required },
        descricao: { required }
      }
    },

    methods: {
      ...mapActions(["addAula"]),

      reset() {
        this.$refs.form.reset()
      },

      errorform() {
        this.v$.$errors.forEach(error => {
          const prop = document.getElementsByName(error.$property)
          prop[0].style = "border: solid 2px #DB2B39;"
          if (prop.length == 4) {
            prop[0].style = "border: solid 2px #DB2B39;"
            prop[1].style = "border: solid 2px #DB2B39;"
            prop[2].style = "border: solid 2px #DB2B39;"
            prop[3].style = "border: solid 2px #DB2B39;"
          }
        });
        alert("Formulario Incorreto ou Incompleto")
      },

      async sendAula() {
        const isFormCorrect = await this.v$.$validate()

        if (isFormCorrect) {
          if (this.$store.state.list.length >= 20) {
            alert("limite maximo de aulas atingidas, exclua alguma")
          }
          // Update
          else {
            alert("Aula Cadastrada")
              this.addAula(this)
              this.reset()
          }
        }
        else {
          this.errorform()
        }
      }
    }
  }

  </script>

  <style>
    input, textarea, select {width: 100%; padding: 0.7em; border-radius: 0.3em; border: 1px solid #021b4e; }
    textarea {min-height: 10em;}
  </style>