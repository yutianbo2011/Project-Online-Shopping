import React from 'react';
import { ProductContext } from '../../context/products';

const Filters = () => {
    const { filter: { search, category, price }, updateFilters, sorted,  } = React.useContext(ProductContext);
    return (<section className='filters-section'>
        <h2 className='section-title'>search products</h2>
        <form className='filters-form'>
            {/* search input */}
            <div>
                <label htmlFor='search'>search term</label>
                <input className='form-control' type='text' id='search' name='search' value={search}
                    onChange={updateFilters}></input>
            </div>
            {/* select category */}
            <div className='form-group'>
                <label htmlFor='category'>category</label>
                <select className='form-control' name='category' id='category' value={category} onChange={updateFilters}>
                    <option value='all'>all</option>
                    <option value='IPhone'>IPhone</option>
                    <option value='Samsung'>Samsung</option>
                    <option value='Huawei'>Huawei</option>
                </select>
            </div>
            {/* price range */}
            <div className='price-group'>
                <p>price</p>
                <label> <input type='radio' name='price' value='all' checked={price === 'all'} onChange={updateFilters} />all </label>
                <label> <input type='radio' name='price' value='7.99' checked={price < 8} onChange={updateFilters} />less than $7.99 </label>
                <label> <input type='radio' name='price' value='11.99' checked={price >= 8 && price < 12} onChange={updateFilters} />less than $11.99 </label>
            </div>
        </form>
        <h6>total products : {sorted.flat().length} </h6>
    </section>);
}

export default Filters;