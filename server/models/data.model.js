/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const Helper = require('../helpers/helper')
let items
/**
 * 
 * @param {*} query 
 */
function handleQuery(query) {
    if (!Helper.JsonValidator(query.fname)) {
       //
    }
    try {
        items = require('../data/' + query.fname + '.json').nodes
        if (query.query) {
            items = items.filter((item) => {
                let title = item.title.toLowerCase().trim(),
                    queryArray = query.query.toLowerCase().trim().split(" "),
                    queryConfidence = []
                if (queryArray.length > 0) {
                    queryArray.forEach(word => {
                        if (title.indexOf(word) !== -1) {
                            return queryConfidence.push(1)
                        }
                        queryConfidence.push(0)
                    });
                }
                return queryConfidence.indexOf(1) !== -1;
            })
            items = items.slice(0, (query.maxResults ? query.maxResults : 10))
            //console.log("QUERY" ,query.query)
            //console.log("ITEMS" ,items)
        }

        if (parseInt(query.related) === 1) {
            //console.log("ITEMS :" ,items)
            items = items.filter((item) => {
                return item.related.indexOf(`${query.relatedToItemId }`) !== -1;
            })
            items = items.slice(0, (query.maxResults ? query.maxResults : 10))
            //console.log("FIND :" ,query.relatedToItemId)
            //console.log("ITEMS :" ,items)
        }
    } catch (err) {
        console.error(err)
    }
}
function getEntries(query) {
    handleQuery(query)
    return new Promise((resolve, reject) => {
        if (items.length === 0) {
            reject({
                message: 'No result found for query : ' + query.query,
                status: 202
            })
        }
        items = items.map((item) => {
            return {
                id: item.id,
                title: item.title,
                thumbnail: item.thumbnail,
                info: item.info
            }
        })
        resolve({ items: items })
    })
}

module.exports = {
    getEntries,
}