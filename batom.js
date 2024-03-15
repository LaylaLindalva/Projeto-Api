
const variavel = 'lipstick'

const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${variavel}`
const url2 = `http://makeup-api.herokuapp.com/api/v1/products?`

const loadSombra = async () => {
    const res = await fetch(url)
    const json = await res.json()
    return json
};


console.log(loadSombra())
