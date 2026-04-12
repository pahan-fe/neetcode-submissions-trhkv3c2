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
    
        if (!this.minArr.length || val <= last) {
            this.minArr.push(val)
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        const removedEl = this.stack.pop()
        if (removedEl === this.minArr[this.minArr.length - 1]) {
            this.minArr.pop()
        }
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
