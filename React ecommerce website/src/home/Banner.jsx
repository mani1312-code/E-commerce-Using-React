import React, { useState } from 'react'
import ProductData from '../products.json'
import { Link } from 'react-router-dom'
import SelectedCategary from '../components/SelectedCategary'

const title = (
    <h2>Search Your one from <span> Thousand </span> of Products</h2>
)

const desc = "We have the largest collection of Products"

const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
]

const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [fillterProducts, setFillterProducts] = useState(ProductData)
    // console.log(ProductData)
    // console.log(fillterProducts)

    // Search fuctionallity
    const handleSearch = (e) => {
        const searchTerm = e.target.value
        // console.log(e.target.value)

        setSearchInput(searchTerm)

        // filtering products based on search;
        const filtered = ProductData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        // console.log(filtered)
        setFillterProducts(filtered)

    }
    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCategary select={"all"}/>
                        <input type="text" id='search' name='search' placeholder='Search for your Products' value={searchInput}
                        onChange={handleSearch} />
                        <button type='submit'>
                        <i className="icofont-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                            
                            searchInput && fillterProducts.map((product,index) => <li key={index}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Banner
