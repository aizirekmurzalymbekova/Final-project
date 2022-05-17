import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
const rows = [];

const FavPage = () => {
  const data = React.useContext(clientContext);
  const { getProductsFromFav, myFav } = data;

  useEffect(() => {
    getProductsFromFav();
  }, []);

  if (!myFav) {
    return <h2>Loading</h2>;
  }

  if (myFav.products.length === 0) {
    return <h2>Нет избранных</h2>;
  }

  return (
    <div>
      <Container>
        <h2>Избранные</h2>
        <h4>
          В ходе консультации можете показать нам ваши избранные, чтобы мы могли
          понять, какой именно стиль вам нравится и подходит.
        </h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Категория</TableCell>
                <TableCell align="center">Стиль</TableCell>
                <TableCell align="center">Фото</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myFav.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.product.category}
                  </TableCell>
                  <TableCell align="center">{item.product.style} </TableCell>
                  <TableCell align="center">
                    <img width={100} src={item.product.image[0]} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default FavPage;
