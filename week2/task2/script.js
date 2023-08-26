let birthDateinput = document.getElementById('dob')
let output1 = document.getElementById('output')
let calculate = document.getElementById('calculate')


calculate.onclick= function(){
    let birthDate=birthDateinput.value
    let age= calculateAge(birthDate)
    let output=output1
    output.textContent=`age is ${age[0]} years ${age[1]} months and ${age[2]} days`
    // output.textContent=`age is ${age.value1} years ${age.value2} months and ${age.value3} days`
}


function calculateAge(birthDate){
    let today = new Date();
    let birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    let day = today.getDay()-birth.getDay();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return[age,monthDiff,day]
    // return {
    //     value1:age,
    //     value2:monthDiff,
    //     value3:day
    //     // age,monthDiff,day
    // };
}
    