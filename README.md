# Flight-to-sale

Simple airline tickets feed SPA.  
The data .json file is located in './mocks' directory. Data simulates the response from server (e.g. search query).   
Initially, data is loaded to store and then is rendered according to app's settings (in './const.js').    
    
The outcome can be filtered by price, number of flight transfers and specific airline, then sorted by ascending/descending price value or by minimum flight duration.   
     
App has a feature to select different currency, the outcome rerenders accordingly.   
     

Developed with Vue2, Vuex, Sass. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
