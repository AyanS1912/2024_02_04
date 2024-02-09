/**
 * Class Node is created for initializing a new node.
 * @author Ayan
 */
class Node {
    /**
     * @private
     * @type {any} 
     */
    data

    /**
     * @private
     * @type {Node}
     */
    next
    
    /**
     * @private
     * @type {any}
     */
    key

    constructor(key, value) {
        if (key === undefined || value === undefined) {
            throw new Error("Key and value are mandatory to create a Node");
        }
        this.value = value;
        this.key = key;
        this.next = null;
    }
}

class LinkedList {
    /**
     * @type {Node} Head of Linked list
     */
    head

    /**
     * Constructor initializes an empty linked list.
     */
    constructor() {
        this.head = null;
    }

    /**
     * Check if the linked list is empty.
     * @returns {boolean} Return True if the linked list is empty else False.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Inserts a new node at the end of the linked list.
     * @param {any} key - The key of the new node.
     * @param {any} value - The value to be inserted.
     * @returns {void}
     */
    insertEnd(key, value) {
        const newNode = new Node(key, value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    /**
     * Inserts a new node after a specific value node in the linked list.
     * @param {any} key - The key of the new node.
     * @param {any} value - The value to be inserted.
     * @param {any} afterThisValue - The value after which the new node should be inserted.
     * @returns {void}
     */
    insertAfter(key, value, afterThisValue) {
        const newNode = new Node(key, value);
        let current = this.head;

        try {
            while (current !== null) {
                if (current.key === afterThisValue) {
                    newNode.next = current.next;
                    current.next = newNode;
                    return;
                }
    
                current = current.next;
            }
        } catch {
            throw new Error(`Node with value '${afterThisValue}' does not exist in the linked list`);
        }
    }

    /**
     * Deletes nodes with a specific key in the linked list.
     * @param {any} key - Nodes will be deleted based on the key.
     * @returns {void}
     */
    deleteByKey(key) {
        if (this.isEmpty()) {
            return "Linked List is empty";
        }

        while (this.head !== null && this.head.key === key) {
            this.head = this.head.next;
        }

        let current = this.head;
        let prevNode = null;

        while (current !== null) {
            if (current.key === key) {
                if (prevNode !== null) {
                    prevNode.next = current.next;
                }
            } else {
                prevNode = current;
            }
            current = current.next;
        }
    }

    display_linkedlist() {
        let curr = this.head;
        let ans = ''
        while (curr !== null) {
            ans += `${curr.value}->`
            // console.log();
            curr = curr.next;
        }
        ans += 'null'
        console.log(ans);
    }

    /**
     * Static block demonstrate usage of the LinkedList class.
     */
    static testingFunction() {
        const linkedList = new LinkedList();
        linkedList.insertEnd("A",1);
        linkedList.insertEnd("B",2);
        linkedList.insertEnd("C",3);
        linkedList.insertEnd("D",1);
        linkedList.insertEnd("E",4);

        console.log("Initial Linked List:");
        linkedList.display_linkedlist();

        linkedList.insertAfter("F", 5, "C");
        console.log("\nLinked List after insertAfter('F', 5 , 'C'):");
        linkedList.display_linkedlist();

        linkedList.deleteByKey("D");
        console.log("\nLinked List after deleteByKey(1):");
        linkedList.display_linkedlist();
    }
}

LinkedList.testingFunction();
