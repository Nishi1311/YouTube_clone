import React from "react";
//import { Stack } from "@mui/material";
import '../css/sideBar.css'
import { categories } from "../utils/constants";

const Categories = ({selectedCategory,setSelectedCategory}) => {
  return(
    <>
  {/*<Stack direction="row"sx={{overflowY: "auto",height: { sx: "auto", md: "95%" },flexDirection: { md: "column" },}} >*/}
  <div className="sidebar-div">
    {categories.map((category) => (
      <button onClick={() => setSelectedCategory(category.name)} className="category-btn"style={{background: category.name === selectedCategory && "lightgrey",color: "black"}}key={category.name}>
        <div className="category-icon" style={{ color: category.name === selectedCategory ? "black" : " ", marginRight: "15px" }}>
          {category.icon}
        </div>
        <div className="category-name">
          {category.name}
        </div>
      </button>
    ))}
    </div>
    {/*</Stack>*/}
  </>
)
      };

export default Categories;