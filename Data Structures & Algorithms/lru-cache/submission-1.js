class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = {}
        this.head = null
        this.tail = null
        this.size = 0

        // this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!(key in this.map)) {
            return -1
        }

        const node = this.map[key]

        this.removeNode(node)
        this.addToTail(node)

        return node.value

        // if (!this.map.has(key)) {
        //     return -1
        // }

        // const value = this.map.get(key)

        // this.map.delete(key)
        // this.map.set(key, value)

        // return value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let newNode = null
        if (key in this.map) {
            newNode = this.map[key]
            newNode.value = value

            this.removeNode(newNode)
            this.addToTail(newNode)

            return
        } 

        newNode = {
            key,
            prev: this.tail,
            next: null,
            value
        }

        this.map[key] = newNode
        this.addToTail(newNode)
        this.size++

        if (this.size > this.capacity) {
            const oldHeadKey = this.head.key
            this.removeNode(this.head)
            delete this.map[oldHeadKey]
            this.size--
        }




        // if (this.map.has(key)) {
        //     this.map.delete(key)
        // }

        // this.map.set(key, value)

        // if (this.map.size > this.capacity) {
        //     this.map.delete(this.map.keys().next().value)
        // }
    }

    removeNode(node) {
        if (node === this.head) {
           this.head = node.next
        } else {
            node.prev.next = node.next
        }

        if (node === this.tail) {
            this.tail = node.prev
        } else {
            node.next.prev = node.prev
        }
    }

    addToTail(node) {
        if (this.tail === null) {
            this.head = node
            this.tail = node
            node.prev = null
            node.next = null

            return
        }

        node.prev = this.tail
        node.next = null
        this.tail.next = node
        this.tail = node
    }
}
