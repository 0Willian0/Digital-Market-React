import React from "react";
import {baseApiUrl} from '../../global'
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { Form, Row, Col, Button, Checkbox } from 'react-bootstrap';
import {notifyError, notifySuccess} from '../../config/msgs'
import '../../styles/UserAdmin.css' 

const UserAdmin = ()=>{
    const [mode, setMode] = useState('save')
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])

    const fields = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Nome' },
        { key: 'email', label: 'E-mail' },
        { key: 'balance', label: 'Saldo' },
        { key: 'admin', label: 'Administrador', formatter: value => value ? 'Sim' : 'Não' },
        { key: 'actions', label: 'Ações'}
    ];

    const loadUsers = async () => {
        try {
            const url = `${baseApiUrl}/users`;
            const res = await axios.get(url); // Aguarda a resposta
            setUsers(res.data.users || res.data);
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        }
    };

    const reset = () => {
        setMode('save');
        setUser({});
        loadUsers([]);
      };
    
      // Salvar ou atualizar um usuário
      const save = async () => {
        const method = user.id ? 'put' : 'post';
        const id = user.id ? `/${user.id}` : '';
        
        try {
          await axios[method](`${baseApiUrl}/users${id}`, user);
          notifySuccess('Usuário salvo com sucesso!')
          reset();
        } catch (error) {
          notifyError('Erro ao salvar usuário')
        }
      };
    
      // Remover um usuário
      const remove = async () => {
        if (window.confirm('Tem certeza que deseja remover este usuário?')) {
          try {
            await axios.delete(`${baseApiUrl}/users/${user.id}`);
            notifySuccess('Usuário removido com sucesso!')
            reset();
          } catch (error) {
            notifyError('Erro ao remover usuário')
          }
        }
      };
    
      // Carregar dados do usuário para edição
      const loadUser = (user, mode = 'save') => {
        setMode(mode);
        setUser({ ...user });
      };

    useEffect(() => {
        loadUsers();
        
      }, []);

    return (
        <div className="user-admin">
             <Form>
        <input type="hidden" value={user.id || ''} />
        <Row>
          <Col md="6" sm="12">
            <Form.Group controlId="user-name">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                value={user.name || ''}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
                readOnly={mode === 'remove'}
                placeholder="Informe o Nome do Usuario..."
              />
            </Form.Group>
          </Col>
          <Col md="6" sm="12">
            <Form.Group controlId="user-email">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="text"
                value={user.email || ''}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
                readOnly={mode === 'remove'}
                placeholder="Informe o E-mail do Usuario..."
              />
            </Form.Group>
          </Col>
          <Col md="6" sm="12">
            <Form.Group controlId="user-balance">
              <Form.Label>Saldo:</Form.Label>
              <Form.Control
                type="text"
                value={user.balance || ''}
                onChange={(e) => setUser({ ...user, balance: e.target.value })}
                required
                readOnly={mode === 'remove'}
                placeholder="Informe o Saldo do Usuario..."
              />
            </Form.Group>
          </Col>
          <Col md="6" sm="12">
            <Form.Group controlId="user-imageUrl">
              <Form.Label>Imagem (URL):</Form.Label>
              <Form.Control
                type="text"
                value={user.imageUrl || ''}
                onChange={(e) => setUser({ ...user, imageUrl: e.target.value })}
                required
                readOnly={mode === 'remove'}
                placeholder="Informe a URL da Imagem..."
              />
            </Form.Group>
          </Col>
        </Row>
        {mode === 'save' && (
          <>
            <Form.Check
              id="user-admin"
              type="checkbox"
              label="Administrador?"
              checked={user.admin || false}
              onChange={(e) => setUser({ ...user, admin: e.target.checked })}
              className="mt-3 mb-3"
            />
            <Row>
              <Col md="6" sm="12">
                <Form.Group controlId="user-password">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control
                    type="password"
                    value={user.password || ''}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    required
                    placeholder="Informe a Senha do Usuario..."
                  />
                </Form.Group>
              </Col>
              <Col md="6" sm="12">
                <Form.Group controlId="user-confirm-password">
                  <Form.Label>Confirmação de Senha:</Form.Label>
                  <Form.Control
                    type="password"
                    value={user.confirmPassword || ''}
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                    required
                    placeholder="Confirme a Senha do Usuario..."
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}
        <br/>
        <Row>
          <Col xs="12">
            {mode === 'save' && (
              <Button variant="success" onClick={save}>
                Salvar
              </Button>
            )}
            {mode === 'remove' && (
              <Button variant="danger" onClick={remove}>
                Excluir
              </Button>
            )}
            <Button className="ml-1" onClick={reset}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    <hr/>
    <Table hover striped>
        <thead>
            <tr>
            {fields.map(field => (
                <th key={field.key}>{field.label}</th>
            ))}
            </tr>
        </thead>
      <tbody>
        {users.length > 0 ?(users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.balance}</td>
            <td>{user.admin ? 'Sim' : 'Não'}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => loadUser(user)}
                className="mr-1"
              >
                <i className="fa fa-pencil" aria-hidden="true" />
              </Button>
              <Button
                variant="danger"
                onClick={() => loadUser(user, 'remove')}
                className="mr-3"
              >
                <i className="fa fa-trash" aria-hidden="true" />
              </Button>
            </td>
            </tr>
           ))): (
                <tr>
                    <td colSpan={fields.length}>Nenhum dado disponível</td>
                </tr>
            )}
      </tbody>
    </Table>
        </div>
    );
}

export default UserAdmin;