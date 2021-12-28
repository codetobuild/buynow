<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
<<<<<<< HEAD
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
<<<<<<< HEAD
  ${mobile({ padding: "10px", flexDirection: "column" })}
=======
  ${mobile({ padding: "10px", flexDirection:"column" })}
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
<<<<<<< HEAD
  cursor: pointer;
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

<<<<<<< HEAD
  &:hover {
    background-color: #f8f4f4;
=======
  &:hover{
      background-color: #f8f4f4;
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
  }
`;

const Product = () => {
<<<<<<< HEAD
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await publicRequest.get(`/products/find/${productId}`);
        console.log(data);
        setProduct({ ...data });
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type == "increase") {
      setQuantity((q) => q + 1);
    } else if (type == "decrease") {
      setQuantity((p) => (p > 1 ? p - 1 : 1));
    }
  };

  const handleClick = () => {

  };
  
=======
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
<<<<<<< HEAD
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((item) => (
                <FilterColor
                  color={item}
                  key={item}
                  onClick={() => setColor(item)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((item) => (
                  <FilterSizeOption key={item}>{item}</FilterSizeOption>
                ))}
=======
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
<<<<<<< HEAD
              <Remove onClick={() => handleQuantity("decrease")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("increase")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
=======
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
>>>>>>> 783c20030809a80e3f2d8c4e20f65ca5f7f3f2d1
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
