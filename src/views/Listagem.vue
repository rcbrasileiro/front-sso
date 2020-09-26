<template>
  <div class="container">
    <ul class="list-group mb-5 mt-5">
      <li
        class="list-group-item"
        v-for="item in items"
        :key="item.id"
      >
        <div>
          <p>
            <span class="nome-empresa">{{ item.nomeEmpresa }}</span> - {{ item.cnpj }}
          </p>

          <div class="d-flex flex-sm-column flex-md-row justify-content-around">
            <div>
              <span>{{ $t('listing.stateLabel') }}</span> {{ item.situacaoAcordo }}
            </div>
            <div>
              <span>{{ $t('listing.startDateLabel') }}</span> {{ item.dataInicioAcordo | date}}
            </div>
            <div>
              <span>{{ $t('listing.endDateLabel') }}</span> {{ item.dataFimAcordo | date}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import portalTransparenciaService from '../services/PortalTransparenciaService'

export default {
  name: 'Listagem',
  data () {
    return {
      items: []
    }
  },
  filters: {
    date (date) {
      return moment(date, 'DD-MM-YYYY').format('L')
    }
  },
  async mounted () {
    this.items = await portalTransparenciaService.listAcordoLeniencia()
  }
}
</script>

<style scoped>
.nome-empresa {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
