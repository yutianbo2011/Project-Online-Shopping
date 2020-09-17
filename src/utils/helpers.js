// import url from './URL';

// helper functions
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
