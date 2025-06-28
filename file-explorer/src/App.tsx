import { useState } from 'react';
import json from './data.json';
import { FolderPlus, Trash2 } from 'lucide-react';

type NodeType = {
  id: string;
  name: string;
  isFolder: boolean;
  children?: NodeType[];
};

const App = () => {
  const [data, setData] = useState<NodeType[]>(json);
  const [isExpanded, setIsExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setIsExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const addNode = (parentId: string) => {
    const name = prompt('Enter name for new file/folder:');
    if (!name?.trim()) return;

    const isFolder = window.confirm('Should this be a folder?');

    const newNode: NodeType = {
      id: Date.now().toString(),
      name,
      isFolder,
    };

    const updateTree = (list: NodeType[]): NodeType[] =>
      list.map((node) => {
        if (node.id === parentId && node.isFolder) {
          return {
            ...node,
            children: node.children ? [...node.children, newNode] : [newNode],
          };
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });

    setData((prev) => updateTree(prev));
    setIsExpanded((prev) => ({ ...prev, [parentId]: true }));
  };

  const deleteNode = (nodeId: string) => {
    const deleteFromTree = (list: NodeType[]): NodeType[] =>
      list
        .filter((node) => node.id !== nodeId)
        .map((node) => ({
          ...node,
          children: node.children ? deleteFromTree(node.children) : undefined,
        }));

    setData((prev) => deleteFromTree(prev));
  };

  const editNodeName = (nodeId: string) => {
    const newName = prompt('Enter new name:');
    if (!newName?.trim()) return;

    const updateTree = (list: NodeType[]): NodeType[] =>
      list.map((node) => {
        if (node.id === nodeId) {
          return { ...node, name: newName };
        } else if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });

    setData((prev) => updateTree(prev));
  };

  const List = ({ list }: { list: NodeType[] }) => (
    <div style={{ marginLeft: '20px' }}>
      {list.map((node) => (
        <div key={node.id} style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            {/* Expand toggle */}
            {node.isFolder ? (
              <span
                onClick={() => toggleExpand(node.id)}
                style={{ cursor: 'pointer', fontSize: '18px' }}
              >
                {isExpanded[node.id] ? '📂' : '📁'}
              </span>
            ) : (
              <span>📄</span>
            )}

            {/* Node name */}
            <span>{node.name}</span>

            {/* Actions */}
            {node.isFolder && (
              <span onClick={() => addNode(node.id)} style={{ cursor: 'pointer' }}>
                <FolderPlus size={16} />
              </span>
            )}
            <span onClick={() => editNodeName(node.id)} style={{ cursor: 'pointer' }}>
              ✏️
            </span>
            <span onClick={() => deleteNode(node.id)} style={{ cursor: 'pointer' }}>
              <Trash2 size={16} color="red" />
            </span>
          </div>

          {isExpanded[node.id] && (node.children && node.children?.length > 0) && (
            <List list={node.children} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>📁 Folder Explorer</h2>
      <List list={data} />
    </div>
  );
};

export default App;
