import React from "react";
import PageTitle from "../templates/PageTitle";
import '../../styles/AdminPages.css'
import { Card, Tabs, Tab } from 'react-bootstrap';
import ProductsAdmin from "./ProductsAdmin";
import CategoriesAdmin from "./CategoriesAdmin";
import UserAdmin from "./UserAdmin";

const AdminPages = ()=>{
    return (
        <div className="admin-pages">
            <PageTitle icon="fa fa-cogs" main="Administração do Sistema"/>
            <div className="admin-pages-tabs">
            <Card>
                <Card.Body>
                    <Tabs defaultActiveKey="product" id="card-tabs" className="mb-3">
                        <Tab eventKey="product" title="Produto">
                        <div className="p-3">
                            <ProductsAdmin/>
                        </div>
                        </Tab>
                        <Tab eventKey="category" title="Categoria" >
                        <div className="p-3">
                            <CategoriesAdmin/>
                        </div>
                        </Tab>
                        <Tab eventKey="user" title="Usuario">
                        <div className="p-3">
                            <UserAdmin/>
                        </div>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </div>
      </div>
    );
}

export default AdminPages;