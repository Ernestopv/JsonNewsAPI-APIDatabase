// Ernesto Prado villaobos CCT ID. 2015268
/// this is the introduction of the application

// when the application is running if is not login the buttons are not going to be on display
document.getElementById('hide1').style.display = "none";
document.getElementById('hide2').style.display = "none";
document.getElementById('hide3').style.display = "none";
document.getElementById('hide4').style.display = "none";
document.getElementById('newsbutton').style.display = "none";
document.getElementById('goslin').style.display = "none";
document.getElementById('eprado').style.display = "none";
document.getElementById('logoutButton').style.display = "none";






// this function is to display the buttons  including the icons in the introduction page

function start(){
    document.getElementById('hide1').style.display = "flex";
    document.getElementById('hide2').style.display = "flex";
    document.getElementById('hide3').style.display = "flex";
    document.getElementById('hide4').style.display = "flex";
    document.getElementById('newsbutton').style.display = "flex";
    document.getElementById('goslin').style.display = "flex";
    document.getElementById('eprado').style.display = "flex";
    document.getElementById('logoutButton').style.display = "flex";

}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        document.getElementById('facebook').style.display = 'none';
       // when start is called afeter the login succesfull process the buttons are going to be displayed
        start();
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '129159751078481',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.10' // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}

// setting active the icons from the bottom with this changecolor methods
function changeColor(){

    document.getElementById('hide1').classList.add('active');
}

function changeColor2(){

    document.getElementById('hide2').classList.add('active');
}
function changeColor3(){

    document.getElementById('hide3').classList.add('active');
}

// loging out function for  loging out icon  for facebook authentication



function logingOut() {
    FB.logout(function (response) {
        // Person is now logged out

        location.reload();


    });
}


    // this is going to display BBC news
// all the news have the same procedure to display

function sirvela(){
    // the information is going to be display in index-2

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;
            // jason is gotten



            // this while is to prevent overcreating of children nodes
            while(document.getElementById('news1').childElementCount === 0 ){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div"); // div is created
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");// h3 element is created
                    h1.className = "acomodo";
                    var p = document.createElement("p");// p element is created
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");// IMG is created


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");// image size is set
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");// p is created
                    var br = document.createElement("br");// an extra space is created

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    // this if is to prevent , overcreation of childrennodes for jason extract
                    if(document.getElementById('jason').childElementCount < arrayOfData.length) {

                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>'; // jason format is  taken


                        document.getElementById('jason').appendChild(divJason); // jason element is inserted in divjason created
                    }







                    document.getElementById('news1').appendChild(div);
                    document.getElementById('news1').appendChild(h1);
                    document.getElementById('news1').appendChild(p);
                    document.getElementById('news1').appendChild(br);
                    document.getElementById('news1').appendChild(imagen);
                    document.getElementById('news1').appendChild(br);
                    document.getElementById('news1').appendChild(p2);
                    document.getElementById('news1').appendChild(br); // all the elements created are appended to news1

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px'; // button creationg for jason

                    document.getElementById('news1').appendChild(boton);



                }
            }

        });


        document.getElementById('jason').style.display ="block"; // displayed right elements when click button is triggered
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('news1').style.display = 'block';
        document.getElementById('news2').style.display = 'none';
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";

    });

}

// this is going to display alyazera news

function sirvela2(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('news2').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    if(document.getElementById('jason2').childElementCount < arrayOfData.length) {
                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason2').appendChild(divJason);
                    }





                    document.getElementById('news2').appendChild(div);
                    document.getElementById('news2').appendChild(h1);
                    document.getElementById('news2').appendChild(p);
                    document.getElementById('news2').appendChild(br);
                    document.getElementById('news2').appendChild(imagen);
                    document.getElementById('news2').appendChild(br);
                    document.getElementById('news2').appendChild(p2);
                    document.getElementById('news2').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('news2').appendChild(boton);



                }
            }


        });


        document.getElementById('jason2').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";


        document.getElementById('news2').style.display = "block";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";

    });

}



