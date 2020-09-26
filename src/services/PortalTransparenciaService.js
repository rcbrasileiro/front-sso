import axios from 'axios'

const URL_PORTAL_TRANSPARENCIA = 'portal-transparencia'

class PortalTransparenciaService {
  async listAcordoLeniencia () {
    const { data } = await axios.get(URL_PORTAL_TRANSPARENCIA + '/acordos-leniencia')
    return data
  }
}

export default new PortalTransparenciaService()
