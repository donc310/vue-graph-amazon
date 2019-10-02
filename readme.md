
## ABOUT
This sample app uses [vue-graph-template](https://github.com/donc310/vue-graph-template) template along with a json 

file containing a list  of amazon products.  SEARCHES: `BOOKS`

## DEMO

LINK : <a href="https://ngraph-amazon.herokuapp.com/#?q=books">https://ngraph-amazon.herokuapp.com/#?q=books</a>


## HOW IT WORKS
The app listens for the  `CORE::NODE_SELECTED`  `CORE::NODES_UPDATE` event emmitted by the main component to display a 

list of Amazon products

```
mounted() {
EventBus.$on("CORE::NODES_UPDATE", NODES => {});

EventBus.$on("CORE::NODE_SELECTED", selected_node => {});
}
 
```

## Project setup

```
npm install
```

### Compiles and minifies for production

```
npm run build
```

### Start

```
npm run start
```
App should be running in <a href="http://localhost:5000">http://localhost:5000</a>