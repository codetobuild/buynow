<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
<<<<<<< HEAD
import { useLocation } from "react-router-dom";
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "17px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
<<<<<<< HEAD
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  // console.log(category);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const newFilter = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilter);
  };
  const hanldeSort = (e) => {
    setSort(e.target.value);
  };

=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
  return (
    <Container>
      <Navbar />
      <Announcement />
<<<<<<< HEAD
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
=======
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
<<<<<<< HEAD
          <Select name="sort" onChange={hanldeSort}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
=======
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