// this is going to display cnn news
function sirvela3(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('news3').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    if(document.getElementById('jason3').childElementCount < arrayOfData.length) {
                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason3').appendChild(divJason);
                    }








                    document.getElementById('news3').appendChild(div);
                    document.getElementById('news3').appendChild(h1);
                    document.getElementById('news3').appendChild(p);
                    document.getElementById('news3').appendChild(br);
                    document.getElementById('news3').appendChild(imagen);
                    document.getElementById('news3').appendChild(br);
                    document.getElementById('news3').appendChild(p2);
                    document.getElementById('news3').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('news3').appendChild(boton);



                }
            }


        });
        document.getElementById('jason3').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('news3').style.display = "block";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";



    });

}



// to display Sports section starting with ESPN

function sportv1(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('sport1').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array

                    if(document.getElementById('jason4').childElementCount < arrayOfData.length) {

                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason4').appendChild(divJason);
                    }






                    document.getElementById('sport1').appendChild(div);
                    document.getElementById('sport1').appendChild(h1);
                    document.getElementById('sport1').appendChild(p);
                    document.getElementById('sport1').appendChild(br);
                    document.getElementById('sport1').appendChild(imagen);
                    document.getElementById('sport1').appendChild(br);
                    document.getElementById('sport1').appendChild(p2);
                    document.getElementById('sport1').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('sport1').appendChild(boton);



                }
            }


        });

        document.getElementById('jason4').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('sport1').style.display = "block";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";



    });

}


// this is going to load FOX SPORTS CHANNEL
function sportv2(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('sport2').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    if(document.getElementById('jason5').childElementCount < arrayOfData.length) {
                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason5').appendChild(divJason);
                    }






                    document.getElementById('sport2').appendChild(div);
                    document.getElementById('sport2').appendChild(h1);
                    document.getElementById('sport2').appendChild(p);
                    document.getElementById('sport2').appendChild(br);
                    document.getElementById('sport2').appendChild(imagen);
                    document.getElementById('sport2').appendChild(br);
                    document.getElementById('sport2').appendChild(p2);
                    document.getElementById('sport2').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('sport2').appendChild(boton);



                }
            }


        });


        document.getElementById('jason5').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('sport2').style.display = "block";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";



    });

}

// this is going to be display La marca News
function sportv3(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=marca&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('sport3').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    if(document.getElementById('jason6').childElementCount < arrayOfData.length) {
                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason6').appendChild(divJason);
                    }






                    document.getElementById('sport3').appendChild(div);
                    document.getElementById('sport3').appendChild(h1);
                    document.getElementById('sport3').appendChild(p);
                    document.getElementById('sport3').appendChild(br);
                    document.getElementById('sport3').appendChild(imagen);
                    document.getElementById('sport3').appendChild(br);
                    document.getElementById('sport3').appendChild(p2);
                    document.getElementById('sport3').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('sport3').appendChild(boton);



                }
            }


        });

        document.getElementById('jason6').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('sport3').style.display = "block";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";


    });

}

// in this section is going to be displayed Finance starting from FINANCIAL POST

function fina1(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=financial-post&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('finance1').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array


                    if(document.getElementById('jason7').childElementCount < arrayOfData.length) {
                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason7').appendChild(divJason);
                    }






                    document.getElementById('finance1').appendChild(div);
                    document.getElementById('finance1').appendChild(h1);
                    document.getElementById('finance1').appendChild(p);
                    document.getElementById('finance1').appendChild(br);
                    document.getElementById('finance1').appendChild(imagen);
                    document.getElementById('finance1').appendChild(br);
                    document.getElementById('finance1').appendChild(p2);
                    document.getElementById('finance1').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('finance1').appendChild(boton);



                }
            }


        });

        document.getElementById('jason7').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason8').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('finance1').style.display = "block";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('finance2').style.display = "none";
        document.getElementById('economy').style.display = "none";


    });

}

// this area is for FINANCIAL TIMES


