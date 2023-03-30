import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Footer, headerData, Button } from "../components/Components";
import '../App.css';
import axios from 'axios';


export default function ProductListPage() {
	const [productList, setProductList] = useState([]);

	const [deleteItems, setDeleteItems] = useState({});

	const handleCheck = event => {
		setDeleteItems((previousItems) => {
			return {...previousItems, [event.target.name]: event.target.value}
		});
	}

	const handleDelete = event => {
		event.preventDefault();
		axios
		.post(
			"http://localhost:8000/product-delete.php", 
			deleteItems, 
			{headers: {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			}})
		.then(response => {setProductList(response.data);})
		.catch(error => {console.log(error)})
	}

	useEffect(() => {
		axios
		.get("http://localhost:8000/product-list.php")
		.then((response) => {
			setProductList(response.data);
		})
		.catch(err => {
			console.error(err);
		});
	}, [])

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
			<form className='list-container' id='delete-form' onSubmit={handleDelete}>
				{productList.map(row => (
					<div key={row.product_sku} className='list-item'>
						{<input type='checkbox' name={row.product_sku} value={row.product_type} className='delete-checkbox' onClick={handleCheck}></input>}
						<p>{row.product_sku}</p>
						<p>{row.product_name}</p>
						<p>{row.product_price} $</p>
						<p>{row.measurement}</p>
					</div>
				))}
			</form>
			<hr/>
			<Footer/>
		</div>
	)
}