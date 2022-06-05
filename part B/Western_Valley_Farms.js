window.onload=current_date_function;
function current_date_function()
{
	
	var current_date = new Date()
	var formatte = current_date.getDate() + "/" + (current_date.getMonth() + 1) + "/" + current_date.getFullYear()


	document.getElementById("current_Date").innerHTML = formatte;
}

function calculateVeg(Vegetable_Hamper) {
var vegOrder ;
 		vegOrder= parseFloat(Vegetable_Hamper);
		return parseFloat(vegOrder * 1.5);

}

function printingResult()
{
	//declare all varibls
	var name;
	var pick_up_or_delivery;
	var StreetAdress;
	var postalCode;
	var Phone;
	var orderveg=parseFloat(0);
	var ordFru =parseFloat(0);
	var ordChick =parseFloat(0);
	var ordPork =parseFloat(0);
	var massage;
	var totalvalue=parseFloat(0);
	
	var final_result="Thanks for yur order ";
	name = document.getElementById("cilentname").value;
	StreetAdress = document.getElementById("Streetname").value;
var del = function ()
{

if(document.getElementById('pickup').checked){

	return "pick up";
}
else {
	return "Delivery";
}
} ;
//var delever =del();



final_result += name;
final_result += "<br> your information: <br> ";
final_result += StreetAdress ;
final_result += "<br>";
final_result += del();
final_result += "<br>";

massage= "You ordered<br>";
		if(document.querySelector('input[name=Vegetable_Hamper]:checked'))
		{
		
		massage+= Vegetable_Hamper.value +" Kilo Vegetable Hampers <br>" ;
		orderveg= calculateVeg(Vegetable_Hamper.value);
		totalvalue +=parseFloat(orderveg);
		}


		if(document.querySelector('input[name=Fruit_Hamper]:checked'))
		{
			massage+= Fruit_Hamper.value + "Kilo Fruit Hamper<br>" ;
			ordFru=calculateFruit(Fruit_Hamper.value);
			totalvalue +=parseFloat(ordFru);
		
		}


		if(document.querySelector('input[name=Fresh_Chickens]:checked'))
		{
			massage+=  Fresh_Chickens.value +"  Fresh Chickens <br>" ;
			ordChick= calculateChicken(Fresh_Chickens.value);
			totalvalue +=parseFloat(ordChick);
		}
		
		
		
		if(document.querySelector('input[name=Pork]:checked'))
		{
			//massage += Pork.value + "  pork<br>" ;
			massage+=  Pork.value +"  pork <br>" ;
			ordPork = calculatePork(Pork.value);
			totalvalue +=parseFloat(ordPork);
			
		}
		
	final_result+=	massage + "<br> your total order" +totalvalue.toFixed(2) +"$";
document.getElementById("result").innerHTML=final_result;
}







function calculateFruit(Fruit_Hamper) {
var fruOrder ;
 fruOrder= parseFloat(Fruit_Hamper);
var fruPrice =parseFloat(0) ;
var fruKilo = 2;
 return (2 * fruKilo);

}// here
function calculateChicken(Fresh_Chickens) {
var chickOrder ;
 chickOrder= parseFloat(Fresh_Chickens);
 return (chickOrder * 7) ;
}
function calculatePork(Pork) {
var porkOrder ;
 porkOrder= parseFloat(Pork);


 return(porkOrder * 5);
 
}
