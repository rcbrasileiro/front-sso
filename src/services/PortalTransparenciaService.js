import axios from 'axios'

const URL_PORTAL_TRANSPARENCIA = 'http://localhost:8080/portal-transparencia'

class PortalTransparenciaService {
  async listAcordoLeniencia () {
    debugger
    const { data } = await axios.get(URL_PORTAL_TRANSPARENCIA + '/acordos-leniencia')
    debugger
    return data
  }
}

export default new PortalTransparenciaService()
