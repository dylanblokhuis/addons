import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  background: ${(props) =>
  props.color ? props.color : props.theme.backgroundDark};
  color: ${(props) => props.theme.color};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.backgroundDark};
  transition: 50ms;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.primary};
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const Table = styled.table`
  font-size: 14px;

  th, td {
    padding: 10px 15px;
    background: ${(props) => props.theme.backgroundDark};
  }

  th:first-child {
    border-top-left-radius: 5px;
  }

  th:last-child {
    border-top-right-radius: 5px;
  }

  td:first-child {
    border-bottom-left-radius: 5px;
  }

  td:last-child {
    border-bottom-right-radius: 5px;
  }


  td {
    padding: 10px 15px;
    background: ${(props) => props.theme.backgroundDark};
  }
`;
