import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../contexts/AdminContext";
import "./EditPage.css";

const EditPage = () => {
  const data = React.useContext(adminContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Редактировать товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, year: e.target.value })
            }
            value={editedProduct.year}
            label="Введите год"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, square: e.target.value })
            }
            value={editedProduct.square}
            label="Введите площадь"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="style-select-label">Выберите стиль</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, style: e.target.value })
              }
              value={editedProduct.style}
              label="Выберите стиль"
              labelId="style-select-label"
            >
              <MenuItem value="Современный">Современный</MenuItem>
              <MenuItem value="Классика">Классика</MenuItem>
              <MenuItem value="Лофт">Лофт</MenuItem>
              <MenuItem value="Минимализм">Минимализм</MenuItem>
              <MenuItem value="Неоклассика">Неоклассика</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="size-select-label">Выберите категорию</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, category: e.target.value })
              }
              value={editedProduct.category}
              label="Выберите категорию"
              labelId="category-select-label"
            >
              <MenuItem value="Дизайн интерьера">Дизайн интерьера</MenuItem>
              <MenuItem value="Архитектурное проектирование">
                Архитектурное проектирование
              </MenuItem>
              <MenuItem value="Ландшафтный дизайн">Ландшафтный дизайн</MenuItem>
            </Select>
          </FormControl>
          <br />
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
    </Container>
  );
};

export default EditPage;
