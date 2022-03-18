const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const hewan = [
    { id: 1, nama: 'Snowy', spesies: 'kucing' },
    { id: 2, nama: 'Blacki', spesies: 'anjing' },
    { id: 3, nama: 'Molly', spesies: 'kucing' },
    { id: 4, nama: 'Milo', spesies: 'kelinci' },
    { id: 5, nama: 'Rere', spesies: 'kucing' },
]

// middleware use global
app.use(express.json());

// custom middleware use function
const myMiddleware = (req, res, next) => {
    console.log("this is logger");
    next();
}

// custom middleware use for method post
const errorPost = (req, res, next) => {
    const body = req.body;
    const spesies = ["kucing", "anjing", "kelinci"];
    if(spesies.includes(body.spesies)){
        next();
    }
    else{
        res.status(400).json({
            "error": "Spesies not valid"
        });
    }
};

app.get('/hewan', myMiddleware, (req, res) => {
    res.json({
        "message": "success get data Pet",
        "hewan": hewan
    });
});

app.get('/hewan/:id', myMiddleware, (req, res) => {
    const { id } = req.params;

    const singleHewan = hewan.find(hewan => hewan.id == id);

    res.json({
        "message": "success get data Pet",
        "hewanFilter": singleHewan
    });
});

app.post('/hewan', errorPost, (req, res) => {
    const data = req.body;

    hewan.push(data);

    res.json({
        "message": "success adding one pet",
        "hewan": hewan
    });
});

app.put('/hewan/:id', myMiddleware, (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const singleHewan = hewan.find(hewan => hewan.id == id);

    singleHewan.data = data;
    res.json({
        "message": "success updating one pet",
        "updateHewan": singleHewan.data
    });
});

app.delete('/hewan/:id', myMiddleware, (req, res) => {
    const { id } = req.params;

    const deleteHewan = hewan.filter(hewan => hewan.id != id);
    
    res.json({
        "message": "success deleting one pet",
        "hewan": deleteHewan
    });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});