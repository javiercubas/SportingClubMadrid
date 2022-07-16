import React from "react"
import './TablaClasificacion.css';



export default function TablaClasificacion() {
    return (
        
        <div class="main">
            <div class="main__header">
                <div class="main__header__leftLine"> </div>
                <h3 class="main__header__text">Tabla de clasificación</h3>
                <button class="main__header__button">Ver tabla completa</button>
            </div>
            <hr/>
            <div class="main__tableContainer">
                <table class="main__tableContainer__table">
                        <tr>
                            <th>POS</th><th id="th--club">CLUB</th><th>W</th><th>D</th><th>L</th><th>PTS</th>
                        </tr>
                        <br/>
                        <tr>
                            <td>1</td><td><div class="td--equipo"><img class="teamLogo" src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_160,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" alt=""/>Sporting</div></td><td>36</td><td>10</td><td>14</td><td>118</td>
                        </tr>
                        <tr id="main">
                            <td>1</td><td><div class="td--equipo"><img class="teamLogo" src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_160,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" alt=""/>Sporting</div></td><td>36</td><td>10</td><td>14</td><td>118</td>
                        </tr>
                        <tr>
                            <td>1</td><td><div class="td--equipo"><img class="teamLogo" src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_160,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" alt=""/>Sporting</div></td><td>36</td><td>10</td><td>14</td><td>118</td>
                        </tr>
                        <tr>
                            <td>1</td><td><div class="td--equipo"><img class="teamLogo" src="https://static.wixstatic.com/media/d78913_5b532f30dd3f4c8999ea776d97203a61~mv2.png/v1/fill/w_160,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__125_-removebg-preview.png" alt=""/>Sporting</div></td><td>36</td><td>10</td><td>14</td><td>118</td>
                        </tr>
                </table>
            </div>
        </div>
    )
}
