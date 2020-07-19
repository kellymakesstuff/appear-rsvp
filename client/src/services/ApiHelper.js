import api from './apiconfig'


export const getHouseholds = async () => {
  const response = await api.get('/households')
  return response.data
}

export const getGuests = async (id) => {
  const response = await api.get(`/households/${id}/guests`)
  return response.data
}

export const addGuest = async (id, guestInfo) => {
  const response = await api.post(`/households/${id}/guests`, { guest: guestInfo })
  return response.data
}

export const addPhoto = async (photoData) => {
  const response = await api.post('/photos', { photo: photoData })
  return response.data
}