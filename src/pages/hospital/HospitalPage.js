import React from "react";
import { Spinner, Card, CardDeck, Button, Table, Image } from "react-bootstrap";
import axios from "axios";
import  Pagination  from "react-js-pagination";






const pageSize = 15


const HospitalPage = () => {
  const [hospital, setHospital] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

    //Page
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  const getData = async (page) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`,
        {
          cancelToken: cancelToken.current.token,
        }
      );
      setHospital(resp.data.data);
      setTotal(resp.data.meta.pagination.total);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(page);

    return () => {
      console.log("Exit Page");
      cancelToken.current.cancel();
    };
  }, [page]);

  if (loading === true) {
    return (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p>Server Error</p>
        <br />
        {error.response.data.message}
      </div>
    );
  }

  const handlePageChange = (pageNumber) =>{
    setPage(pageNumber)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-100">Hospital</div>
          <div className="col-12">
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Code</th>
                  <th>Ttile</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {hospital.map((param, index) => {
                  return (
                    <tr key={param.id}>
                      <td>{param.id}</td>
                      <td>{param.code}</td>
                      <td>{param.h_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <br />
            <Pagination
              activePage={page}
              itemsCountPerPage={pageSize}
              totalItemsCount={total}
              pageRangeDisplayed={15}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              prevPageText="ก่อนหน้า"
              nextPageText="ต่อไป"
              firstPageText="หน้าแรก"
              lastPageText="หน้าสุดท้าย"
            />
          </div>
        </div>
      </div>
    </>
  );
};













export default HospitalPage;
