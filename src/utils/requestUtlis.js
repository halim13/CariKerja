export const BASE_URL = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json'

export const requestGet = async (url, params, isRefreshed = false) => {
    try {
      console.log(`${url}${parseParamToString(params)}`)

      const response = await fetch(`${url}${parseParamToString(params)}`, {
        method: 'GET',
      })
      if (response.status === 200) {
        return response.json()
      } else {
        const message = await response.text()
        console.log(`${url}${parseParamToString(params)}`, message)
        try {
          const errJson = JSON.parse(message)
          return Promise.reject(errJson)
        } catch (err) {
          return Promise.reject(message)
        }
      }
    } catch (err) {
        console.log(`${url}${parseParamToString(params)}`, err)
        if (!isRefreshed) {
          return requestGet(url, params, true)
        } else return Promise.reject(err)
    }
}

export const parseParamToString = (data) => {
	if(data) {
		var url = '?'
		for(var key in data) {
			if(data[key] !== null && data[key] !== undefined)
				url += (`${key}=${data[key]}&`)
		}
		return url
	}
	return ''
}