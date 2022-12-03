import "./data.css";
import { useNavigate } from 'react-router-dom';
let alirlines = [
 {name: 'https://www.piac.com.pk/', code: 'PK'},
 {name: 'https://www.airarabia.com/en ', code: 'G9'},
 {name: 'https://www.turkishairlines.com/', code: 'TK'},
 {name: 'https://www.gulfair.com/ ', code: 'GF'},
 {name: 'https://www.britishairways.com/travel/home/public/en_pk/', code: 'BA'},
 {name: 'https://www.flynas.com/en/', code: 'XY'},
 {name: 'https://www.qatarairways.com/en-pk/homepage.html', code: 'QR'},
 {name: 'https://www.omanair.com/pk/en', code: 'WY'},
 {name: 'https://www.flyin.com/airlines/Saudi-Arabian-Airlines.en.html', code: 'SV'},
 {name: 'https://www.flydubai.com/en/', code: 'FZ'},
 {name: 'https://www.emirates.com/pk/english/', code: 'EK'},
 {name: 'https://www.aa.com/homePage.do?locale=en_US', code: 'AA'},
 {name: ' https://www.etihad.com/en-pk/', code: 'EY'},
 {name: ' https://accesrail.com/', code: '9B'},
 {name: ' https://www.easyjet.com/en', code: 'U2'},
 {name: ' https://www.egyptair.com/en/pages/homepage.aspx', code: 'MS'},
 {name: 'https://www.flypgs.com/en' ,code: 'PC'},

 {name: ' https://www.qantas.com/us/en.html', code: 'QF'},

 {name: ' https://www.swiss.com/de/de/homepage', code: 'LX'},
 {name: ' https://www.aircanada.com/us/en/aco/home.html', code: 'AC'},

 {name: 'https://www.delta.com/apac/en ', code: 'DL'},

 {name: 'https://www.lufthansa.com/de/de/homepage ', code: 'LU'},
 {name: 'https://www.united.com/en/us ', code: 'UA'},
 {name: ' https://www.salamair.com/en/', code: 'OV'},
 {name: ' https://www.srilankan.com/en_uk/nl', code: 'UL'},
 {name: ' https://www.singaporeair.com/en_UK/sg/home?affiliate_id=11128&ranMID=43929&ranEAID=3458630&ranSiteID=qKqcOVHts48-3TZU8_52_HFXpJLG52BLgg#/book/bookflight', code: 'SQ'},
 {name: ' https://www.airpaz.com/en/airlines/TR-Scoot-TigerAir?a=15437025593&b=129822084385&c=565721478170&d=c&m=e&u=kwd-508618393&l=1011078&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2FG8ar67nszewtuanw1du1xqU6jNbF3Ejxof_riKjIkZsQDOKXO12gaAoSlEALw_wcB', code: 'TR'},
 {name: ' https://flyasiana.com/C/US/EN/index', code: 'OZ'},
 {name: ' https://www.cathaypacific.com/cx/en_US.html ', code: 'CX'},
 {name: ' https://www.austrian.com/de/de/homepage', code: 'OS'},
 {name: ' https://www.jetblue.com/', code: 'B6'},







 
  ]


export function Data(props)
{
  let navigate=useNavigate()

// function Get()
// {
//   navigate("/costumerData")

// }
  function getAirportName(code){

    for (let airline of props.data.airlines){
            if(airline.code == code){
                return airline.name;
            }
           }

  }

   
    return<>
        {/* <img id='bc-img2' src='bg.jpeg'></img>
    <img id='bc-img' src='1.jpg'></img> */}

    <h2>WellCome, Choose Your Best Flight</h2>
    
    <div>
     
    <table id="table">
      {
        
      
      
        
        props.data.filters.airlines.map((value)=>
        {
          
        
          return<tr>
     
         <div id="container">
         <h6 id="h6">{ getAirportName(value.code)}</h6>
            <box id="price-box">{value.price.totalAmount}  pkr</box>

             <button onClick={()=>
            {
              navigate("/costumerData")
            }} id="book-now" >BOOKNOW</button>
         {/* <button  onClick={()=>{

          for(let item of alirlines){
            if(item.code == value.code){
              
              let link = document.createElement('a');
              link.target = '_blank';
              link.href= item.name;
              link.click();

            }
          }

          console.log(value)
         }} id="book-now">BOOKNOW</button> */}
  </div>
          </tr>
        })
      }
    </table>
   </div>
 

    </>
   
}