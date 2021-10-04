import styled from "styled-components";

export const TableComponent = styled.table`
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;

  border-bottom: #999999 solid 1px;
  width: 100%;
  margin-bottom: 20px;

  th,
  td {
    border-right: #999999 solid 1px;
    font-size: 16px;
    color: #2d044e;
    padding: 10px;
    line-height: 20px;
    text-align: left;
    vertical-align: middle;
  }

  td:last-child {
    border-right: 0;
  }

  thead th {
    font-weight: normal;
    background-color: var(--dark-white);
    color: var(--white);
    font-size: 15px;
  }

  tbody > tr:nth-child(odd) > td,
  tbody > tr:nth-child(odd) > th {
    background-color: #f8f8f8;
  }

  @media (max-width: 767px) {
    display: block;
    position: relative;
    width: 100%;

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    td,
    th {
      height: 35px;
    }

    thead {
      float: left;
    }

    tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
    }

    tbody tr {
      display: inline-block;
    }
  }
`;
