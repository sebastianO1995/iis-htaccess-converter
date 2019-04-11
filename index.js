let result = document.getElementById('result');
let input = document.getElementById('input');

let matchTag_re = /<match url="(.*?)".*>/
let actionTag_re = /<action .* url="(.*?)".*>/
let ruleBegin = /<rule .*>/
let ruleEnd = /<\/rule>/


function convert() {
    let lines = input.value.split('\n');
    let isRule = false;
    let rules = [];
    let matchUrl;
    let actionUrl;
    //for each line in the input - check if there is a match
    for(let i =0; i <lines.length; i++){
        
        if(isRule === false && lines[i].match(ruleBegin)){
            isRule = true;
        } else {
            
            if (isRule && lines[i].match(matchTag_re)){
                
                matchUrl = matchTag_re.exec(lines[i]);
            }
            
            if (isRule && lines[i].match(actionTag_re)){
                actionUrl = actionTag_re.exec(lines[i]);
            }
            if(isRule && lines[i].match(ruleEnd)){
                let matches = new Object();
                matches.matchUrl = matchUrl[1];
                matches.actionUrl = actionUrl[1];
                rules.push(matches);            
                isRule = false;
            }
        }
    }
    //to do create an array and push the results or create a match by <rule> </rule> and create object
    
    let resultText = document.getElementById("resultText");
    resultText.innerHTML = `Result Below - Total Count: ${rules.length}` 
    
    for(let i =0; i < rules.length ; i++) {
        //create element
        let newP = document.createElement("p");
        let htRewrite = `RewriteRule ${rules[i].matchUrl}   ${rules[i].actionUrl} [R=301,NC,L]\n`
        
        //create text
        let newContent = document.createTextNode(htRewrite);
        //add content to P element
        newP.appendChild(newContent);
        
        //ad styling
        newP.setAttribute("style", "letter-spacing: 1px");
        
        //add to Dom
        result.appendChild(newContent)
    }
    
    
}

function reset() {
    input.value = '';
    result.innerHTML = '';
    resultText.innerHTML =  'Result Below'
}