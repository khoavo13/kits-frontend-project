import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Table } from "reactstrap";

export default function Cart() {
  const { cart } = useContext(AppContext);
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td scope="row">{item.id}</td>
              <td>{item.name}</td>
              <td>1</td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
