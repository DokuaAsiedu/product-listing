import '../App.css';
import {createContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { ProductAddForm	, Footer, headerData, Button } from "../components/Components";

export const OptionContext = createContext();

export default function AddProductPage() {
	const [optionValue, setOptionValue] = useState(null);

	return (
		<OptionContext.Provider value={{optionValue, setOptionValue}}>
			<div id="product-add-page" className='wrapper'>
				<header className='d-flex align-items-center justify-content-center mx-3'>
					<h1 className='me-auto'>{headerData.product_add_page.header_text}</h1>
					<Button elem={headerData.product_add_page.save}/>
					<Link to={headerData.product_add_page.cancel.link}>
						<Button elem={headerData.product_add_page.cancel}/>
					</Link>
				</header>
				<hr/>
				<ProductAddForm/>
				<hr/>
				<Footer/>
			</div>
		</OptionContext.Provider>
	);
}