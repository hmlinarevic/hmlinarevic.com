import { API_BASE_URL } from '../config'

export const getAPIAssetEndpoint = (assetUrl) => {
  return `${API_BASE_URL}${assetUrl}`
}