function fina2(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('finance2').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array

                    if(document.getElementById('jason8').childElementCount < arrayOfData.length) {

                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason8').appendChild(divJason);
                    }






                    document.getElementById('finance2').appendChild(div);
                    document.getElementById('finance2').appendChild(h1);
                    document.getElementById('finance2').appendChild(p);
                    document.getElementById('finance2').appendChild(br);
                    document.getElementById('finance2').appendChild(imagen);
                    document.getElementById('finance2').appendChild(br);
                    document.getElementById('finance2').appendChild(p2);
                    document.getElementById('finance2').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('finance2').appendChild(boton);



                }
            }


        });

        document.getElementById('jason8').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason9').style.display ="none";

        document.getElementById('finance2').style.display = "block";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('economy').style.display = "none";


    });

}



// this is going to be displaying The ECONOMIST  IN BUSSINES SECTION

function economist(){

    myApp.onPageInit('index-2', function (page) {

        $.getJSON( 'https://newsapi.org/v2/top-headlines?sources=the-economist&apiKey=64a17d3dd220407aa5addbb4ac869a4c', function( data ) {


            var arrayOfData = data.articles;




            while(document.getElementById('economy').childElementCount === 0){
                for(var i = 0; i <= arrayOfData.length; i += 1) {
                    var div = document.createElement("div");
                    div.className = "content-block-inner";
                    var h1 = document.createElement("h3");
                    h1.className = "acomodo";
                    var p = document.createElement("p");
                    p.className = "acomodo";
                    var imagen = document.createElement("IMG");


                    imagen.setAttribute("width","300");
                    imagen.setAttribute("height","200");
                    imagen.className = "imageAcomodo";
                    var p2 = document.createElement("p");
                    var br = document.createElement("br");

                    h1.innerHTML = arrayOfData[i].title;
                    p.innerHTML = arrayOfData[i].description;
                    // if a imagen is coming null is better not to be displayed
                    if(arrayOfData[i].urlToImage === null) {
                        console.log('image no available');
                        imagen.setAttribute("style","display : none");
                    }
                    else
                    {
                        imagen.setAttribute("src", arrayOfData[i].urlToImage);
                    }

                    p2.innerHTML = arrayOfData[i].publishedAt;
                    // saving data to an array

                    if(document.getElementById('jason9').childElementCount < arrayOfData.length) {

                        var titlesJ = JSON.stringify(arrayOfData[i].title);
                        var descriptionJ = JSON.stringify(arrayOfData[i].description);
                        var urlImageJ = JSON.stringify(arrayOfData[i].urlToImage);
                        var publishedJ = JSON.stringify(arrayOfData[i].publishedAt);

                        var divJason = document.createElement('div');
                        divJason.innerHTML = '<br>' + '{ title:' + titlesJ + ',' +
                            '\ndescription:' + descriptionJ + ',\n' +
                            'urlToImage:' + urlImageJ + ',\n' +
                            'publishedAt:' + publishedJ + '}' + '<br>';


                        document.getElementById('jason9').appendChild(divJason);
                    }






                    document.getElementById('economy').appendChild(div);
                    document.getElementById('economy').appendChild(h1);
                    document.getElementById('economy').appendChild(p);
                    document.getElementById('economy').appendChild(br);
                    document.getElementById('economy').appendChild(imagen);
                    document.getElementById('economy').appendChild(br);
                    document.getElementById('economy').appendChild(p2);
                    document.getElementById('economy').appendChild(br);

                    ////////////// botton for source Json

                    var boton = document.createElement('a');
                    boton.className =" open-panel button button-fill";
                    boton.innerHTML = "JSON source";
                    boton.style.width ='120px';
                    boton.style.height ='50px';


                    document.getElementById('economy').appendChild(boton);



                }
            }


        });

        document.getElementById('jason9').style.display ="block";
        document.getElementById('jason').style.display ="none";
        document.getElementById('jason2').style.display ="none";
        document.getElementById('jason3').style.display ="none";
        document.getElementById('jason4').style.display ="none";
        document.getElementById('jason5').style.display ="none";
        document.getElementById('jason6').style.display ="none";
        document.getElementById('jason7').style.display ="none";
        document.getElementById('jason8').style.display ="none";

        document.getElementById('economy').style.display = "block";
        document.getElementById('sport3').style.display = "none";
        document.getElementById('news1').style.display = "none";
        document.getElementById('news2').style.display = "none";
        document.getElementById('news3').style.display = "none";
        document.getElementById('sport1').style.display = "none";
        document.getElementById('sport2').style.display = "none";
        document.getElementById('finance1').style.display = "none";
        document.getElementById('finance2').style.display = "none";


    });

}



