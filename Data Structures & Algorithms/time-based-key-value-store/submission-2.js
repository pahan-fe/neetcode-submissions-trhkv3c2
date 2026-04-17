class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }

        this.keyStore.get(key).push({ value, timestamp })
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key)

        if (!values) {
            return ''
        }

        let left = 0
        let right = values.length - 1
        let candidateIndex = -1

        while (left <= right) {
            const mid = Math.floor((right - left) / 2) + left

            if (values[mid].timestamp <= timestamp) {
                candidateIndex = mid
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return candidateIndex === -1 ? '' : values[candidateIndex].value
    }
}
