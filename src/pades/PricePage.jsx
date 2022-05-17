import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import ServicesCard from "../components/ServicesCard";
import { clientContext } from "../contexts/ClientContext";

const PricePage = () => {
  const { getServices, services } = useContext(clientContext);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <Container style={{ marginTop: 20 }}>
      <div>
        {" "}
        <b>Базовый тариф: 10$/квадр. метр.</b>
        <ul>
          <li>Консультация и выезд на обьект</li>
          <li>Замеры на объекте</li>
          <li>Составление технического задания</li>
          <li>Планировочное решение</li>
          <li>Концепция интерьера (Муд борд)</li>
          <li>Рабочие чертежи требуемые для реализации проекта</li>
          <li>Спецификации материалов</li>
          <li>Спецификация дверей</li>
        </ul>
      </div>

      <div>
        {" "}
        <b>Мультилайт тариф: 7$/квадр. метр.</b>
        <ul>
          <li>Спецификация по мебели</li>
          <li>3D визуализация</li>
          <li>Смета по освещению</li>
        </ul>
      </div>

      <div>
        {" "}
        <b>Экспресс тариф: 5$/квадр. метр.</b>
        <ul>
          <li>Подбор отделочных материалов</li>
          <li>Смета на строительные работы</li>
          <li>Авторский надзор</li>
          <li>Комплектация проекта</li>
        </ul>
      </div>
      <div>
        {" "}
        <b>Вип тариф: 12$/квадр. метр.</b>
        <ul>
          <li>Технический надзор от компании</li>
          <li>Бюджетирование обьекта</li>
          <li>Декорирование помещения</li>
          <li>Скидочная карта на материал</li>
        </ul>
      </div>
      <div className="services-list">
        {services.map((item) => (
          <ServicesCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default PricePage;
