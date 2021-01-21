import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table";
import { COLUMNS } from './columns';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            chproducts:[],
            loading: true,
        }
        this._onSelect = this._onSelect.bind(this)
    }
    async getProductsData() {
        const res = await axios.get('http://app.getrecall.com:8080/products')
        this.setState({ loading: false, products: res.data, chproducts: res.data })
    }
    componentDidMount() {
        this.getProductsData()
    }

    removeDuplicates(data){
        return[...new Set(data)]
    }

    _onSelect(value){
        let chosenProducts =this.state.products
        
        if(value.value!="All"){
            chosenProducts = chosenProducts.filter(obj => obj.category == value.value);
            console.log(chosenProducts) 
            console.log(this.state.products)
            
            this.setState({chproducts:chosenProducts}) // using a new array to manipulate the table without affecting the dropdown menu that depends on the products array
        }
        else{
            this.setState({chproducts:chosenProducts})
        }
        
            
    }

    render() {
        const allCategories = this.state.products.map(item => (item.category)).join(",").split(",") //extracting Categories dynamically
        const options = this.removeDuplicates(allCategories)// removing duplicate categories to construct dropdown options
        options.unshift("All")
          const defaultOption = options[0];
        if(this.state.loading==true){
            return(
                <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
    }}
    >
                <Loader
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
         
         />
         </div>
            )
        }
        else{
              return (
                  <>
                  <div style={{ margin: '20px' }}>
                      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} />
                      </div>
                      <div style={{ margin: '20px' }}>
                          <ReactTable
                              data={this.state.chproducts}
                              columns={COLUMNS}
                          />
                      </div>
                  </>
              )
        }
    }
}

