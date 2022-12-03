import './booking.css'
import React, { useRef, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export function Booking(props) {

  const [isLoading, setLoading]=useState(false);
  let [location, setLocation] = useState({
    data1:'',
    data2:''
  });
  
  
  let navigate=useNavigate()
  useEffect(()=>
  {
    

    $('#search-box1, #search-box2').keyup(function(e) {

      let targetBox = e.target;




      $.ajax({
        type: "GET",
        url: "https://static.billigfluege.de/flight/autocomplete/search/6c6178913ffe7b1042aa1bdca794079e/jsonp/jsonp/language/ENGLISH/term/"+$(this).val(),
        // data: 'keyword=' + $(this).val(),
        beforeSend: function() {
          $("#search-box").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
        },
        success: function(data) {
          $("#suggesstion-box"+this.getAttribute('idh')).show();
          $("#suggesstion-box"+this.getAttribute('idh')).html(data);
          $("#search-box").css("background", "#FFF");
          // navigate("/Data");
        },
        error:(e)=>{
          let data =  JSON.parse(e.responseText.slice(6, -1))
          let  ol = document.createElement('ol');
         data.map((city)=>
          { 

          let  li = document.createElement('li');
            li.innerHTML = city.value;
            li.onclick = function(){


              $('.some').css('color','red');


              targetBox.value = city.value;
          $("#suggesstion-box"+targetBox.getAttribute('idh')).hide();
          setLocation({
            ...location,
           ["data"+targetBox.getAttribute('idh')] :city.value.match(/(\(\w+\))/)[0].replace("(","").replace(")","")
          })

            }

            ol.appendChild(li)
            // ol.innerHTML +=`<li>${city.value}</li>`; 
          
          })
         

          $("#suggesstion-box"+targetBox.getAttribute('idh')).html(ol);


        
        }
      });
    });

  })
  const DepatrureRef = useRef();
  const DestinationRef = useRef()
  const dateRef = useRef();

  async function handleSubmit(e) {

    e.preventDefault()
    setLoading(true);
    let url = `https://api.flightapi.io/onewaytrip/62d9c86467f0d15741c99c12/${location.data1}/${location.data2}/${dateRef.current.value}/1/0/0/Economy/PKR`
    // let url=`"https://api.flightapi.io/roundtrip/62d2ac312a5a9685f5c2c0d1/${location.data1}/${location.data2}/${dateRef.current.value}/1/0/1/Economy/PK"`
    
    try{

      let resp = await fetch(url)
      let respJson = await resp.json();
      console.log(respJson)
      props.setData(respJson)
      
      navigate("/Data");
      
    }catch(e){
      alert("please check your internet connection")
    }
      setLoading(false);
    



  }


  // $(document).ready(function() {
    
  // });
  //To select country name
  function selectCountry(val) {
    $("#search-box").val(val);
    $("#suggesstion-box").hide();
  }

  return (
    <div id='main'>

 {isLoading && <img id="loadingimage" src="losding.gif" />}
    <div id='main-container'>
    
      <img src='./cover.jpg'></img>
    <div id='search-form' class="frmSearch ">
     
      <form onSubmit={handleSubmit}>
        <div classnam="frmSearch">
          <h3>Search Your Flight</h3>
          <input autocomplete="off" type="text" id="search-box1" idh="1" placeholder="Depatrure" ref={DepatrureRef} />
          <div id="suggesstion-box1" idh="1"></div>
        </div>
        <div class="frmSearch">
          <input  autocomplete="off"  type="text" id="search-box2" idh="2" placeholder="Destination" ref={DestinationRef} />
          <div id="suggesstion-box2" idh="2"></div>
        </div>
        <div className="input_group">
          {/* <label>Date</label> */}
          <input id='date' type="date" ref={dateRef} />
        </div>

        <button>Search</button>
      </form>
    </div>
    </div>
    </div>
  )
}