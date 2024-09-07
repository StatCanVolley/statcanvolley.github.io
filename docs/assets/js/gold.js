<!--
	var oLastBtn=0;
	function RaiseButton(){
		window.event.cancelBubble=true;
		oBtn = window.event.srcElement;
		var bChosen = false;
		if(oLastBtn && oLastBtn != oBtn){
			HideButton();
		}
		if(oBtn.buttonType){
			oBtn.className = oBtn.buttonType + "Up";
			oLastBtn=oBtn;
			}
		else {
		oLastBtn = 0;
		}
	}
	function DepressButton(){
		window.event.cancelBubble=true;
		oBtn = window.event.srcElement;
		if(oBtn.buttonType){
			oBtn.className = oBtn.buttonType + "Down"; 
			if (oBtn.className == "LeftNavChosenDown") {
			oBtn.className = "LeftNavDown";
			}
		}
	}
	function HideButton(){
		if ((oLastBtn.buttonType == "LeftNavChosen") || (oLastBtn.buttonType == "LeftNavSubChosen")) {
			oLastBtn.className = oLastBtn.buttonType;
		}
		else {
		oLastBtn.className = oLastBtn.buttonType + "Off";
		}
	}

function MM_popupMsg(msg) { //v1.0
  alert(msg);
}

function SelTheme(theme){
      document.forms[0].theme.value=theme
	  document.forms[0].submit()

}

function topWindow(){
window.open("submit_link.asp", "w3adIAAAIIII", "width=650,height=320");
}

function GuidedTour(){
window.open("gt_welcome.htm", "w3adIAAAIIII", "width=775,height=475");
}
function back(){
backwindow = history.back()
}

function openwin(){
mywin=self.location.href="welcome.htm"
}


/* -----------------------------------------------------------------------------
					Replace
--------------------------------------------------------------------------------

 	The function replace takes as input three strings: str1, str2, and str3. It first determines if str2 is a substring of str1.  If it is then the first occurrence of str2 is replaced with str3.  For example, calling
		replace('button_on.gif', 'on', 'off');
would return 'button_off.gif'.

----------------------------------------------------------------------------- */

function replace (str1, str2, str3) {
//Replace the first occurrence of str2 in str1 with str3.

	//Find the index of str2 in str1.
	var start = str1.indexOf(str2);
	
	//If there is an occurrence of str2 in str1 then replace it.
	if (start != -1) {
		var end = start + str2.length;
		str1 = str1.substring(0,start) + str3 + str1.substring(end, 			str1.length); }
	return str1;
}



/* -----------------------------------------------------------------------------
					changeLanguage
--------------------------------------------------------------------------------

	The function changeLanguage is called by the 'Français/English' button to change the contents of the 'local content' frame to the same document in the other official language. It takes one parameter, lang, which is a string telling the function which language the alert messages should be in (english or french). 

	At the root of the web site there are two directories, english and 
french, containing all of the web pages.  For each page in one directory,
there is a corresponding page in the other directory containing the
translated document.  This structure is used to switch languages
simply by switching the name of the first directory in the URL.

----------------------------------------------------------------------------- */

function changeLanguage (lang) {

// If the 'Français/English' button should be disabled then the variable
// lang_button will have been set to 'off' and this function does nothing.  
// If the button is to behave as usual then lang_button be set to 'on'.

// First we need to check that the lang_button is on and that the target
// document is within the proper frame structure. 

    // Get the URL of the current document in the local content frame.
    var tempSTR = top.location + ""; 

    // If the current document is an MS Office document or a document from 
    // another web site then the URL of the document can not be accessed and
    // tempSTR will be null.  
    if (tempSTR != null) {	

	// Search for the strings '/english/' and '/french/' in the URL.
	var index_eng = tempSTR.indexOf("/english/");
	var index_fr = tempSTR.indexOf("/french/");

	// If '/french/' was not found or both were found but '/english/' came
	// first (accounting for the possibility that someone could have 
	// another directory called 'french' or 'english') then we are
	// switching from English to French.
	if (index_fr == -1 || (index_eng != -1 && index_eng < index.fr)) {	
	
		// Replace '/english/' with '/french/' in the URL. 
		tempSTR = replace(tempSTR, "/english/", "/french/");
	}

	// Otherwise we are switching from French to English.
	else { tempSTR = replace(tempSTR, "/french/", "/english/"); 
	}

	// Change the URL of the local content frame.
	top.location = tempSTR;
    }

    // If tempSTR was equal to null then we need to alert the user that the
    // button doesn't work in this case.
    else { 
	if (lang == "english") alert("The translation of Word documents, PowerPoint documents and documents residing on other web sites may not be obtained using this button.");

	else alert("La traduction des documents Word, des documents Power Point, et des documents qui résident sur les autres sites Web ne peuvent être affichés avec ce bouton.");
    }	

}







//-->