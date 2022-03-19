import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, PageHeader } from "antd";
import styled from "styled-components";

const Tabled = styled.div`
  margin: auto;
  font-size: 1rem;
  width: 70%;
  justify-content: center;
  padding: 4% 0 0 0;
`;

export default function BooksRead() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const getBooksRead = () => {
    setLoading(true);
    axios
      .get("https://polar-everglades-82309.herokuapp.com/books/")
      .then((res) => {
        setLoading(false);
        setBooks(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooksRead();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      //render: (text) => <a>{text}</a>,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.title.includes(value),
      width: "30%",
    },
    {
      title: "Author",
      dataIndex: "author",
      filters: [
        {
          text: "Carl Jung",
          value: "Carl Jung",
        },
        {
          text: "Homer",
          value: "Homer",
        },
      ],
      onFilter: (value, record) => record.author.startsWith(value),
      filterSearch: true,
      width: "25%",
    },
    {
      title: "Year Read",
      dataIndex: "date",
      filters: [
        {
          text: "2020",
          value: "2020",
        },
        {
          text: "2021",
          value: "2021",
        },
        {
          text: "2022",
          value: "2022",
        },
      ],
      onFilter: (value, record) => record.date.startsWith(value),
      filterSearch: true,
      width: "20%",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      onFilter: (value, record) => record.topic.startsWith(value),
      filterSearch: true,
      width: "25%",
      filters: [
        {
          text: "Psychology",
          value: "Psychology",
        },
        {
          text: "History",
          value: "History",
        },
        {
          text: "Religion",
          value: "Religion",
        },
        {
          text: "Classics",
          value: "Classics",
        },
      ],
    },
    {
      title: "Rating",
      dataIndex: "rating",
      sorter: (a, b) => b.rating - a.rating,
    },
  ];

  return (
    <>
      <Tabled>
        <PageHeader title="Books that I have read" className="font-link" />
        <Table
          dataSource={books}
          columns={columns}
          loading={loading}
          className="font-link"
        />
      </Tabled>
    </>
  );
}
