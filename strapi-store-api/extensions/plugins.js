module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('tianboyucloud'),
        api_key: env('913757576613538'),
        api_secret: env('pUS2I-eViDhu_oZg1wg9dRoE9oY'),
        // api_environment_variable: env('CLOUDINARY_URL=cloudinary://913757576613538:pUS2I-eViDhu_oZg1wg9dRoE9oY@tianboyucloud'),
      },
    },
    // ...
  });