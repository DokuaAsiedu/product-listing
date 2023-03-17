import { useContext } from 'react';
import {OptionContext} from "../pages/product-add-page";


export const headerData = {
	product_add_page: {
		header_text: "Product Add",
		save: {
			text: 'Save',
			form: 'product_form',
			type: 'submit'
		},
		cancel: {
			text: 'Cancel',
			type: 'button',
			link: '/'
		}
	},
	product_list_page: {
		header_text: "Product List",
		add: {
			text: 'Add',
			type: 'button',
			link: 'add-product-page'
		},
		mass_delete: {
			text: 'Mass Delete',
			type: 'button',
			id: 'delete-product-btn'
		}
	}
}

const inputElems = {
	sku: {
		text: 'SKU',
		id: 'sku',
		inputType: 'text'
	},
	name: {
		text: 'Name',
		id: 'name',
		inputType: 'text'
	},
	price: {
		text: 'Price ($)',
		id: 'price',
		inputType: 'number'
	},
	size: {
		text: 'Size (MB)',
		id: 'size',
		inputType: 'number'
	},
	height: {
		text: 'Height (CM)',
		id: 'height',
		inputType: 'number'
	},
	width: {
		text: 'Width (CM)',
		id: 'width',
		inputType: 'number'
	},
	length: {
		text: 'Length (CM)',
		id: 'length',
		inputType: 'number'
	},
	weight: {
		text: 'Weight (KG)',
		id: 'weight',
		inputType: 'number'
	}
};

const productTypes = {
	dvd: {
		component: <DVDField/>,
		text: 'DVD',
		id: 'dvd',
		value: 'dvd',
		description: 'Please provide size in mb'
	},
	book: {
		component: <BookField/>,
		text: 'Book',
		id: 'book',
		value: 'book',
		description: 'Please provide weight in kg'
	},
	furniture: {
		component: <FurnitureField/>,
		text: 'Furniture',
		id: 'furniture',
		value: 'furniture',
		description: 'Please provide dimensions in HxWxL format'
	}
};

export function Button(props) {
	return (
		<button id={props.elem.id} form={props.elem.form} type={props.elem.type} className='bg-white px-2'>
			{props.elem.text}
		</button>
	)
};

export function ProductAddForm() {
	const {optionValue} = useContext(OptionContext);
	return (
		<main className='mx-3'>
			<form id='product_form' method='post'>
				<InputElem elem={inputElems.sku}/>
				<InputElem elem={inputElems.name}/>
				<InputElem elem={inputElems.price}/>
				<SelectElem/>
				{optionValue && productTypes[optionValue].component}
			</form>
		</main>
	)
};

export function InputElem(props) {
	return (
	<div className='mb-3'>
		<label className='input-labels' htmlFor={props.elem.id}>{props.elem.text}</label>
		<input id={props.elem.id} type={props.elem.inputType} required></input>
	</div>
)
};

export function SelectElem() {
	const {setOptionValue, optionValue} = useContext(OptionContext);
	return (
		<div className='mb-3'>
			<label htmlFor='productType' className='me-3 input-labels'>Type Switcher</label>
			<select id='productType' value={optionValue} onChange={(event) => {setOptionValue(event.target.value)}} required>
				<option value='' disabled>Product Type</option>
				<TypeSwitcher product={productTypes.dvd}/>
				<TypeSwitcher product={productTypes.book}/>
				<TypeSwitcher product={productTypes.furniture}/>
			</select>
		</div>
	)
};

export function TypeSwitcher(props) {
	return (
		<option value={props.product.value} id={props.product.id}>{props.product.text}</option>
	)
};

export function Description(props) {
	return (
		<p id='description'>{props.note.description}</p>
	)
};

export function DVDField() {
	return (
		<div>
			<InputElem elem={inputElems.size}/>
			<Description note={productTypes.dvd}/>
		</div>
	)
};

export function FurnitureField() {
	return (
		<div>
			<InputElem elem={inputElems.length}/>
			<InputElem elem={inputElems.width}/>
			<InputElem elem={inputElems.height}/>
			<Description note={productTypes.furniture}/>
		</div>
	)
};

export function BookField() {
	return (
		<div>
			<InputElem elem={inputElems.weight}/>
			<Description note={productTypes.book}/>
		</div>
	)
};

export function Footer() {
	return (
		<footer className='text-center'>
			<p>Scandiweb Test assignment</p>
		</footer>
	)
};