import React from 'react'

class Pagination extends React.Component {

    render() {
        const {updatePage, currentPage} = this.props;
        const handelClickPage = (value) => {
            console.log(value)
            return (
                () => {
                    updatePage(value < 1 ? 1 : value)
                })
        }
        return (
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item ">
                        <a  className="page-link"
                            onClick={handelClickPage(currentPage - 1)}
                        >Previous
                        </a>
                    </li>
                    <li className="page-item " aria-current="page">
                        <a className="page-link" href="#">{currentPage-1}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">{currentPage}<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="page-item " aria-current="page">
                        <a className="page-link" href="#">{currentPage+1}</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link"
                           onClick={handelClickPage(currentPage + 1)}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Pagination;