/**
 * In this class, we are initializing the node, with value and left and right tree.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Binary Tree Class is used to implement a binary tree.
 */
class BinaryTree {
    constructor() {
        this.root = null;
    }

    /**
     * Inserts a value into the binary tree.
     * @param {number} value - The value to be inserted.
     */
    insertValue(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.callInsertAgain(this.root, newNode);
        }
    }

    /**
     * Helper function for inserting a value recursively.
     * @param {Node} currentNode - The current node being considered.
     * @param {Node} newNode - The new node to be inserted.
     */
    callInsertAgain(currentNode, newNode) {
        if (currentNode.value > newNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.callInsertAgain(currentNode.left, newNode);
            }
        } else {
            if (currentNode.value < newNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                } else {
                    this.callInsertAgain(currentNode.right, newNode);
                }
            }
        }
    }

    /**
     * Performs an inorder traversal of the binary tree and returns the result.
     * @param {Node} node - The current node being considered (default is the root).
     * @returns {string} - The result of inorder traversal.
     */
    printInorderTraversal(node = this.root) {
        let result = [];

        if (node) {
            result.push(this.printInorderTraversal(node.left));
            result.push(node.value);
            result.push(this.printInorderTraversal(node.right));
        }

        return result.join(' ');
    }
}

// Example usage:
const b_tree = new BinaryTree();
b_tree.insertValue(5);
b_tree.insertValue(3);
b_tree.insertValue(7);
b_tree.insertValue(2);
b_tree.insertValue(4);
b_tree.insertValue(6);
b_tree.insertValue(8);

console.log(b_tree.printInorderTraversal()); // Outputs: "2 3 4 5 6 7 8"
