const express = require('express')
const app = express()

app.get('/', (req, res) => {

    val = "hello world!"
    ret = convert(val);
    res.send(ret);

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))


function convert(value) {
    return value + "hoge";
}
