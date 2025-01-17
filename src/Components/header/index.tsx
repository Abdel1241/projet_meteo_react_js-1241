import React from 'react'

export default function Header() {


    return (


        <header id="header">
         
          <section id='header_top'>
            <div className="container">

              <div className="row" style={{display:'grid', gridTemplateColumns:"20% 60% 20%"}}>

                <div ></div>

                <div id="header_top_left" >
                  <img src='../Rep_Public_logo.png' alt="Logo de la République Française" height={'120px'} width={'120px'}/>
                  <img src='../meteo_france_logo_2.png' alt="Logo de Météo France" height={'80px'} width={'90px'} style={{scale:'0.85'}} />

                  <div id="header_top_middle">
                    <div id="barre_search" >
                      <form className='recherche'>
                        <input placeholder='Rechercher une ville, un pays ...' className="input_research" size={40} />
                        <img src='../loupe.png' alt='Icone de recherche' className='icon_research'/>
                        <button type='submit' title='lancer la recherche' aria-label='lancer la recherche'><i className="fa fa-search"></i></button>

                      </form>
                    </div>
                  </div>

                <div id="header_top_right">
                  <div  className="div_icon_reseaux" style={{ display:"grid", gridTemplateColumns:'repeat(3,25px)', gap:'20px'}}>
                   <img src='../facebook(1).png' id='facebook' alt='Icone de facebook' className="icon_reseaux" />
                   <img src='../twitter(1).png' id='twitter' alt='Icone de twitter' className="icon_reseaux" />
                   <img src='../linkedin-logo.png' id='linkedin' alt='Icone de linkedin' className="icon_reseaux" />
                  </div>

                  <img src='../bell.png' id='bell' alt='Icone de notification' />
                </div>

              </div>
                

            
            </div>
          </div>
        </section>



        {/* <div className='stickyHeader' style={{position:isSticky ?'fixed':'absolute' }}> */}
            <div id="header_middle" style={{display:'grid', gridTemplateColumns:"20% 60% 20%" }}>
                <div></div>


                {/* Les onglets ne doivent pas être en fraction , ils ne sont pas responsive ( uniquement avec le @media)  */}
                <div id='header_middle_middle' style={{ display:'grid' , gridTemplateColumns:'1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.2fr 0.5fr '}}>

                  <a href='/' id='prevision' className='onglet' >
                    <img className='icon'  alt="Icone des prévisions" src='../meteo.png' />
                    <text className="libelle" >PREVISIONS</text>
                  </a>

                  <a href='/meteo-marine' id='meteo_marine' className='onglet' >
                    <img className='icon' alt='Icone de la météo marine' src='../vagues.png' />
                    <text className="libelle" >METEO MARINE</text>
                  </a>

                  <a href='/meteo-montagne' id='meteo_montagne'className='onglet' >
                    <img className='icon' alt='Icone de la météo des montagnes'  src='../montagnes-enneigees.png' />
                    <text className="libelle" >METEO MONTAGNE</text>
                  </a>

                  <a href='/climat' id='climat' className='onglet' >
                    <img className='icon' alt='Icone du climat' src='../globe.png' />
                    <text className="libelle" >CLIMAT</text>
                    <img className='icon_down' src='../down.png' />
                  </a>

                  <a href='/actualites-et-dossiers' id='actus_dossiers' className='onglet' >
                    <img className='icon' alt="Icone des actualités" src='../article.png' />
                    <text className="libelle" >ACTUS & DOSSIERS</text>
                    <img className='icon_down' src='../down.png' />
                  </a>

                  <a href='https://services.meteofrance.com/' id='services' className='onglet' >
                    <img className='icon' alt='Icone de nos services' src='../la-personne.png' />
                    <text className="libelle" >NOS SERVICES</text>
                  </a>

                  <a  className='onglet' >
                    <img id='burger_menu'src='../menu.png' alt='Icone du Menu'/>
                  </a>

                </div>

                <div ></div>
            </div>

          

            <section id='header_bottom'>
              <div className="container">
                <div className="row">
                  <div id="barre-favoris">
                        <div id="add-favorite" style={{display:'grid', gridTemplateColumns: "20% 60% 20%"}}>
                          <div></div>
                        </div>
                  </div>
                </div>
              </div>
              </section>
          {/* </div>  */}
        </header>

        
 
    )
  }