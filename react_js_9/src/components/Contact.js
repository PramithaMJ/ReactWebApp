import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Header from "../components/Header";

const Contact = () => {
  const [mainData, setMainData] = useState([]);
  const [themeChange, setThemeChange] = useState(false);
  useEffect(() => {
    const dataFetching = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await res.json();

      if (data) {
        console.log(data);
        setMainData(data);
      }
    };
    dataFetching();
  }, []);
  return (
    <ContactContainer>
      <Header />
      This is ths Contact page
      <button onClick={() => setThemeChange((pre) => (pre ? false : true))}>
        Change Theme
      </button>
      <ContactBlock>
        {mainData?.map(({ id, title }) => (
          <Link to={`/contact/${id}`} key={id}>
            <ContactBlockUnit changeTheme={themeChange}>
              <img
                src="data:image/jpeg;base64,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"
                alt="contact block unit"
              />
              <h3>{title}</h3>
            </ContactBlockUnit>
          </Link>
        ))}{" "}
      </ContactBlock>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.main`
  width: 100vm;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactBlock = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnit = styled.div`
  padding: 20px;
  border-radius: 7px;
  border: 2px solid
    ${({ changeTheme }) => {
      if (changeTheme) {
        return "black";
      } else {
        return "#f7b0b0";
      }
    }};
  background-color: ${(props) => (props.changeTheme ? "black" : "#f7b0b0")};
  transition: all 400ms ease-in;

  &:hover {
    background-color: inherit;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
  h3 {
    font-size: 14px;
  }
`;
