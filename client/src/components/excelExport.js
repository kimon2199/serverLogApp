import '../App.css';
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { SiMicrosoftexcel } from "react-icons/si";


const ExcelExport = ({ csvData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const csvDataClone = [...csvData].reverse();
    for(let i = 0; i < csvDataClone.length; i++){
        delete csvDataClone[i].id;
    }
    const ws = XLSX.utils.json_to_sheet(csvDataClone);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });

    saveAs(data, fileName + fileExtension);
  };

  return (
    <span type="button" className="badge glass0 flex" style={{float:'right', height:'23px'}} onClick={()=> exportToCSV(csvData, fileName)}>
        Export <SiMicrosoftexcel/>
    </span>
  );
};

export default ExcelExport;