import FileTree from './fileTree';

export function createFileTree(input) {

  const fileTree = new FileTree();
  let root = [input.shift()]

  let sort = input.sort((a,b)=> a.id-b.id)
 
  input = [...root, ...sort]
 

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}