import { Container } from "@mui/material";
import React, { useState } from "react";
import { adminContext } from "../contexts/AdminContext";
import "./AddPage.css";

const AddPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    style: "",
    year: "",
    description: "",
    square: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      category: "",
      style: "",
      year: "",
      description: "",
      square: "",
      image: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Добавить в портфолио</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            placeholder="Введите название"
            variant="standard"
          />
          <br />
          <input
            onChange={(e) =>
              setNewProduct({ ...newProduct, year: e.target.value })
            }
            value={newProduct.year}
            placeholder="Введите год"
            variant="standard"
          />
          <br />
          <input
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            placeholder="Введите описание"
            variant="standard"
          />
          <br />
          <input
            onChange={(e) =>
              setNewProduct({ ...newProduct, square: e.target.value })
            }
            value={newProduct.square}
            placeholder="Введите площадь"
            variant="standard"
          />
          <br />
          <input
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            placeholder="Введите фото"
            variant="standard"
          />
          <br />
          <div variant="standard">
            <label id="style-select-label">Выберите стиль</label>
            <select
              onChange={(e) =>
                setNewProduct({ ...newProduct, style: e.target.value })
              }
              value={newProduct.style}
              label="Выберите стиль"
              labelId="style-select-label"
            >
              <option value="Современный">Современный</option>
              <option value="Классика">Классика</option>
              <option value="Лофт">Лофт</option>
              <option value="Минимализм">Минимализм</option>
              <option value="Неоклассика">Неоклассика</option>
            </select>
          </div>
          <div variant="standard">
            <label id="size-select-label">Выберите категорию</label>
            <select
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
              value={newProduct.category}
              label="Выберите категорию"
              labelId="category-select-label"
            >
              <option value="Дизайн интерьера">Дизайн интерьера</option>
              <option value="Архитектурное проектирование">
                Архитектурное проектирование
              </option>
              <option value="Ландшафтный дизайн">Ландшафтный дизайн</option>
            </select>
          </div>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </Container>
  );
};

export default AddPage;
