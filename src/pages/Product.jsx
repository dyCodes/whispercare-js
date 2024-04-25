import React, { useEffect, useState } from "react";
import { Container, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import products from "../assets/products-demo.json";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		const product = products.find((product) => product.code === id);
		setProduct(product);
	}, [id]);

	return (
		<Layout page="Product">
			<Container maxWidth="sm" className="container">
				{product ? (
					<div className="product">
						<h3>{product.name} </h3>
						<p>{product.details}</p>
						<Divider variant="middle" />
						<div className="rateProduct">
							<h3>Description</h3>
						</div>
					</div>
				) : (
					<h3>No product found..</h3>
				)}
			</Container>
		</Layout>
	);
};

export default Product;
