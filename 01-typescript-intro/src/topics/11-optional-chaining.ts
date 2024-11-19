export interface Node {
    value: number;
    left?: Node;
    right?: Node;
}

export function createNode(value: number): Node {
    return {
        value,
        left: undefined,
        right: undefined
    };
}

export function insertNode(root: Node | undefined, value: number): Node {
    if (root === undefined) {
        return createNode(value);
    }
    if (value < root.value) {
        root.left = insertNode(root.left, value);
    } else {
        root.right = insertNode(root.right, value);
    }
    return root;
}

export function getLeftValue(node: Node): number {
    return node.left?.value ?? 0; // Optional chaining
}