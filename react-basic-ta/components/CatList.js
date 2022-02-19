import axios from "axios";
import { useEffect, useState } from "react";
import CatItem from "./CatItem";

function CatList(){
    const [cats, setCats] = useState([]);

    const [catsTemp, setCatsTemp] = useState([]);

    //state use to store input search
    const [inputSearch, setInputSearch] = useState({
        name: "",
    });

    useEffect(async () => {
        const dataCats = await axios.get("https://api.thecatapi.com/v1/breeds");

        setCats(dataCats.data);
        setCatsTemp(dataCats.data);
    }, [])

    // console.log(catsTemp);
    const searchCats = (e) => {
        e.preventDefault();
        setInputSearch(e.target.value);
    }

    useEffect(async() => {
        const dataFilter = await catsTemp.filter((item)=>{
            return item.name === inputSearch
        })

        setCats(dataFilter);
    }, [inputSearch])

    return(
        <div>
            <h1>List Cat</h1>
            <input type="text" name="name" placeholder="Input cat name are you searching for" onChange={searchCats} />                       
            <CatItem data={cats} dataTemp={catsTemp}/>
        </div>
    )

}

export default CatList;