// server gosling display (kyle's server)
function serverGoslin(){
    $.get( "http://52.48.79.163/db.php", { type: "top10stories"  } )
        .done(function( data ) {

            // parse json
            var obj = jQuery.parseJSON(data);
            // print out the stories

            while (document.getElementById('goslinNews').childElementCount === 0) {
                for (var i = 1; i < 10; i += 1) {

                    var pgoslin = document.createElement('h2');
                    pgoslin.innerHTML = i+"-"+obj.news.story[i];
                    document.getElementById('goslinNews').appendChild(pgoslin);
                }
            }
        });
}

// to display authors from Kyle's server
function serverGoslin2(){


    $.get( "http://52.48.79.163/db.php", { type: "currentauthors"  } )
        .done(function( data ) {

            // parse json
            var obj = jQuery.parseJSON(data);
            // print out the stories



            while (document.getElementById('goslinAuthors').childElementCount === 0) {
                for (var i = 1; i < obj.authors.author.length; i ++) {


                    var p = document.createElement('p');
                    p.innerHTML = obj.authors.author[i];
                    document.getElementById('goslinAuthors').appendChild(p);


                }
            }


        });

}

// to display my news
function myServerE() {

    $.get( 'http://52.48.79.163/db.php?type=getmystories&id=129159751078481' )
        .done(function( data ) {

            // parse json
            var obj = data;
            // print out the stories



            while (document.getElementById('meServer').childElementCount === 0) {



                    var p = document.createElement('p');
                    p.innerHTML = obj;
                    document.getElementById('meServer').appendChild(p);

            }

        });






    }





// sending news to my Server

function sending(){

var input = document.getElementById('noticia').value;
    var uri = 'http://52.48.79.163/db.php?type=newstory&data='+input+'&id=129159751078481';
    var res = encodeURI(uri);
// encoding uri when sending to the server
    $.get( res )
        .done(function( data ) {

// show an alert that the upload was succesfull
            console.log('Title :'+input+' upload Succesfull!');
            myApp.addNotification({
                title: 'Upload Successfull',
                message: 'Title : '+ input+ ',in the server Now!'

            });

        });



    // a kind of refresh on my server display
    if (document.getElementById('meServer').childElementCount !==0){
        $('#meServer').empty();
    }

}






// when click in button disappear news and show the good one breaking news
function breakingnewV(){

    myApp.onPageInit('index-1', function (page) {
        document.getElementById('breakingnews').style.display = "block";
        document.getElementById('sportsv').style.display = "none";
        document.getElementById('financeV').style.display = "none";
        document.getElementById('bussinesV').style.display ="none";

    });
}

// when click in button disappear news and show the sports

function sportsnewsV(){
    myApp.onPageInit('index-1', function (page) {

        document.getElementById('breakingnews').style.display = "none";
        document.getElementById('sportsv').style.display = "block";
        document.getElementById('financeV').style.display = "none";
        document.getElementById('bussinesV').style.display ="none";

    });
}

// when click in button disappear news and show the finance
function financenewsV(){
    myApp.onPageInit('index-1', function (page) {

        document.getElementById('breakingnews').style.display = "none";
        document.getElementById('sportsv').style.display = "none";
        document.getElementById('financeV').style.display = "block";
        document.getElementById('bussinesV').style.display ="none";

    });
}

// when click in button disappear news and show the bussines
function bussinesnewsV(){
    myApp.onPageInit('index-1', function (page) {

        document.getElementById('breakingnews').style.display = "none";
        document.getElementById('sportsv').style.display = "none";
        document.getElementById('financeV').style.display = "none";
        document.getElementById('bussinesV').style.display ="block";

    });
}




