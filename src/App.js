import React, { Component } from 'react';
import TdtProductList from './component/TdtProductList';
import TdtProductAdd from './component/TdtProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        { tdt_taskId:1,tdt_taskName:"Học lập trình frontend", tdt_level:"Small" },
        { tdt_taskId:2, tdt_taskName:"Học lập trình reactjs",tdt_level:"Medium"},
        { tdt_taskId:3, tdt_taskName:"Lập trình với Frontend - Reactjs",tdt_level:"High"},
        { tdt_taskId:4, tdt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",tdt_level:"Small"},
      
      ]
    }
  }
  tdtHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
     
      <div className='container border mt-5'>
      <h1>tdt-2210900085</h1>
      <hr/>
      <TdtProductList renderProducts={this.state.products}/>
      <hr/>
      <TdtProductAdd onSummit={this.tdtHandldSumit}/>
     
      </div>
    )
  }
}
