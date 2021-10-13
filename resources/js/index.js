


//  async function init() {
//     //Fetches list of all cities along with their images and description
//     let mag = await fetchMag();
//     console.log(mag)
//     console.log(mag.feed.title);
//     let a=mag.feed.title;



//     document.querySelector("#headingOne > h5 > button").innerHTML=`${a}`;
//     var carousel_inner=document.querySelector("#carouselExampleControls > div");
   






//     mag.items.forEach((element,index,arr) => {
//      var classname="";
//       if(index==0)
//       {
//         classname="carousel-item active";
//       }
//       else
//       {
//         classname="carousel-item";
//       }


//       var new_row = document.createElement("div");
//       new_row.className = classname;
      

   
//   new_row.innerHTML=`<a href=${element.link} style="color:black;text-decoration:none;">
//     <img class="card-img-top" src=${element.enclosure.link}>
//   <div class="card-body">
//       <h4 class="card-title mt-2 mb-2">${element.title}</h4>
//        <p style="color:grey;">${element.author} ${element.pubDate}</p>
//        <p class="card-text mt-2">${element.description}</p>
//    </div>
     
//   </a>`;

//   carousel_inner.append(new_row);



  
     



//      });









// }



// async function fetchMag() {
//   // TODO: MODULE_CITIES
//   // 1. Fetch cities using the Backend API and return the data
//   let magazines1=`https://api.rss2json.com/v1/api.json?rss_url=${magazines[0]}`;
       
//   console.log(magazines1);

//   try {
//     const city = await fetch(magazines1);
    

//     const data = await city.json();
//     return data;
  
//   } catch (e) {
//     return null;
//   }
// }

// exports={ init, fetchMag };











// new

async function init() {
  //Fetches list of all cities along with their images and description
  let mag= await fetchMag();
  // console.log(mag[2])
  // console.log(mag.feed.title);
mag.forEach((mag,index,arr)=>{
                              console.log(mag)
                              let a=mag.feed.title;

                            if(index==0)
                            { 
                              document.querySelector("#headingOne > h5 > button").innerHTML=`${a}`;
                               var carousel_inner=document.querySelector(".carouselExampleControls_One > div");

                            }
                            else if(index==1)
                            {
                              document.querySelector("#headingTwo > h5 > button").innerHTML=`${a}`;
                              var carousel_inner=document.querySelector(".carouselExampleControls_Two > div");
                            }
                          else{
                            document.querySelector("#headingThree > h5 > button").innerHTML=`${a}`;
                            var carousel_inner=document.querySelector(".carouselExampleControls_Three > div");
                          }


                              
                              // var carousel_inner=document.querySelector("#carouselExampleControls > div");
                            






                              mag.items.forEach((element,index,arr) => {
                              var classname="";
                                if(index==0)
                                {
                                  classname="carousel-item active";
                                }
                                else
                                {
                                  classname="carousel-item";
                                }


                                var new_row = document.createElement("div");
                                new_row.className = classname;
                                

                            
                            new_row.innerHTML=`<a href=${element.link} style="color:black;text-decoration:none;">
                              <img class="card-img-top" src=${element.enclosure.link}>
                            <div class="card-body">
                                <h4 class="card-title mt-2 mb-2">${element.title}</h4>
                                <p style="color:grey;">${element.author} ${element.pubDate}</p>
                                <p class="card-text mt-2">${element.description}</p>
                            </div>
                              
                            </a>`;

                            carousel_inner.append(new_row);




                              



                              });





                            })



}



async function fetchMag() {
// TODO: MODULE_CITIES
// 1. Fetch cities using the Backend API and return the data
let magazines1=`https://api.rss2json.com/v1/api.json?rss_url=${magazines[0]}`;
let magazines2=`https://api.rss2json.com/v1/api.json?rss_url=${magazines[1]}`;
let magazines3=`https://api.rss2json.com/v1/api.json?rss_url=${magazines[2]}`;
     
// console.log(magazines1);

try {
 let a=[ await fetch(magazines1).then(value=>value.json()),await fetch(magazines2).then(value=>value.json()),await fetch(magazines3).then(value=>value.json())]
  
return a;
 
} catch (e) {
  return null;
}
}

exports={ init, fetchMag };
