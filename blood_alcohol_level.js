/* ====== CHECK BLOOD FOR HIGH ALCOHOL LEVELS ======*/

/* Array with a list of random numbers */
var alcoholdg = [ 2 , 5 , 3.6 , 8 , 3 , 7 ];

/* For loop will iterate through the length of the array,
considering "i" as 0 when it starts to run,
which is also the position of the first element */
for ( i = 0 ; i < alcoholdg.length ; i++ ) {
  /* If the index of the array "alcoholdg" is larger than 5,
  then it prints the position where it was at */
  if( alcoholdg[i] > 5 ){
    console.log("El primer valor de alto grado alcohólico en la sangre se encuentra en la posicion " + [i]);
    break;
  }
}
