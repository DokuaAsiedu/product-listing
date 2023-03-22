import { Link } from 'react-router-dom';
import { Footer, headerData, Button } from "../components/Components";
import '../App.css';
import axios from 'axios';


export default function ProductListPage() {
	return (
		<div id='product-list-page' className='wrapper'>
			<header className='d-flex align-items-center justify-content-center mx-3'>
				<h1 className='header me-auto'>{headerData.product_list_page.header_text}</h1>
				<Link to={headerData.product_list_page.add.link}>
					<Button elem={headerData.product_list_page.add}/>
				</Link>
				<Button elem={headerData.product_list_page.mass_delete}/>
			</header>
			<hr/>
			<main className='products'>
				{viewFile}
			</main>
			<hr/>
			<Footer/>
			<hr/>
			<p onClick={viewFile}>View File</p>
		</div>
	)
}

function viewFile() {
	axios
	.get("http://localhost:8000/Server/product-list-page-backend.php")
	.then(() => {
		console.log("Success!")
	})
	.catch(err => {
		console.log("Didn't work :(")
		console.error(err);
	});
}