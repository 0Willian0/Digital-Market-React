import React, { useEffect, useState } from 'react';
import { Tree, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css'; // Importando os estilos do Ant Design
import { baseApiUrl } from '../../global';
import '../../styles/Menu.css'
import {useSelector} from 'react-redux';

const Menu = () => {
  const navigate = useNavigate();
  const [treeData, setTreeData] = useState([]);
  const [filteredTreeData, setFilteredTreeData] = useState([]);
  const [treeFilter, setTreeFilter] = useState('');
  const isMenuVisible = useSelector((state) => state.isMenuVisible); //chama initialState

  useEffect(() => {
    const fetchTreeData = async () => {
      try {
        const url = `${baseApiUrl}/categories/tree`; // Ajuste a URL para o seu backend
        const { data } = await axios.get(url);
        const formatTreeData = (nodes) => {
          return nodes.map(node => ({
            key: node.id, // Garanta que cada nó tenha um key único
            title: node.name, // Título do nó
            children: node.children ? formatTreeData(node.children) : [], // Recursivamente formate os filhos
          }));
        };

        const formattedData = formatTreeData(data);

        setTreeData(formattedData);
        setFilteredTreeData(formattedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchTreeData();
  }, []);

  const onNodeSelect = (selectedKeys, info) => {
    const { node } = info;
    if (node && node.key) {
      navigate(`/categories/${node.key}/products`);
    } else {
      console.error('ID do nó não encontrado:', node);
    }
  };
  

  const onFilterChange = (e) => {
    const value = e.target.value;
    setTreeFilter(value);
    filterTreeData(value);
  };

  const filterTreeData = (filter) => {
    const filterNodes = (nodes) => {
      return nodes
        .map(node => {
          const children = filterNodes(node.children);
          return {
            ...node,
            children,
          };
        })
        .filter(node => 
          node.title.toLowerCase().includes(filter.toLowerCase()) || node.children.length > 0
        );
    };

    if (!filter) {
      setFilteredTreeData(treeData);
    } else {
      setFilteredTreeData(filterNodes(treeData));
    }
  };

  return (
    <>
    {isMenuVisible && (
      <aside className="menu">
        <div className="menu-filter">
          <SearchOutlined />
          <Input
            type="text"
            placeholder="Digite para filtrar..."
            value={treeFilter}
            onChange={onFilterChange}
            className="filter-field"
          />
        </div>
        <Tree
          treeData={filteredTreeData}
          defaultExpandAll
          onSelect={onNodeSelect}
        />
      </aside>
    )}
    </>
  );
};

export default Menu;
