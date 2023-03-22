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

export const inputElementData = {
	sku: {
		text: 'SKU',
		id: 'sku',
		inputType: 'text',
		name: 'product_sku'
	},
	name: {
		text: 'Name',
		id: 'name',
		inputType: 'text',
		name: 'product_name'
	},
	price: {
		text: 'Price ($)',
		id: 'price',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_price'
	},
	size: {
		text: 'Size (MB)',
		id: 'size',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_size'
	},
	height: {
		text: 'Height (CM)',
		id: 'height',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_height'
	},
	width: {
		text: 'Width (CM)',
		id: 'width',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_width'
	},
	length: {
		text: 'Length (CM)',
		id: 'length',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_length'
	},
	weight: {
		text: 'Weight (KG)',
		id: 'weight',
		inputType: 'number',
		min: 0,
		step: 'any',
		name: 'product_weight'
	}
};

export const productTypes = {
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

export function InputElement(props) {
	return (
	<div className='mb-3'>
		<label className='input-labels' htmlFor={props.elem.id}>{props.elem.text}</label>
		<input id={props.elem.id} name={props.elem.name} type={props.elem.inputType} min={props.elem.min} step={props.elem.step} required></input>
	</div>
)
};

export function ProductTypeOption(props) {
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
			<InputElement elem={inputElementData.size}/>
			<Description note={productTypes.dvd}/>
		</div>
	)
};

export function FurnitureField() {
	return (
		<div>
			<InputElement elem={inputElementData.length}/>
			<InputElement elem={inputElementData.width}/>
			<InputElement elem={inputElementData.height}/>
			<Description note={productTypes.furniture}/>
		</div>
	)
};

export function BookField() {
	return (
		<div>
			<InputElement elem={inputElementData.weight}/>
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