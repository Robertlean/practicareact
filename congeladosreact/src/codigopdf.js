//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'

function App() {
  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')

  const onChangeLinea1 = function(value1){
    setLinea1(value1.target.value)
  }
  const onChangeLinea2 = value2 =>
  setLinea2(value2.target.value)

  const onChangeImagen = eventoImg =>
  setImagen(eventoImg.target.value)

  const onClickExportar = evento => {    
    html2canvas(document.querySelector("#meme")).then(canvas =>{
      var imgWidth = 200;
      var pageHeight = 190;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png', 10)
      var options = {
        size: '70px',
        background: '#fff',
        pagesplit: true
      }
      let pdf = new jsPDF('p', 'mm', 'a4', 1); // A4 size page of PDF
    var position = 0;
    var width = pdf.internal.pageSize.width;
    var height = pdf.internal.pageSize.height;
    pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight, options)
    pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight, options);
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(contentDataURL, 'PNG', 2, position, imgWidth, imgHeight, options);
      heightLeft -= pageHeight;
    }
    pdf.save('informe.pdf'); // Generated PDF
    });
  }
      /* var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.pdf';
      link.href = img;
      link.click() */
    
  

  return (
    <div className="App">
      <select onChange = {onChangeImagen}>
        <option value="homerin">Primer meme</option>
        <option value="homerocomolosupo">Segundo meme</option>
        <option value="jerryllorando">Tercer meme</option>
        <option value="quemariposaes">Cuarto valor</option>
      </select> <br />

      <input onChange = {onChangeLinea1} type="text" placeholder="linea 1"  /><br />
      <input onChange = {onChangeLinea2} type="text" placeholder="linea 2"  /><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme"> 
        <span>{linea1}</span> <br />
        <span>{linea2}</span>

        <img src={"/img/"+ imagen + ".jpg"}></img>
      </div>
    </div>
  );
}

export default App;
