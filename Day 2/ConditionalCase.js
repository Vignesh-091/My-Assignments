function LaunchBrowser (browserName){

    if (browserName.toLowerCase()==="chrome" ){
        console.log("Launching chrome browser");
    }else {
        console.log("Please use chrome browser ");
    }


}

function TestRun (testType){

    switch(testType.toLowerCase()){
        case "sanity":
        console.log("Running sanity test case ");
        break;
        case "regression":
        console.log("Running regression test case");
        break;
        
        default :
        console.log("No test case to Run ");
        

    }

    
}
LaunchBrowser("chrome");
TestRun("sanity");