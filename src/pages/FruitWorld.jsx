import { useRef, useState, useEffect } from "react";
import axios from "axios";

const FruitWorld = () => {
  const [fruit, setFruit] = useState();
  const [fruitsList, setFruitsList] = useState([]);
  const nameRef = useRef();
  const imgRef = useRef();
  const searchRef = useRef();

  const url = "http://localhost:5000/fruit"

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get(`${url}/all`);
      setFruitsList(response.data);
    }
    fetchData();
  }, [])

  const handleClick = async () => {
    const response = await fetch(
      `${url}` + inputRef.current.value
    );
    const data = await response.text();
    setFruit(data);
  };
  const handleDelete = async (fruitId) => {
    const response = await axios.delete(`${url}/del/${fruitId}`);
    setFruitsList(response.data);
  };
  const handleRegist = async () => {
    const response = await axios.post(`${url}/reg/`, {
      id: nameRef.current.value,
      img: imgRef.current.value,
    });
    setFruitsList(response.data);
    nameRef.current.value = "";
    imgRef.current.value = "";
  };
  const handleSearch = async () => {
    const response = await axios.get(`${url}/${searchRef.current.value}`);
    const data = await response.data;
    setFruit(data);
  };

  return (
    <>
      <div>
        <h1>Fruit List</h1>
        <table>
          <tbody>
            {fruitsList.map((fruit, i) => {return(
              <tr key={i}>
                <td>{fruit.fruit_id}</td>
                <td>{fruit.fruit_img}</td>
                <td>
                  <button onClick={() => handleDelete(fruit.fruit_id)}>
                    削除
                  </button>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
        <hr />
        <h1>Fruit Regist</h1>
        果物の名前 : <input ref={nameRef}></input>
        <br />
        果物のイメージ : <input ref={imgRef}></input>
        <br />
        <button onClick={handleRegist}>登録</button>
        <hr />
        <h1>Fruit Search</h1>
        <input ref={searchRef}></input>
        <button onClick={handleSearch}>検索</button>
        <h1>{fruit}</h1>
      </div>
    </>
  );
};

export default FruitWorld;