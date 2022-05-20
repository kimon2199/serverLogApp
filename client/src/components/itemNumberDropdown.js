import '../App.css';


const ItemNumberDropdown = (props) => {

  return (
    <div class="dropdown" style={{float:'right'}}>
      <button class="glass0 badge dropdown-toggle" style={{height:'23px'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {"Items per page: " + props.itemsPerPage}
      </button>
      <ul class="dropdown-menu dropdown-menu-dark dropdown-purple" aria-labelledby="dropdownMenuButton1">
        <li class="dropdown-item" onClick={() => props.setItemsPerPage(20)}>20</li>
        <li class="dropdown-item" onClick={() => props.setItemsPerPage(50)}>50</li>
        <li class="dropdown-item" onClick={() => props.setItemsPerPage(100)}>100</li>
      </ul>
    </div>
  );
};

export default ItemNumberDropdown;