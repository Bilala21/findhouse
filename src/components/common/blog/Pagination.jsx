const Pagination = ({ vehicles_data }) => {
  const pages = []
  for (let i = 0; i < vehicles_data[0].length / 5; i++) {
    pages.push(i)
  }
  return (
    <ul className="page_navigation">
      <li className="page-item disabled">
        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
          {" "}
          <span className="flaticon-left-arrow"></span>
        </a>
      </li>
      {
        pages.map(item => {
          return (
            <li className="page-item active">
              <a className="page-link" href={`category/vehicles/page=${item}`}>
                {item+1}
              </a>
            </li>
          )
        })
      }
      <li className="page-item">
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
