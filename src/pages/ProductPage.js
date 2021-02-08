import React from "react";
import { Table, Image } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancleToken = React.useRef(null);

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course",
        {
          cancelToken: cancleToken.current.token,
        }
      );
      setProduct(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancleToken.current = axios.CancelToken.source();
    getData();

    return () => {
      console.log("Exit Page");
      cancleToken.current.cancel();
    };
  }, []);

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

  return (
    <div className="container">
      <div className="row mt-100">
        <div className="col-12">
          <h2>Product</h2>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>Course</th>
                <th>Details</th>
                <th>At</th>
                <th>View</th>
                <th>Picture</th>
                <th>Lunk</th>
              </tr>
            </thead>
            <tbody>
              {product.map((param, index) => {
                return (
                  <tr key={param.id}>
                    <td>{param.id}</td>
                    <td>{param.title}</td>
                    <td>{param.detail}</td>
                    <td>
                      {format(new Date(param.date), "dd MMMM yyyy", {
                        locale: th,
                      })}
                    </td>
                    <td>{param.view}</td>
                    <td>
                      <Image src={param.picture} thumbnail width={100} />
                    </td>
                    <td>
                      <Link to={`/detail/${param.id}/title/${param.title}`}>
                        <BsFillEyeFill />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
