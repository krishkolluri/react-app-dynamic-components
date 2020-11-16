import React, { useState,useEffect } from 'react';


import ItemBlock from './components/ItemBlock';

import logo from './logo.jpeg';


const emptyParcelObject={"parcelItems":[],
					   "fromAddressDetails":{"fromFname":"","fromLName":"","fromAddress":""},
					   "toAddressDetails":{"toFname":"","toLName":"","toAddress":""}
						};

export default function App() {
	const [parcelItems, setItems] = useState([{"id":1,
	                     "itemName":"",
						 "desc":"",
						 "hsx":"",
						"category":""}]);
	const [itemComponets, setItemComponent] = useState([]);
	const [count, setCount] = useState(2);
	
	const { ...parcelObject } = emptyParcelObject;
    const [parcel, setParcel] = useState({ emptyParcelObject });
	
						//[...] = useState(parcelObject)


  

     //var elements=[];
        
	useEffect(()=>{
		setItemComponent(parcelItems.map(item => <ItemBlock key={item.id} onDelete={handleDelete} updateItemFields={handleItemFileds} item={item}/>));
		
	}, [parcelItems]);

	const handleClick = () => {
	    if(parcelItems.length<5){
			
			//setNumberOfItems( arr => [...arr, `${arr.length}`]);
			//console.log(count);
			setCount(count + 1);
			//let itemIndex = parcelItems.length+1;
			//console.log(itemIndex);
			addItems();
		}else{
		alert("Max 5 items");
		}
		
		//(numberOfItems) => setNumberOfItems(numberOfItems.push('two'))
    };
	const addItems =()=>{
	//console.log(count);
			let newItem={"id": count,
			             "itemName":"",
						 "desc":"",
						 "hsx":"",
						 "category":""
						};
			
			
			setItems( arr => [...arr, newItem]);
			console.log(count);
	};
	
	const onChangeFromAddressData=(e)=>{
		
			 
		setParcel({
			parcelItems,
			toAddressDetails:{...parcel.toAddressDetails},
			fromAddressDetails: { ...parcel.fromAddressDetails, [e.target.name]: e.target.value }
		});
		
		console.log(parcel);
		
	  };
	
	
	const onChangeToAddressData=(e)=>{
		//let items = [...parcelObject.parcelItems];
		setParcel({
			parcelItems,
			toAddressDetails: { ...parcel.toAddressDetails,[e.target.name]: e.target.value },
			fromAddressDetails: { ...parcel.fromAddressDetails}
			
		});
		
		console.log(parcel);
		
	};
	
	const handleDelete = itemId => {
		alert(itemId);
		setItems(parcelItems.filter(item => item.id !== itemId));
		
		/*var index = numberOfItems.findIndex(x=> x ==itemId);
		setNumberOfItems([
		  ...numberOfItems.slice(index,1)
		]);*/
	};
	const handleSubmit = (evt) => {
      evt.preventDefault();
	  parcel.parcelItems=parcelItems;
	  console.log(parcel);
	  	     
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ parcel }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => console.log("success"));

      
	}
    const handleItemFileds=(event,itemId)=>{
		//console.log(itemId);
		console.log(event.target);
		//console.log(event.target.value);
		//var result = foo.map(el => el.bar == 1 ? {...el, baz: [11,22,33]} : el);

       setItems(parcelItems.map(item => item.id === itemId ? {...item, [event.target.name]: event.target.value} : item));  

/*let nObj = parcelItems.filter(ele => {
	if(ele.id === itemId) 
    ele[event.target.name] = event.target.value;
    return ele;
});
console.log(nObj);*/
		
		//parcelItems.map(item => item.id === itemId ? {...item, [event.target.name]: event.target.value} : item);
		//console.log(parcelItems);
		
		//parcelItems.find( item => item.id == itemId && ( [event.target.name] = event.target.value, true ) );
		//setTheArray([...theArray, newElement]);

		
		

		console.log(parcelItems);
		
	}
 
    return (
	
	       <>
		    <nav className="app-header layout-row align-items-center justify-content-center">
			  <div className="layout-row align-items-center">
				<img alt="" src={logo} className="logo"/>
				<h4 id="app-title" data-testid="app-title" className="app-title">Post</h4>
			  </div>
			</nav>
	        <div className="formContainer">
				<button  className="addItemBtn" onClick={handleClick}>
						Add Item
				</button>
				<form  className="mt-2"  onSubmit={handleSubmit}>
				   <div className="itemsContainer">
						{itemComponets}
					</div> 
					<div className="addressContainer">							  
						<div className="fromAddressContainer">
						<h3>From address:</h3>
							 <div>
								<label>First name:</label>
								<input type="text" className="form-control" name="fromFname"  
								onChange={onChangeFromAddressData}
																								  
								/>
								
								
							 </div>
							 <div>
								<label>Last name:</label>
								<input type="text" className="form-control" name="fromLName" 
								  onChange={onChangeFromAddressData} />
							</div>
							<div>
								<label>From Address:</label>
								<textarea className="form-control" name="fromAddress" rows="3" 
								onChange={onChangeFromAddressData}></textarea>
							</div>
						</div>
						
						<div className="toAddressContainer">
						<h3>To address:</h3>
							<div>
								<label>First name:</label>
								<input type="text" className="form-control" name="toFname" 
								onChange={onChangeToAddressData}/>
							</div>
							<div>
								<label>Last name:</label>
								<input type="text" className="form-control" name="toLName"
 								onChange={onChangeToAddressData}/>
							</div>
							<div>
								<label>To Address:</label>
								<textarea className="form-control" name="toAddress" rows="3" 
									onChange={onChangeToAddressData}>
								</textarea>
							</div>	
						</div>
					  </div>
					   
						<div className="btnBlock">
							<button className="btn btn-danger btn-sm"
											type="button">
										<i className="fa fa-remove mr-2"></i>Reset
							</button>
								
							<button type="submit" className="btn btn-success btn-sm">
								<i className="fa fa-save mr-2"></i>Save
							</button>
																			
						</div>
				</form>
					 
            </div>
	     </>
	  
	  //End
    );
  

}
