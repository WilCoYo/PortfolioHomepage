


  const aboutmeButton = () => {
    if(document.getElementById("about-me").style.visibility === "hidden"){
        document.getElementById("about-me").style.visibility = ""
        document.getElementById("about-me").style.width = "70%"
        document.getElementById("portrait").style.width= "100%"
        document.getElementById("main").style.margin= "auto 0"

        document.getElementById("about-me-toggle").style.position= "relative"

        

    } else if(document.getElementById("about-me").style.visibility === "" || 
              document.getElementById("about-me").style.position === "relative" ) {

        document.getElementById("about-me").style.visibility = "hidden";
        document.getElementById("about-me").style.width = "0"
        document.getElementById("portrait").style.width= "30%"
        document.getElementById("main").style.margin= "0"

        document.getElementById("about-me-toggle").style.top = "0";
        document.getElementById("about-me-toggle").style.right = "0";
        document.getElementById("about-me-toggle").style.position= "fixed"
        
    }
    
  }



  const certificationsButton = () => {
    if(document.getElementById("certifications").style.visibility === "hidden"){
        document.getElementById("certifications").style.visibility = ""
        document.getElementById("certifications").style.width = "70%"
        document.getElementById("portrait").style.width= "100%"
        document.getElementById("main").style.margin= "auto 0" ;


    } else if(document.getElementById("certifications").style.visibility === "") {
        document.getElementById("certifications").style.visibility = "hidden";
        document.getElementById("certifications").style.width = "0"
        document.getElementById("portrait").style.width= "30%"
        document.getElementById("main").style.margin= "0"
    } 
  }