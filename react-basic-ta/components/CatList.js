import axios from "axios";
import { useEffect, useState } from "react";

function CatList(){
    const [cats, setCats] = useState([]);

    const [catsTemp, setCatsTemp] = useState([]);

    useEffect(async () => {
        const dataCats = await axios.get("https://api.thecatapi.com/v1/breeds");

        setCats(dataCats.data);
        setCatsTemp(dataCats.data);
    }, [])

    console.log(cats);

    return(
        <div>
            <h1>List Cat</h1>
            {
                cats.length === 0 ? <p>Loading</p> 
                    : <div>
                        <p>Data Cats</p>
                        <div>
                        {cats.map((item, index)=> (
                            <div key={index}>
                                <img src={item.image} width={150} alt="" />
                                {/* <img src={item.image[index].url} alt="" /> */}
                                <h3>{item.name}</h3>
                                <h4>{item.origin}</h4>
                            </div>
                        ))}
                        </div>
                    </div>
            }
        </div>
    )

}

export default CatList;