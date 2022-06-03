import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const Modal = ({ visible, setVisible, upDateCategory }) => {
  const [data, setFormData] = useState({
    categoryName: "",
    url: "https://newsapi.org/v2/everything?q=``&from=2022-06-1&sortBy=publishedAt&apiKey=``",
  });
  
  let errors;
  const handleFormData = (e) => {
    e.preventDefault();
    if (data && data?.categoryName.length > 0 && data?.url.length > 0) {
      upDateCategory(data);
      setFormData({});
    } else {
      errors = "please fill all the details ";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Dialog
      header="Add Category"
      visible={visible}
      onHide={() => setVisible(false)}
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "50vw" }}
      className="add-category-popup"
    >
      {errors && <span>{errors}</span>}
      <div className="formgrid grid">
        <div className="field col-12">
          <InputText
            className="category"
            placeholder="Category Name"
            name="categoryName"
            value={data.categoryName}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className="field col-12 ">
          <InputText
            name="url"
            className="category"
            placeholder="API URL"
            value={data.url}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <Button
          label="Add"
          icon="pi pi-plus"
          aria-label="Add"
          className="p-button-rounded"
          id="add-icon-modal"
          onClick={(e) => handleFormData(e)}
        />
      </div>
    </Dialog>
  );
};

export default Modal;
