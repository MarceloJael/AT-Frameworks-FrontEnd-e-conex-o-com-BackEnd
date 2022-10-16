<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5 text-center">
        <h2>Lista das aulas</h2>
      </div>
      <div class="col-12">
        <table class="tabela">
          <thead>
            <tr class="tr">
              <th id="titulo">Titulo</th>
              <th id="materia">Materia</th>
              <th id="dataAula">Data</th>
              <th id="aoVivo">Ao vivo</th>
              <th id="descricao">Descrição</th>
              <th id="excluir">Excluir</th>
            </tr>
          </thead>
          <Aulas />
        </table>
      </div>
    </div>
  </div>

</template>

<script>
  import Aulas from '@/components/aulas';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    Aulas
  }
}
</script>

<style scoped>
  table {width: 100%;}
  th { text-align: center; border: 3px solid #416cb3; padding: 0.5em 0 0.5em 0; background: #213864; color: #FFF; font-size: 0.6em;}
  th#titulo {width: 20%;}
  th#materia {width: 23%;}
  th#dataAula {width: 8%;}
  th#aoVivo {width: 5%;}
  th#descricao {width: 30%;}
  th#excluir {width: 5%;}
</style>
