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
        console.log(item.image[0]);
        let image = url+ item.image[0].url; //local set no deployment. 
        return {...item, image: image};
    })
};
