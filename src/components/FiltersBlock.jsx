import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
import "./FiltersBlock.css";

const FiltersBlock = () => {
  const { getProducts } = useContext(clientContext);
  const location = useLocation();
  const navigate = useNavigate();

  const filter = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [categoryValue, setCategoryValue] = useState(
    filter.get("category") || ""
  );
  const [styleValue, setStyleValue] = useState(filter.get("style") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setCategoryValue(filter.get("category") || "");
    setStyleValue(filter.get("style") || "");
    getProducts();
    console.log(key);
  };

  const resetFilter = () => {
    getProducts();
    setSearchValue("");
    setCategoryValue("");
    setStyleValue("");
    navigate("/");
  };

  return (
    <div className="filters-block">
      <input
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        placeholder="Живой поиск"
      />
      <div>
        <select
          value={categoryValue}
          onChange={(e) => handleFilters("category", e.target.value)}
          placeholder="Выберите категорию"
          labelId="category-label"
        >
          <option>Выберите категорию</option>
          <option value="Дизайн интерьера">Дизайн интерьера</option>
          <option value="Архитектурное проектирование">
            Архитектурное проектирование
          </option>
          <option value="Ландшафтный дизайн">Ландшафтный дизайн</option>
        </select>
      </div>
      <div>
        <select
          value={styleValue}
          onChange={(e) => handleFilters("style", e.target.value)}
          label="Выберите стиль"
          labelId="style-label"
        >
          <option>Выберите стиль</option>
          <option value="Современный">Современный</option>
          <option value="Классика">Классика</option>
          <option value="Лофт">Лофт</option>
          <option value="Минимализм">Минимализм</option>
          <option value="Неоклассика">Неоклассика</option>
        </select>
      </div>
      <button onClick={resetFilter}>Сбросить</button>
    </div>
  );
};

export default FiltersBlock;
