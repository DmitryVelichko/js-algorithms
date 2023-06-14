function makeRequestWithRetry(url, maxAttempts, interval) {
    return new Promise((resolve, reject) => {
        let attempts = 0

        const makeRequest = () => {
            attempts++
        }

        fetch(url).then(response => {
            if (response.ok) {
                resolve(response.json())
            } else {
                throw new Error('Request Failed')
            }

        }).catch(error => {
            if(attempts<maxAttempts)
        })
    })
}

makeRequestWithRetry('https://', 5, 1000)