import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, PageHeader } from "antd";
import styled from "styled-components";

const Tabled = styled.div`
  font-size: 1rem;
  margin: auto;
  width: 70%;
  justify-content: center;
  padding: 2% 0 6% 0;
`;

export default function BooksPotential() {
  const [potential, setPotential] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBooksPotential = () => {
    setLoading(true);
    axios
      .get("https://polar-everglades-82309.herokuapp.com/potential/")
      .then((res) => {
        setLoading(false);
        setPotential(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooksPotential();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      filterMode: "tree",
      // render: (text) => <a>{text}</a>,
      filterSearch: true,
      onFilter: (value, record) => record.title.includes(value),
      width: "40%",
    },
    {
      title: "Author",
      dataIndex: "author",
      filters: [
        {
          text: "CS Lewis",
          value: "CS Lewis",
        },
      ],
      onFilter: (value, record) => record.author.startsWith(value),
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Topic",
      dataIndex: "topic",
      onFilter: (value, record) => record.topic.startsWith(value),
      filterSearch: true,
      width: "20%",
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
        <PageHeader title="Books that I want to read" className="font-link" />
        <Table
          dataSource={potential}
          columns={columns}
          loading={loading}
          className="font-link"
        />
      </Tabled>
    </>
  );
}
