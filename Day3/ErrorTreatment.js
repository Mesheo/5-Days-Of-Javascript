function ErrorTreatment(message){

    try { 
        if(message == "")  throw "is empty";
        if(isNaN(message)) throw "is not a number";

        if(message >= 10)   throw "is too high";
        if(message <= 5)  throw "is too low";
    }
    catch(err) {
        console.log(err);
  }
    finally {
        console.log('The process is complete \n')
  }
}

ErrorTreatment('message')
ErrorTreatment(5)
ErrorTreatment(100)
ErrorTreatment('')