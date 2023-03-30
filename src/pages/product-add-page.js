import '../App.css';
import { useState, useMemo, createContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, InputElement, ProductTypeOption, Footer, headerData, inputElementData, productTypes, ProductTypeDetails } from "../components/Components";
import axios from 'axios';

export const DetailsContext = createContext({});


export default function ProductAddPage() {

	const [formDetails, setFormDetails] = useState({
		productSKU: '',
		productName: '',
		productPrice: '',
		productType: ''
	})

	const [productTypeDetails, setProductTypeDetails] = useState({});

	// const mainData = useMemo(() => ({}), []);
	// var productTypeData = useMemo(() => ({}), [formDetails.productType]);

	const setDetails = event => {
		setProductTypeDetails(prevState => ({...prevState, [event.target.name]: event.target.value}));
		// productTypeData[`${event.target.name}`] = event.target.value;
	}

	const setProductSKU = (event) => {
		setFormDetails((previousState) => ({...previousState, productSKU: event.target.value}));
		// mainData[`${event.target.name}`] = event.target.value;
	}

	const setProductName = (event) => {
		setFormDetails((previousState) => ({...previousState, productName: event.target.value}));
		// mainData[`${event.target.name}`] = event.target.value;
	}

	const setProductPrice = (event) => {
		setFormDetails((previousState) => ({...previousState, productPrice: event.target.value}));
		// mainData[`${event.target.name}`] = event.target.value;
	}

	const setProductType = (event) => {
		setFormDetails((previousState) => ({...previousState, productType: event.target.value}));
		setProductTypeDetails(() => ({}));
		// productTypeData = {};
		// mainData[`${event.target.name}`] = event.target.value;
	}

	// useEffect(() => {
	// 	console.log(productTypeDetails)
	// }, [productTypeDetails])



	const handleSave = (event) => {
		event.preventDefault();
		axios.post("http://localhost:8000/product-add.php",
		Object.assign({}, formDetails, productTypeDetails),
		{headers: {
			'Content-Type' : 'application/x-www-form-urlencoded'
		}})
		.then(response => {console.log(response.data)})
		.catch(error => {console.log(error)})
	}

	return (
		<DetailsContext.Provider value={[productTypeDetails, setDetails]}>
		<div id="product-add-page" className='wrapper'>
			<header className='d-flex align-items-center justify-content-center mx-3'>
				<h1 className='headerText me-auto'>{headerData.product_add_page.header_text}</h1>
				<Button elem={headerData.product_add_page.save}/>
				<Link to={headerData.product_add_page.cancel.link}>
					<Button elem={headerData.product_add_page.cancel}/>
				</Link>
			</header>
			<hr/>
			<main className='main mx-3'>
				<form id='product_form' onSubmit={handleSave}>
					<InputElement elem={inputElementData.sku} value={formDetails.productSKU} fxn={setProductSKU}/>
					<InputElement elem={inputElementData.name} value={formDetails.productName} fxn={setProductName}/>
					<InputElement elem={inputElementData.price} value={formDetails.productPrice} fxn={setProductPrice}/>
					<div className='type-switcher mb-3'>
						<label htmlFor='productType' className='me-3 input-labels'>Type Switcher</label>
						<select id='productType' name='product_type' value={formDetails.productType} onChange={setProductType} required>
							<option value='' disabled>Product Type</option>
							<ProductTypeOption product={productTypes.dvd}/>
							<ProductTypeOption product={productTypes.book}/>
							<ProductTypeOption product={productTypes.furniture}/>
						</select>
					</div>
					{formDetails.productType && <ProductTypeDetails productTypeField={productTypes[formDetails.productType].component}/>}
				</form>
			</main>
			<hr/>
			<Footer/>
		</div>
		</DetailsContext.Provider>
	);
}