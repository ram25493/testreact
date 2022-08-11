import React, { useEffect, useState } from "react";
import { Table } from 'antd';
import 'antd/dist/antd.css';


export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://www.anapioficeandfire.com/api/books");
      res.json().then((res) => setBooks(res));
    }
    fetchData();
  }, []);
  const columns = [
    {
      title: 'Url',
      dataIndex: 'url',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
    },
    {
      title: 'Media Type',
      dataIndex: 'mediaType',
    },
    {
      title: 'Released Date',
      dataIndex: 'released',
    },
  ];
  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{color: 'red', margin: '30px'}}>Fetch Data From API</h1>
      {/* <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Name</th>
            <th>ISBN</th>
            <th>Authors</th>
            <th>Country</th>
            <th>Publisher</th>
            <th>Media Type</th>
            <th>Released Date</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.url}</td>
                <td>{item.name}</td>
                <td>{item.isbn}</td>
                <td>{item.authors}</td>
                <td>{item.country}</td>
                <td>{item.publisher}</td>
                <td>{item.mediaType}</td>
                <td>{item.released}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}

    <Table columns={columns} dataSource={books} pagination={{ pageSize: 5}} />

    </div>
  );
}
