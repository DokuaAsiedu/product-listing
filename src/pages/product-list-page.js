import { Link } from 'react-router-dom';
import {  Footer, headerData, Button } from "../components/Components";
import '../App.css';

export default function ProductListPage() {
	return (
		<div id='product-list-page' className='wrapper'>
			<header className='d-flex align-items-center justify-content-center mx-3'>
				<h1 className='me-auto'>{headerData.product_list_page.header_text}</h1>
				<Link to={headerData.product_list_page.add.link}>
					<Button elem={headerData.product_list_page.add}/>
				</Link>				
				<Button elem={headerData.product_list_page.mass_delete}/>
			</header>
			<hr/>
			<Footer/>
		</div>
	)
}