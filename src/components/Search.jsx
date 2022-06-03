import React, { useState,useContext,useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {GetNewsData} from "./service/FetchData"
import Modal from "./service/Modal";
import "./Search.css";
import { GlobalDataContext } from "../context/context";
import {DEAFULT_API_URL} from "./service/constants"

const Search = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [active,setActive] = useState("TechCrunch")
  const {data, setData,dataCopy,setDataCopy } = useContext(GlobalDataContext);
  const [buttons,SetButtons]=useState([{categoryName:'TechCrunch',url:DEAFULT_API_URL}]);
 
  const fetchData =(url) =>{
    GetNewsData(url)
    .then((response)=>{
      setData(response?.data?.articles)
      setDataCopy(response?.data?.articles)
    })
    .catch((err)=>{console.log(err,err)})
  }

useEffect(()=>{
  const requiredData = buttons.find((data)=> data?.categoryName===active)
  requiredData && fetchData(requiredData.url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[active,buttons])



const handleUpdateCategory =(data) =>{
  if(buttons && buttons.length<5){
    SetButtons((prevState)=>([
      ...prevState,
      data
    ]))

  }
  setVisible(false);
  fetchData(data.url)
  setActive(data.categoryName);
}

const listOfButtons  = ()=>  
  buttons?.map((name,index)=>(
    <Button label={name.categoryName} key={name.categoryName+index}  className={name.categoryName===active ? 'active-button p-button-rounded':'p-button-rounded sm:col-12 md:col-2' }  onClick={()=>setActive(name.categoryName)}/>
  ))

  const search = (e)=>{
    setValue(e.target.value)
        if (value !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(value.toLowerCase())
            })
            setData(filteredData)
        }
        else{
          setData(dataCopy)
        }


  }





  return (
    <div className="col-12 search-toggle">
      <div className="toggle-buttons grid">
        {listOfButtons()}
        <Button
          icon="pi pi-plus"
          className="p-button-rounded add-icon"
          onClick={() => setVisible(true)}
        />
      </div>
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            className="search"
            value={value}
            onChange={(e) => search(e)}
            placeholder="Search for keywords, author"
          />
        </span>
      </div>
      <Modal visible={visible} setVisible={setVisible} upDateCategory={handleUpdateCategory} />
    </div>
  );
};

export default Search;
