import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [{
        titulo: "Propriedades computadas",
        materia: "Frameworks Front-end e conexão com Back-end",
        data: "2022-08-22",
        aovivo: true,
        descricao: "Durante a aula foi abordado sobre as propriedades computadas, que é quando você deseja que um resultado não seja tratada como método, a melhor opção será usar o computed"
      },
      {
        titulo: "Manipulação do DOM",
        materia: "Javascriptd",
        data: "2022-06-08",
        aovivo: false,
        descricao: "Ensinado como manipular o DOM, ou seja, inserir conteudos na tela de forma dinamica. Aprendido sobre algumas funções que fazem isto (createElement, AppendChild, etc)"
      },
      {
        titulo: "Aula de encerramento",
        materia: "Interfaces com HTML e CSS",
        data: "2022-07-01",
        aovivo: true,
        descricao: "Aula muito legal. A professora Carolina trouxe a palestrante Maria Luzia, ela possui deficiência visual e falou sobre as dificuldades da acessibilidade na tecnologia pra deficientes."
      }

    ],
    current_id: ""
  },
  getters: {
    allAulas: (state) => state.list,
    Aulas: (state) => state.list[state.current_id]
  },
  mutations: {
    add_Aula(state, aula) {
      state.list.push(aula)
    },
    delete_Aula(state, index) {
        state.list.splice(index, 1);
    }
  },
  actions: {
    addAula({ commit }, aula) {
      commit("add_Aula", aula);
    },
    deleteAula({ commit }, index) {
        commit("delete_Aula", index);
    }
  },
  modules: {
  }
})
