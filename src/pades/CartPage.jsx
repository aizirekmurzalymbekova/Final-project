import { Button, Container, TableFooter } from "@mui/material";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";

const rows = [];

const CartPage = () => {
  const data = React.useContext(clientContext);
  const { getServicesFromCart, myCart, changeCountServiceInCart } = data;
  console.log(myCart);

  useEffect(() => {
    getServicesFromCart();
  }, []);

  if (!myCart) {
    return <h2>Loading...</h2>;
  }

  if (myCart.services.length === 0) {
    return <h2>Корзина пуста</h2>;
  }
  return (
    <div>
      <Container>
        <h2>Корзина</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Тариф</TableCell>
                <TableCell align="center">Цена</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myCart.services.map((item) => (
                <TableRow
                  key={item.service.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.service.tariff}
                  </TableCell>
                  <TableCell align="center">{item.service.price} $</TableCell>
                  <TableCell align="center">
                    <input
                      min={1}
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountServiceInCart(
                          item.getServicesFromCart.id,
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{item.subPrice} $</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell align="right" colSpan={4}>
                  <h2>Итоговая сумма</h2>
                </TableCell>
                <TableCell align="center">
                  <h2>{myCart.totalPrice} сом</h2>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Link to="/form">
          <Button className="credit-button" variant="outlined">
            Оплатить
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default CartPage;
