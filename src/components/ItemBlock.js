import React from 'react';
import AppModal from '../components/AppModal';



function ItemBlock(props) {
  
  

  return (
    <>
      
      <div className="itemBlock item1"> 
                                    <div>								 
									<label>Item:</label>
									<input type="text" className="form-control" name="itemName" onChange={(e) => props.updateItemFields(e,props.item.id)} />
									</div>
									<div>
																
								     <label>Click here to check item HSX Details:</label>
								     <AppModal/>
									 </div>
								    <div>
									<label>Category:</label>
									<input type="text" className="form-control"  name="category" onChange={(e) => props.updateItemFields(e,props.item.id)} />
									</div>
									<div>
									<label>HSX:</label>
									<input type="text" className="form-control" name="hsx" onChange={(e) => props.updateItemFields(e,props.item.id)} />
									</div>
									<div>											
								   
									<label>Descrition:</label>
									<input type="text" className="form-control" name="desc" onChange={(e) => props.updateItemFields(e,props.item.id)} />
									</div>
									<button
										onClick={() => props.onDelete(props.item.id)}
												className="deleteItemBtn btn btn-lg btn-outline-danger ml-16"
										><i className="fa fa-trash" aria-hidden="true"></i>
Remove Item</button>
									
								  </div>
    </>
  );
}


export default ItemBlock;
