
//Client ID 3e63e9646c31484899b47bdbf031cbe8
//Client Secret 44d71dec6c8d4a4d8dc915a5740dd4d9

async function getToken(){
	const ClientID="3e63e9646c31484899b47bdbf031cbe8";
	const ClientSecret ="44d71dec6c8d4a4d8dc915a5740dd4d9";
	const result = await fetch("https://accounts.spotify.com/api/token" ,{
		method :"POST",
		headers:{
			   "Content-Type":"application/x-www-form-urlencoded",
			   'Authorization': "Basic " +btoa(ClientID + ":" + ClientSecret), 
		},
		body :"grant_type=client_credentials",

	}
	);
	const data = await result.json();
	user (data.access_token);
	_getGenres(data.access_token);
	createPlaylist(data.access_token);
}


//var token='BQDSvceNBt67DT8BeOckfpIOnnWDUH_0Si61pnKABz5aishqa5wHlfEhaC_CsEeD3wURRyl-Z7poG-9rlzXaNYfiFASgrErB9CWZxEUJAzZeuZBOP7WktZdYf25d8gB2FOqU_80n_Wo4OecBI-wcOKfKf_KTPjS8gEnj3rwinz2rCWtU24FS_w&refresh_token=AQChcy7XmX3vd7NlLPrvLU9Y9X_dkhyqdz235z2ztskjAIKJEMIz0dXoHsaR3DyWZryLTTDCUIWwyVc1s4wBFbJi9kMVChLAus0DmhzycLp-8zbDW8YnM8Q6NQGB4cvrC-I'

async function user  (token) {

	await fetch(`https://api.spotify.com/v1/users/31fymsrichhfsno4khniu2tnkvxe`, {
		method: 'GET',
	   headers: { 'Authorization' : 'Bearer ' +token  }
})
	.then(function (resp) {
	  
	   
		return resp.json();
	  
			})
			.then(function (jsonString) {
					  document.getElementById("username").innerHTML=jsonString.display_name;
	   // document.getElementById("user-image").setAttribute("src",jsonString.images[0].url)
		 console.log(jsonString)
		//  console.log(jsonString.playlists.items[0])
		 })
}

user(); 




async function _getGenres  (token)  {

	await fetch(`https://api.spotify.com/v1/browse/categories`, {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + token}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			   
		 console.log(jsonString)
		 console.log(jsonString.categories.items[0].icons[0])



		
		 })
}

_getGenres();




async function createPlaylist  (token) {

	await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
		method: 'GET',
		headers: { 'Authorization' : 'Bearer ' + token}
})
	.then(function (resp) {
       
        
		return resp.json();
	   
			 })
			 .then(function (jsonString) {
	   
			  
         console.log(jsonString)
         

         var divbg= document.createElement("div");
			 divbg.setAttribute("class","container bg ");
			 document.getElementById("row1").appendChild(divbg);

			 var rowCard=document.createElement("div");
			 rowCard.setAttribute("class","row");
			 divbg.appendChild(rowCard);


		 
		for(let i=0; i<=20; i++){
               
		
			 var mainCard= document.createElement("div");
			 mainCard.setAttribute("class","col-3 haha ");
			  
		

			 var mainCard2= document.createElement("div");
			 mainCard2.setAttribute("class","col ss");
			//  mainCard2.addEventListener("click",goto)
            //  mainCard2.setAttribute("src",jsonString.categories.items[i].icons[0].url);
            
            var button= document.createElement("button");
            button.setAttribute("class","button");
            button.innerHTML="Add"
            button.addEventListener("click",add);
            mainCard2.appendChild(button)
			 

			 var mainCard3= document.createElement("img");
			 mainCard3.setAttribute("class","col my-1 thumb");
			 mainCard3.setAttribute("id","thumbnail");
			 mainCard3.setAttribute("src",jsonString.playlists.items[i].images[0].url);
			 mainCard3.addEventListener("click",function(){
				location = `${jsonString.playlists.items[i].external_urls.spotify}`});


                console.log(`https://api.spotify.com/v1/browse/categories/pop/playlists`);
			 
			 
			 var mainCard6= document.createElement("div");
			 mainCard6.setAttribute("class","col font");
			 mainCard6.innerHTML=jsonString.playlists.items[i].description
			 
			 
			
			
			
			mainCard2.appendChild(mainCard3);
			mainCard.appendChild(mainCard2); 
			mainCard2.appendChild(mainCard6);

			

			rowCard.appendChild(mainCard);
			 
function add(){
    // var added= document.createElement("div");
    // added.innerHTML=mainCard6.innerHTML=jsonString.playlists.items[i].description;
    
    var m =localStorage.setItem("added",mainCard6.innerHTML=jsonString.playlists.items[i].description);
   
    var retrievedData = localStorage.getItem("added");
     
    console.log(retrievedData)
    addplay.push(retrievedData )
    console.log(addplay)
    localStorage.setItem("add2",addplay)

}
var addplay=[];
// module.exports.addplay;
    // localStorage.setItem(add2,addplay)

			}
		
		 })
}

createPlaylist();



    
    
    
    
