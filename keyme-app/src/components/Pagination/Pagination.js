import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';

const initialPage=1;
const itemsPerPage=9;

class Pagination extends React.Component {

    static propTypes={
        items: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state={
            paginate: {}
        };
    }

    componentDidMount() {
        this.setPage(initialPage);
    }

    setPage(currentPage) {
        let numOfItems=this.props.items;
        let pageCapacity=this.props.pageCapacity || itemsPerPage;
        let numOfPages=Math.ceil(numOfItems.length/pageCapacity);

        if(currentPage<initialPage && currentPage>numOfPages) return;

        let startIndex=(currentPage-1)*pageCapacity;
        let endIndex=startIndex+pageCapacity-1;

        let currentPageItems=numOfItems.slice(startIndex, endIndex+1);

        this.props.handleChange(currentPageItems);

        this.setState({paginate: {
            currentPage,
            numOfPages
        }});
    }

    render() {
        const currentPage=this.state.paginate.currentPage;
        const numOfPages=this.state.paginate.numOfPages;
        return (
            <div className='pagination'>
                <button onClick={()=>this.setPage(currentPage-1)} disabled={currentPage==initialPage}>&lt;</button>
                <span>{currentPage} of {numOfPages}</span>
                <button onClick={()=>this.setPage(currentPage+1)} disabled={currentPage==numOfPages}>&gt;</button>
            </div>
        );
    }
}

export default Pagination;