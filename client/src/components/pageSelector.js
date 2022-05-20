
function PageSelector(props) {

    const range = size => [...Array(size).keys()].map(i=>i+1);

    const ceiling = num => Math.ceil(num);

    return (
        <div className="flex" style={{justifyContent: 'center', columnGap: '10px'}}>
            {range(ceiling(props.numberOfRows / props.itemsPerPage)).map((item,index)=>{
                return (
                    <div style={{display: 'inline-block'}} key={'page'+index}>
                        <span className="badge glass0 flex mx-1" type="button" onClick={() => props.setPageNumber(item)}>{item}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default PageSelector;