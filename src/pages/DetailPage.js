import React from "react";
import { useParams, useHistory } from "react-router-dom";

import { Spinner, Card, CardDeck, Button } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { BsFillEyeFill } from "react-icons/bs";
import { Link, History } from "react-router-dom";

const DetailPage = () => {
  const { id, title } = useParams();
  const history = useHistory();

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancleToken = React.useRef(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id,
        {
          cancelToken: cancleToken.current.token,
        }
      );
      setDetail(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancleToken.current = axios.CancelToken.source();
    getData(id);

    return () => {
      console.log("Exit Page");
      cancleToken.current.cancel();
    };
  }, [id]);

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
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Button
              variant="secondary"
              onClick={() => {
                history.goBack();
              }}
            >
              Back
            </Button><hr/>
          </div>
        </div>
        <div className="row">
          <CardDeck>
            {detail.length > 0 ? (
              detail.map((d, index) => {
                return (
                  <div class="col-4" key={d.ch_id}>
                    <Card className="mb-4">
                      <Card.Body>
                        <Card.Title>{d.ch_title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            ) : (
              <div className="text-center">No Data</div>
            )}
          </CardDeck>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
