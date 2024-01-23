var username = document.querySelector('.Username');
    var pass = document.querySelector(".pass");
    var login = document.querySelector("#Login");
    var logincontainer=document.querySelector("#logincontainer");
    var  usernameAndpass = [
        {
            Username: 'sanjit',
            Pass: "sanjit45",
        },
        {
            Username: 'Manjit',
            Pass: "Manjit45",
        },
        {
            Username: 'Ranjit',
            Pass: "Ranjit45",
        }
    ]
    var  result=usernameAndpass.reduce(function reducer(acc,value){
         return acc+1;
    },0);
    login.addEventListener("click", () => {
        var usernamevalue = username.value;
        var passvalue = pass.value;
        let isUserFound = false;
        var user=0;
        usernameAndpass.forEach((user) => {
            
            if (user.Username === usernamevalue) {
                isUserFound = true;
                
                if (user.Pass === passvalue) {
                    alert("Welcome to the page");
                } else {
                    alert("Wrong password");
                }

            }
        });
        if (!isUserFound) {
            alert("Username not found");
        }
        
    


    });
    let para=document.createElement("P");
       para.classList="avail";
       para.innerHTML=`Available user is : ${result}`;
         logincontainer.append(para);
  

   

   