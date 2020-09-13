module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME', 'tianboyucloud'),
        api_key: env('CLOUDINARY_KEY', '913757576613538'),
        api_secret: env('CLOUDINARY_SECRET', 'pUS2I-eViDhu_oZg1wg9dRoE9oY'),
        // api_environment_variable: env('CLOUDINARY_URL=cloudinary://913757576613538:pUS2I-eViDhu_oZg1wg9dRoE9oY@tianboyucloud'),
      },
    },
    // ...
  });