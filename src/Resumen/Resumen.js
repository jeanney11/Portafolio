
import React from "react";
import './resumen.css';



function Resumen() {

  return (
    <div>
      <div className="wrapperTitle">
	        <h1 className="TitleHead">RESUMEN</h1>
          </div>
  <div id="containerResumen">
      {/* <a class="made-with" href="http://flkt-crnpio.github.io/pitaya/">made with<br/>pitaya</a> */}
      
      <div>
        
      <h1 className="Resu">
       Historial Académico<br />
        Especializacion Profesional
      </h1>
      <div className="bodyResumen">
        <div class="tabs">
          <div class="tab-2">
              <label for="tab2-1">One</label>
              <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
            <div>
              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>

              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>

              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>
            </div>

            
          </div>

          <div class="tab-2">
              <label for="tab2-2">Two</label>
              <input id="tab2-2" name="tabs-two" type="radio" />
              <div>
              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>

              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>
            </div>
          </div>
        </div>              {/* fin del primer resumen */}    
      </div>
      </div>


                    {/* Otra tarjeta de Resumen */}
      <div>
      <h1 className="Resu">
        Bootcamp y Cursos<br />
         Webinar
      </h1>
      <div className="bodyResumen">
        <div class="tabsR">
          <div class="tabR-2">
              <label for="tabR2-1">One</label>
              <input id="tabR2-1" name="tabsR-two" type="radio" checked="checked" />
              <div>
              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>

              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>
            </div>
          </div>

          <div class="tabR-2">
              <label for="tabR2-2">Two</label>
              <input id="tabR2-2" name="tabsR-two" type="radio" />
              <div>
              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>

              <h4>2000~2004</h4>
              <h3>T.S.U. QUIMICA INDUSTRIAL </h3>
              <p>I.U.T.I.R.L.A. </p>
            </div>
          </div>
        </div>              {/* fin del primer resumen */}    
      </div>
      </div>

  </div>
  </div>
        );
}

        export default Resumen;