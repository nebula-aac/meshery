const dataFetch = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        if (res.status === 401 || res.redirected) {
          if (window.location.host.endsWith('3000')) {
            window.location = '/user/login'
          } else {
            window.location.reload()
          }
        }

        let result
        if (res.ok) {
          const text = await res.text()
          try {
            result = JSON.parse(text)
          } catch (e) {
            result = text
          }
        } else {
          throw await res.text()
        }

        resolve(result)
      } catch (error) {
        reject(error)
      }
    }

    fetchData()
  })
}

/**
 * promisifiedDataFetch adds a promise wrapper to the dataFetch function
 * and ideal for use inside async functions - which is most of the functions
 * @param {string} url url is the endpoint
 * @param {Record<string, any>} options HTTP request options
 * @returns
 */
export function promisifiedDataFetch (url, options = {}) {
  return new Promise((resolve, reject) => {
    dataFetch(url, options, result => resolve(result), err => reject(err))
  })
}

export default dataFetch
