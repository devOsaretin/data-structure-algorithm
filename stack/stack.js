class Stack {
    data = {}
    size = 0;

    push(elem) {
        this.data[this.size] = elem;
        this.size++;
       
    }

    pop() {
        let element = this.data[this.size]
        delete this.data[this.size];
        this.size--
        return element;
    }
    
    peek() {
        return this.data[this.size]
    }
    
    show() {
       return Object.values(this.data);
       
    }
}



const stack = new Stack()

stack.push('Osaretin')
stack.push('Rhema')
stack.push('Osariemen')
stack.push(7)

console.log(stack.show())