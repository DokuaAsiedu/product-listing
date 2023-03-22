import '../App.css';
import {createContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, InputElement, ProductTypeOption, Footer, headerData, inputElementData, productTypes } from "../components/Components";


export const OptionContext = createContext();

export default function AddProductPage() {
	const [optionValue, setOptionValue] = useState('');

	return (
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
				<form id='product_form' method='post' action="http://localhost:8000/server.php">
					<InputElement elem={inputElementData.sku}/>
					<InputElement elem={inputElementData.name}/>
					<InputElement elem={inputElementData.price}/>
					<div className='type-switcher mb-3'>
						<label htmlFor='productType' className='me-3 input-labels'>Type Switcher</label>
						<select id='productType' value={optionValue} onChange={(event) => {setOptionValue(event.target.value)}} required>
							<option value='' disabled>Product Type</option>
							<ProductTypeOption product={productTypes.dvd}/>
							<ProductTypeOption product={productTypes.book}/>
							<ProductTypeOption product={productTypes.furniture}/>
						</select>
					</div>
					{optionValue && productTypes[optionValue].component}
				</form>
			</main>
			<hr/>
			<Footer/>
		</div>
	);
}