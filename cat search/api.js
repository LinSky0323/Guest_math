const apiKey="live_mwQs3GHysXO7qi4jk7jLHwVYRZwkZUCnqQJzZAjI67ZvPYVTOhfwHZlwoiWs2rHn"

export function fetchCat(limit,page,order,breedIds=[]){
    const url=new URL("https://api.thecatapi.com/v1/images/search")
    url.searchParams.append("limit",limit);
    url.searchParams.append("has_breeds",1);
    url.searchParams.append("order",order);
    url.searchParams.append("page",page);
    url.searchParams.append("api_key",apiKey);

    if(breedIds.length>0){
        url.searchParams.append("breed_ids",breedIds.join())
    }
    return fetch(url).then((e)=>e.json());
}

export function fetchOption(){
    return fetch("https://api.thecatapi.com/v1/breeds").then((e)=>e.json());
}