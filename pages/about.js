import React from "react";
import Layout from "../components/Layout";

function About(){

    return(
        <Layout title="About | Podcasts">
        <div className="maincontent">
            <img src="../static/carlos.jpg" alt="Carlos" className="profile"/>

            <h3>
            Carlos Hernández 
            </h3>

            <div className="container">
                <p>
                  Estudiante de Ingeniería que encontró una pasión en el camino... El Desarrollo Web.
                </p>
                <p>
                  ¡Un saludo! Mi nombre es Carlos, tengo 21 años y vivo en Venezuela. Actualmente estudio 
                  Ingeniería de Telecomunicaciones y me dedico al Desarrollo Web, principalmente con React.
                  En mi Github podrás visualizar mis proyectos principales y si deseas ponerte en contacto 
                  conmigo, abajo te dejo mis redes sociales principales.
                </p>

                <p>
                  Esta aplicación consume la API de Audioboom, cuya documentación podrás leer 
                  <a target="_blank" href="https://github.com/audioboom/api/blob/master/sections/reference_index.md"><b> aquí</b></a>. 
                  Fue hecha con Next.js, framework reconocido de React.js que, entre otras cosas, 
                  permite el Server Side Rendering. 
                  <a href="https://github.com/Carls13/podcasts" target="_blank"><b> Aquí</b></a> puedes ver  el repositorio del proyecto en Github. 
                  Y sin más que decir, disfruta de los podcasts.
                </p>

            </div>

            <h4>Mis redes sociales</h4>
                <div className="row">
                    <a href="https://www.instagram.com/carlosshb98/" target="_blank">
                      <img src="./../../static/instagram.png" />
                    </a>
                    <label>Instagram</label>
                </div>
                <div className="row">
                   <a href="https://www.twitter.com/carlosshb98" target="_blank">
                      <img src="./../../static/twitter.png"/>
                   </a> 
                    <label>Twitter</label>
                </div>
                <div className="row">
                    <a href="https://www.linkedin.com/in/carlos-samuel-hern%C3%A1ndez-blanco-b35075152/" target="_blank">
                      <img src="./../../static/linkedin.png" />
                    </a>
                    <label>LinkedIn</label>
                </div>
                <div className="row">
                    <a href="https://github.com/Carls13" target="_blank">
                      <img src="./../../static/github.png" />
                    </a>
                    <label>Github</label>
                </div>

            <style jsx>
            {`

              a{
                text-decoration: none;
                color: black;
              }
              .maincontent{
                margin: 10px 0;
              }
              .container{
                margin: 0 20%;
                text-align: center;
              }

            .profile{
                height: 250px;
                width: 250px;
                border-radius: 350px;
                display: block;
                margin:auto;
                }
            .profile:hover { 
                opacity: .89;
            }
        
            h3 {
                font-size: 40px;
                margin-top: 30px;
                text-align: center;
                }

            .column-2 {
              width: 50%;
            }

            .column-2 h1{
              text-align: center;
              font-size:20px;
            }

            .column-2 .row{
              justify-content: center;
              text-align: center;
            }

            h4{
                text-align: center;
            }

            .row{
              margin-top: 17px;
              display: flex;
              justify-content: center;
            }

            .row img{
              width: 36px;
              height: 36px;
            }

            .row label{
              margin-left:5px; 
              margin-bottom: 10px;
            }
                        `}
            </style>

         </div>
    </Layout>
    );

}



export default About;


