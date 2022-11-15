import fetch from 'isomorphic-unfetch'

const dataFetch = (url: string, options: any, successFn: (result: any) => void, errorFn: (error: any) => void) => {
    fetch(url, options)
        .then(res => {
            if (res.status === 401) {
                if (window.location.host.endsWith("3000")) {
                    window.location.href = "/user/login"
                } else {
                    window.location.reload()
                }
            } else if (res.redirected) {
                if (window.location.host.endsWith("3000")) {
                    window.location.href = "/user/login"
                } else {
                    window.location.reload()
                }
            }
            let result
            if (res.ok) {
                try {
                    result = res.json()
                } catch(e) {
                    result = res.text()
                }
                return result
            } else {
                res.text().then(errorFn)
            }
        }).then(successFn)
            .catch(errorFn)
}

export default dataFetch