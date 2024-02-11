console.log("🟢 connect success")

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let age = document.getElementById("age").value
    let act = document.getElementById("act").value
    let gender = document.getElementById("gender").value
    
    // console.log(weight)
    // console.log(height)
    // console.log(age)
    // console.log(act)
    // console.log(gender)

    if(gender == "man"){
        bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
        tdee = bmr * act
        console.log("bmr = ",bmr)
        console.log("tdee = ",tdee)

        Swal.fire({
            title: "แคลอรี่ที่ต้องการต่อวันของคุณคือ",
            text:   tdee,
            // icon: "info"
          });
    }else if(gender == "woman"){
        bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        tdee = bmr * act
        console.log("bmr = ",bmr)
        console.log("tdee = ",tdee)

        Swal.fire({
            title: "แคลอรี่ที่ต้องการต่อวันของคุณคือ",
            text:   tdee,
            // icon: "info"
          });
    }

    

}
