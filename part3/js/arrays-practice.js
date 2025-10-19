const movies1=["Inception","Interstellar","The Dark Knight","Arrival","Spirited Away"];console.log(movies1[1]);
const movies2=new Array(5);movies2[0]="Inception";movies2[1]="Interstellar";movies2[2]="The Dark Knight";movies2[3]="Arrival";movies2[4]="Spirited Away";console.log(movies2[0]);
const movies3=new Array(5);movies3[0]="Inception";movies3[1]="Interstellar";movies3[2]="The Dark Knight";movies3[3]="Arrival";movies3[4]="Spirited Away";movies3.splice(2,0,"Parasite");console.log(movies3.length);
let movies4=["Inception","Interstellar","The Dark Knight","Arrival","Spirited Away"];delete movies4[0];console.log(movies4);
const movies5=["Inception","Interstellar","The Dark Knight","Arrival","Spirited Away","Whiplash","Coco"];for(let i=0;i<movies5.length;i++){console.log(movies5[i])}
for(const idx in movies5){console.log(movies5[idx])}
const sorted7=[...movies5].sort();for(const i in sorted7){console.log(sorted7[i])}
const leastFavMovies=["Movie 43","Dragonball Evolution","Cats (2019)"];console.log("Movies I like:\n");for(const m of movies5)console.log(m);console.log("\nMovies I regret watching:\n");for(const m of leastFavMovies)console.log(m);
let movies=movies5.concat(leastFavMovies);console.log(movies.sort().reverse());
const lastItem=movies.at(-1);console.log(lastItem);
