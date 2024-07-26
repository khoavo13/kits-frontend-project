import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";
import "./Product.css";

export default function Product(props) {
  const { product } = props;
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card className="mb-4 me-2">
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardImg
            alt="Card image cap"
            src={require(`../../../public/screenshot/${product.image}.jpg`)}
            height="200px"
            top
            width="auto"
          />
          <CardText>
            <h1>product</h1>
            <p>Name: {product.name}</p>
            <Link to={`/detail/${product.id}`}>Chi tiết sản phẩm</Link>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
