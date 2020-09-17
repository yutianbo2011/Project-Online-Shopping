// import url from './URL';

export const featuredProducts = (data) => {
    return data.filter(
        item => {
            return item.featured === true;
        }
    )
};

//solve the image problem locally
export const flattenProducts = (data) =>{
    return data.map(item => {
        // let image = url+ item.image[0].url; //local set no deployment. 
        let image=(item.image[0])? item.image[0].url: null;  // cloudinary set. The url is https://res/cloudinary.com/xx . 
        return {...item, image: image};
    })
};

//for the filter of products
export const paginate = (products) => {
    const itemPerPage = 8;
    const numberOfPages = Math.ceil(products.length / itemPerPage);
    // const newProducts = Array.from({length: numberOfPages}, ()=>{
    //     return products.splice(0, itemPerPage);
    // }); 
    const newProducts = Array.from({length: numberOfPages}, (_, index)=>{
        return products.slice(index*itemPerPage, (index+1)*itemPerPage);
    }); 
    // console.log(newProducts);
    return newProducts;
};