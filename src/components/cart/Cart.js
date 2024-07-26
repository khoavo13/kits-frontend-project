import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Button, Table } from "reactstrap";

export default function Cart() {
  const { cart, deleteCart, updateById } = useContext(AppContext);
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>
                <Button onClick={()=>updateById(item.id, 0)}>-</Button>
                {item.quantity}
                <Button onClick={()=>updateById(item.id, 1)}>+</Button>
              </td>
              <td>
                <Button className="btn btn-danger" onClick={()=> deleteCart(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
