const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    console.log(tree);

    let filterNodeName = tree.items.some((node) => node.name === item);

    if (tree.id === folderId && tree.isFolder && !filterNodeName) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  function deleteNode(tree, folderId, isFolder) {
    if (isFolder) {
      let updateFolder = tree.items.filter((node) => node.id !== folderId);
      return { ...tree, items: updateFolder };
    } else {
      let updateFile = tree.items.filter((node) => node.id !== folderId);
      return { ...tree, items: updateFile };
    }
  }

  return { insertNode, deleteNode };
};

export default useTraverseTree;
