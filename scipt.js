const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bde018bdc1msh4def8b049a1f388p19dcd9jsncf5f35c6d2f4',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

let div=document.createElement("div")

 
 async function execute(){
     try {
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result.data);
        //  const jokes = "x";
         for (let data in result){
         let res=result.data;
         for( let i=0; i<res.length;i++){
       if("?"== res[i]){
        let p1=document.createElement("p");
        // let p2=document.createElement("p");
         p1.innerText=res
        // p2.innerText=res
        div.appendChild(p1)
       }
         }
         }

    
    document.body.appendChild(div)

} catch (error) {

	console.error(error);
}
 }

execute()