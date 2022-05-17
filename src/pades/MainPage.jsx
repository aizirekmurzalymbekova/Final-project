import React, { useContext, useEffect, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./MainPage.css";
import video from "./video1.mp4";
import logo from "../images/logo.png";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { clientContext } from "../contexts/ClientContext";

const MainPage = () => {
  const [show, setShow] = useState(false);
  const { addFeedback, feedbacks, getFeedback, delFeedback } =
    useContext(clientContext);
  const params = useParams();
  const [feedbackValue, setFeedbackValue] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      feedbackValue,
      feedbackUser,
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните поля");
        return;
      }
    }

    addFeedback(newFeedback);
    setFeedbackUser("");
    setFeedbackValue("");
  };

  useEffect(() => {
    getFeedback();
  }, [getFeedback]);

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  return (
    <div>
      <div className="intro">
        <div className="intro__media">
          <video
            className="intro__media-video"
            src={video}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <Container className="intro__content">
          <h1>
            Узнайте стоимость <br />
            дизайн-проекта
          </h1>
          <Link to="/price">
            <button>Рассчитать стоимость</button>
          </Link>
        </Container>
      </div>

      <Container>
        <h1>Для кого это?</h1>
        <h3>
          Мы делаем дизайн интерьеров для людей, которые хотят доверить нам весь
          процесс: <br /> дизайн-проект, ремонт, закупку материалов и мебели.
        </h3>

        <div className="blocks__first">
          <div className="blocks__first_contain">
            <p>
              <b>1</b>
            </p>
            <h4>
              <b>Для тех, кто ценит эстетику</b>
            </h4>
            <h5>
              Ежегодно посещаем зарубежные выставки, поэтому используем
              последние мировые тенденции в дизайне. Работаем только с
              проверенными решениями.
            </h5>
          </div>
          <div className="blocks__first_contain">
            <p>
              <b>2</b>
            </p>
            <h4>
              <b>Кому важна экспертность</b>
            </h4>
            <h5>
              В процессе работы над дизайн-проектом мы консультируемся с
              опытными строителями, чтобы получить технически реализуемые
              решения.
            </h5>
          </div>
          <div className="blocks__first_contain">
            <p>
              <b>3</b>
            </p>
            <h4>
              <b>Кому нужен тройной контроль</b>
            </h4>
            <h5>
              На каждый проект назначается группа из пяти человек. Это позволяет
              выдержать сроки, учесть нюансы, не упустить детали и досконально
              продумать интерьер.
            </h5>
          </div>
        </div>
      </Container>
      <div className="intro">
        <div className="intro__media">
          <img
            className="intro__media-video"
            src="https://static.tildacdn.com/tild3763-3665-4466-b237-303030336364/image.png"
            alt="img"
          />
        </div>
        <Container className="intro__content">
          <h4>Наша философия</h4>
          <br />
          <br />
          <br />
          <h2>
            Студия Aiz всегда будет придерживаться понятия: «дизайн — это
            эстетика, которая основывается на функциональности. Если это
            красиво, но не функционально, или не реализуемо в жилой среде — это
            не дизайн»
          </h2>
        </Container>
      </div>
      <Container className="blocks__second">
        <div className="blocks__second_contain">
          <h2>Почему мы?</h2>
        </div>
        <div className="blocks__second_contain">
          <div className="blocks__second_contain-p">
            <h4>
              Мы получили богатый опыт работы со сложными проектами, клубными
              домами и премиальной недвижимостью. Разбираемся в дизайне и знаем
              как реализовать его в строительном исполнении.
            </h4>
          </div>
          <div className="blocks__second_contain-p">
            <h4>
              <b>Функционал</b>
            </h4>
            <h5>
              На основе 150 вопросов работаем над эргономикой каждого помещения.
              Нам важно знать, как часто вы готовите или читаете ли перед сном.
              Мы учитываем ваш образ, ритм жизни, географию объекта и еще
              десяток параметров.
            </h5>
          </div>
          <div className="blocks__second_contain-p">
            <h4>
              <b>Эстетика</b>
            </h4>
            <h5>
              Наш подход обычно строится на следующем принципе: модных трендов
              много и они не вечны, и вместо того, чтобы им следовать, мы
              стараемся пробудить в заказчиках их собственное чувство стиля.
            </h5>
          </div>
          <div className="blocks__second_contain-p">
            <h4>
              <b>Упор на реализуемость</b>
            </h4>
            <h5>
              Для технической реализации наших идей мы консультируемся со
              строительными экспертами. Любая хорошая, но нереализуемая в
              строительном исполнении идея не попадёт в наш проект.
            </h5>
          </div>
          <div className="blocks__second_contain-p">
            <h4>
              <b>Сервисный подход</b>
            </h4>
            <h5>
              Мы делаем десятки проектов и ремонтов в год, поэтому умеем
              правильно и без ошибок выстроить сложный процесс реализации
              дизайна интерьера. Мы готовы взять все задачи по дизайну и ремонту
              на себя.
            </h5>
          </div>
          <div className="blocks__second_contain-p">
            <h4>
              <b>Системность</b>
            </h4>
            <h5>
              Каждой задаче в студии присваивается приоритет, отслеживается
              количество необходимого времени на проект, назначается рабочая
              группа. Чертежи проходят тройную проверку разными специалистами.
            </h5>
          </div>
        </div>
      </Container>
      <Container>FAQ</Container>
      <br />
      <br />
      <Container className="faq">
        <span>Частые вопросы</span>
        <h5>
          Нам часто задают вопросы о ремонте, сроках и процессе. <br /> Ниже мы
          приводим список самых популярных из них.
        </h5>
      </Container>
      <Container>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Почему мне нужно рассмотреть услугу "под ключ"?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              «Под ключ» — это когда мы берем весь процесс на себя:
              разрабатываем дизайн-проект, совершаем авторский надзор, делаем
              ремонт, закупаем материалы и мебель. Вам не нужно: Тратить свое
              время и нервы Искать бригаду Координировать подрядчиков Постоянно
              находиться на объекте Доставлять материалы Вести переговоры с
              мебельщиками Вам остается: Получать удовольствие от процесса
              Принимать работу Получать скидки от наших партнеров по мебели и
              отделочным материалам Радоваться результату
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Смогут ли строители реализвать все заложенные в дизайн идеи?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Для возможности технической реализации наших идей мы
              консультируемся со строительными экспертами и консультантами.
              Любая хорошая, но нереализуемая в строительном исполнении идея не
              должна попасть в проект, иначе это приведёт к рискам выйти за
              рамки бюджета, нарушения сроков, переделыванию проектов и других
              проблем, связанных с ремонтом квартиры. Дизайн-проект содержит
              необходимые спецификации, развёртки, технические узлы, «пироги» и
              описания конструктивных решений. Все это входит в проект для того,
              чтобы минимизировать риск переплат клиента из-за внедрения
              нереализуемых конструктивных решений.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Я не представляю, какой стиль хочу. Что делать в этом случае?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              В этом нам помогут две составляющие: опытный дизайнер и референсы.
              Дизайнер выступает в роли интерьерного «психолога» и в своей
              работе использует вспомогательные изображения уже существующих
              интерьеров (референсов). Это позволяет лучше понять направление
              работы над интерьером и отбросить те идеи, от которых стоило бы
              отказаться.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Кто работает над дизайн-проектом?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              На каждый проект назначается рабочая группа из пяти человек.
              Дизайнер разрабатывает концепцию будущего интерьера и планирует
              жилое пространство, арт-директор контролирует базовые этапы,
              3D-визуализатор подготавливает фотореалистичные изображения
              будущих помещений, архитектор чертит полный комплект рабочих
              чертежей, комплектатор закупает отделочные материалы и мебель.
              Такая модель разделения обязанностей по проекту помогает выдержать
              сроки, учесть детали, не упустить нюансы и досконально продумать
              интерьер.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Мне пока не выдали ключи от квартиры. Можно ли начать
              дизайн-проект?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Не нужно ждать доступ на объект. Мы можем работать над проектом
              без точных размеров, но делать его в правильном масштабе. Вместе с
              заказчиком мы определяем будущую стилистику интерьера заранее,
              утверждаем технические решения, делаем визуализацию. Нам останется
              только указать реальные размеры после замеров квартиры и закончить
              проект. Начать разработку такого проекта можно сразу, не ожидая,
              когда застройщик допустит к замерам квартиры. К сожалению, время
              ожидания выдачи ключей не восполнить, но сэкономить время на
              разработку проекта и сделать ремонт квартиры на три месяца раньше
              — вполне реально уже сейчас.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Не нравится дизайнер, назначенный на проект. Можно ли его
              заменить?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Такое бывает на начальном этапе (несходство характеров/стиля
              общения). В таком случае мы обсуждаем ситуацию и еще раз
              проговариваем то, как студия работает, презентует и выстраивает
              процесс. Если клиент не получил того, что хотел видеть и
              настаивает на замене дизайнера — мы заменим специалиста. Реже
              случаются ситуации, когда у заказчика представления о работе
              дизайнеров интерьера отличаются от реальности, тогда мы решаем,
              что нам не по пути и прекращаем совместную работу.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container className="product-feedback">
        <h2>Отзывы</h2>
        <form onSubmit={handleSubmit} className="form-feedback">
          <input
            value={feedbackUser}
            onChange={(e) => setFeedbackUser(e.target.value)}
            type="text"
            placeholder="Введите ваше имя"
            style={{ marginBottom: 15 }}
          />
          <input
            value={feedbackValue}
            placeholder="Введите ваш отзыв"
            onChange={(e) => setFeedbackValue(e.target.value)}
            type="text"
            multiline
            maxRows={5}
            minRows={3}
            style={{ marginBottom: 15 }}
          />
          <button type="submit">Оставить отзыв</button>
        </form>
        <div>
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback">
              <h5>{item.feedbackUser}</h5>
              <p>{item.feedbackValue}</p>
              <button
                onClick={() => delFeedback(item.id)}
                style={{ marginBottom: 45 }}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      </Container>
      <div className="footer">
        <div className="footer__block">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer__block">
          <span>Портфолио</span>
          <span>О команде</span>
        </div>
        <div className="footer__block">
          <span>Блог</span>
          <span>Контакты</span>
          <span>FAQ</span>
        </div>
        <div className="footer__block">
          <span>Instagram</span>
          <span>Behance</span>
          <span>Pinterest</span>
        </div>
        <div className="footer__block">
          <span>+7 (969) 777-45-00</span>
          <span>info@aiz.studio</span>
          <span>Обратный звонок</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
