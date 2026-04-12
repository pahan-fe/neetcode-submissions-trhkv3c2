class MinStack {
    constructor() {
        this.minArr = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const last = this.minArr[this.minArr.length - 1]
        const min = last || last === 0 ? Math.min(last, val) : val

        this.minArr.push(min)
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minArr.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr[this.minArr.length - 1]
    }
}
