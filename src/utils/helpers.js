import url from './URL';

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
        //claudinary
        console.log(item.image);
        // let image = url+ item.image[0].url; //local set no deployment. 
        let image= item.image[0].url;  // cloudinary set. The url is https://res/cloudinary.com/xx . 
        console.log(image);
        return {...item, image: image};
    })
};
