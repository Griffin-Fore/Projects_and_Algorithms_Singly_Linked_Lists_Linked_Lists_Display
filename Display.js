// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. 
// Use only a single JavaScript file for this assignment. 
// All examples are done in order, starting with a new instance of the SLL class.

class SLL {
    // constructor, other methods, removed for brevity
    constructor(head = null) {
        this.head = head;
    }
   // Add Front
   // Write a method that accepts a value and create a new node, assign it to the list head,
   // and return a pointer to the new head node.
    addFront(value) {
        const newNode = { data: value, next: this.head};
        this.head = newNode;
        return this.head
    }
   // Remove Front
   // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        this.head = this.head.next
        return this.head
    }

   // Front
   // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    
    front() {
        if(!this.head) {
            return null
        }
        return this.head.data
    }

    display(sll) {
        let currentNode = this.head
        let arrayOfSllValues = []
        if(currentNode == null) {
            console.log(0)
            return 0;
        }
        while(currentNode !== null) {
            arrayOfSllValues.push(currentNode.data)
            currentNode = currentNode.next
        }
        const valueString = arrayOfSllValues.join()
        console.log(valueString)
        return valueString
    }
}
// Examples:
SLL1 = new SLL()
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()
// Create display() that uses a while loop and a runner to return a string containing all list values.
// Build what you wish console.log(myList) did!

