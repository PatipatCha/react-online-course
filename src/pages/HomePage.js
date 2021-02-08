import React from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";

const HomePage = () => {
  // const { isLoading, error, data } = useQuery("getData", () =>
  //   fetch(
  //     "https://api.codingthailand.com/api/news?page=1&per_page=3"
  //   ).then((res) => res.json())
  // );

  const query = useQuery("getData", () => {
    const controller = new AbortController()
    const signal = controller.signal

    const promise = fetch(
      "https://api.codingthailand.com/api/news?page=1&per_page=3"
    ).then((res) => res.json());

    promise.cancel = () =>controller.abort()
    return promise
  });

  const {isLoading,error,data,isFetching} = query

  if (isLoading === true) {
    return (
      <div className="text-center">
        <Spinner variant="primary" />
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
      <div>
        <main role="main">
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>
                This is a template for a simple marketing or informational
                website. It includes a large callout called a jumbotron and
                three supporting pieces of content. Use it as a starting point
                to create something more unique.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more »
                </a>
              </p>
            </div>
          </div>
          <div className="container">
            {/* Example row of columns */}
            <div className="row">
              {/* <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.{" "}
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    View details »
                  </a>
                </p>
              </div> */}
              {data.data.map((news, index) => {
                return (
                  <>
                    <div className="col-md-4" key={news.id}>
                      <h2>{news.topic}</h2>
                      <p>{news.detail}</p>
                      <p>{news.name}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <hr />
          </div>{" "}
          {/* /container */}
        </main>
        <footer className="container">
          <p>© Company 2017-2018</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
