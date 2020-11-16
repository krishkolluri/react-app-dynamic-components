import React from 'react';


class Articles extends React.Component {
	
	
	constructor(props){
		
		super(props);
		this.state={
			articles:[],
			inputName:''
		};
	}
	
	handleChangeInput=(e)=>{
		console.log(e.target.value);
		this.state.inputName=e.target.value;
	}
	fetchArticles=()=>{
		let inputAuthor = this.state.inputName;
		//let API = 'https://jsonmock.hackerrank.com/api/articles?author='+inputAuthor+'&page=1';
		let API = 'https://taxo.imxpostal.fr/api/v1.1/get_datas?q='+inputAuthor+'&lang=en';
		//https://taxo.imxpostal.fr/api/v1.1/get_datas?q=mobile&lang=en
		console.log(API);
		fetch(API).then(response =>response.json())
		          // .then(data=>this.setState({articles:data.data}))
				  .then(data=>this.setState({articles:data.items}))
				  
		            .catch((error)=>{
						console.log("error",error)
					});
	}

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>Seatch By Item type:</span>
            <input type="text" className="text-input" onChange={this.handleChangeInput} data-testid="text-input" />
            <button className="fetch-button" data-testid="fetch-button" onClick={this.fetchArticles}>Show HSX details</button>
          </div>
        </div>
		<div className={this.state.articles.length>0?'show':'hide'}>
        <div data-testid="results" className="results">
		{this.state.articles.map((article) =>(
          <div className="seacrchResultContainer">
		  <div><span className="labelField">Category: </span> {article.category_en} </div> 
		  <div><span className="labelField">Desc: </span> {article.description_en}</div>
		  <div><span className="labelField">HSCode: </span> {article.suitableHS6code}</div>
		  </div>
		  ))}
        </div>
		</div>
		<div className={this.state.articles.length>0?'hide':'show'}>
        <div data-testid="no-results">No results</div>
		</div>
      </React.Fragment>
    );
  }
  
  
  
  
}

export default Articles;
