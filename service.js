//const express = require('express'); 
const fs = require('fs'); 
const download = require('download');  
const url="https://images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg"; 
(async () => {     
    await download(url, 'dist');       
    fs.writeFileSync('dist/pexels-photo-5919667.jpeg', await download(url));       
    download('images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg')     
    .pipe(fs.createWriteStream('dist/cool.jpg'));      
     // download array of images     
     await Promise.all([         
         'images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg',         
         'images.pexels.com/photos/736230/pexels-photo-736230.jpeg',         
         'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',         
         'https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277__340.jpg',
         'https://image.shutterstock.com/image-vector/map-planet-world-global-social-260nw-1364290838.jpg',
         'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/dark-chocolate-bar-1296x728-header.jpg'   
        ].map(url => download(url, 'dist'))); 
    })();