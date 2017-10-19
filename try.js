function showNum1()
{
document.getElementById('0').style.display = "none";
document.getElementById('1').style.display = "block";
}

function showNum2()
{
document.getElementById('1').style.display = "none";
document.getElementById('2').style.display = "block";
}

function showNum3()
{
document.getElementById('2').style.display = "none";
document.getElementById('3').style.display = "block";
}

function showNum4()
{
document.getElementById('3').style.display = "none";
document.getElementById('4').style.display = "block";
}

function showNum5()
{
document.getElementById('4').style.display = "none";
document.getElementById('5').style.display = "block";
}

function showNum6()
{
document.getElementById('5').style.display = "none";
document.getElementById('6').style.display = "block";
}

function showNum7()
{
document.getElementById('6').style.display = "none";
document.getElementById('7').style.display = "block";
}

function showNum8()
{
document.getElementById('7').style.display = "none";
document.getElementById('8').style.display = "block";
}

function showNum9()
{
document.getElementById('8').style.display = "none";
document.getElementById('9').style.display = "block";
}

function showNum10()
{
document.getElementById('9').style.display = "none";
document.getElementById('10').style.display = "block";
}


function isnotEmpty(x,y,z)
{

 if (!(x) || !(y) || !(z))
 {
 	alert('My friend, i think we have empty lines here!')
 	return false;
 }else
 {
 	return true;
 }
}


function isNumber(x, y, z)
{
	x = Number(x);
	y = Number(y);
	z = Number(z);
	if(isNaN(x) || isNaN(y) || isNaN(z))
	{
		alert("Dude, something is wrong with your input!We need only numbers!Try again=)");
		return false;
	} else
	{
		return true;
	}

}



function maxOfTwo()
{
	var x,y;
	x= document.getElementById('firstNumb').value;
	y= document.getElementById('secNumb').value;
	if(isnotEmpty(x,y,1) != false)
	{
		if (isNumber(x,y,1) != false)
		{
			if(Number(x)>Number(y)){
			alert('Max is ' + x);
		} else if(Number(y)>Number(x)){
			alert('Max is ' + y);
		} else{
			alert('Numbers are equal');
		}
		showNum2();
		}

	
	}
}
	


function maxOfThree(){
	var x,y,z,max;
	x= document.getElementById('max1').value;
	y= document.getElementById('max2').value;
	z= document.getElementById('max3').value;
	if(isnotEmpty(x,y,z) != false)
	{
		if (isNumber(x,y,z) != false)
		{	
			if (Number(x)>Number(y))
			{
				max = Number(x);
				if(max>Number(z))
				{
					alert('Max is ' + max);
				}else
				{
				alert('Max is ' + z);
				}
			}else
				{
				max = Number(y);
				if(max>Number(z))
				{
				alert('Max is ' + max);
				}else
				{
				alert('Max is ' + z);
				}
				}
			
			}
	}showNum3();

}

function isVowel(x)
{
	var vowels = ['a','e','u','i','o','о','а','у','ы','э','я','и','ю','і','ї','є'];
	for (var i = 0; i<vowels.length; i++)
	{
		if (vowels[i] == x)
		{
			return true;
		}
	}
}

function validateForm3()
{
	var x = document.getElementById('char').value;
	if (isVowel(x) == true)
		{
			alert('Yeap, it is a vowel');
			showNum4();
		}else
	{
		alert('No, it is not a vowel');
		return false;
	}	

}



function validateForm4()
{
	var x = document.getElementById('word').value;
	var vowels = ['a','e','u','i','o'];
	var result = '';
	for( var i = 0; i<x.length;i++)
	{
		for (var q = 0; q < vowels.length;q++) 
		{
		var isVowel = false;		
		   if (x[i] == vowels[q])
		   {
			isVowel = true; 
			break; 
		   } 
		}
		if (isVowel == true || x[i] == " ")
		{
			result+=x[i];	
		} else
		{
		   	result = result + x[i] + "o" + x[i];
		}
		
    }
alert(result);
showNum5();
}


function calc()
{
	var x = Number(document.getElementById('multpart1').value);
	var y = Number(document.getElementById('multpart2').value);
	var result = x*y;

	document.getElementById('multResult').innerHTML = result;

}

function calc2()
{
	var x = Number(document.getElementById('sumpart1').value);
	var y = Number(document.getElementById('sumpart2').value);
	var result = x+y;

	document.getElementById('sumResult').innerHTML = result;

}

function reverseString(){
	var str = document.getElementById('revstring').value;
	var arr = [];
	for (var i = 0; i<str.length; i++)
	{
		arr.unshift(str[i]);
	}
	var result = arr.join('');
 	document.getElementById('revResult').innerHTML = result;
}




function translGreet()
{
	var transVocab = 
	{
		"merry": "god",
		"christmas": "jul",
		"and": "och",
		"happy": "gott",
		"new": "nytt",
		"year": "ar"
	};
	var x = document.getElementById('translation').value;
	if (isnotEmpty(x,1,1) !=false)
	{
		var arr = x.split(' ');
		var arrNew = [];
		for (var i = 0; i<arr.length; i++)
		{
			for(var key in transVocab)
			{				
				if (arr[i] == key)
				{
					arrNew.push(transVocab[key]);
					continue;
				}

			}
			if (arrNew == "")
			{
				alert('Sorry, we do not know this language');
				return false;
			}
		}

	var result = arrNew.join(' ');
	document.getElementById('translateResult').innerHTML = result;
	}
}	




function findLongestWord()
{

	var str = document.getElementById('seqword').value;
	var max;
	var arr = str.split(',');
	max=arr[0];

	for (var i = 0; i<arr.length; i++)
	{

		if(arr[i].length > max.length)
		{
			max = arr[i];
		}
	}	
	
	
document.getElementById('result').innerHTML = max.length;
}


function filterLongWords()
{
	var str = document.getElementById('seqwords').value;
	var arr = str.split(',');
	var i = Number(document.getElementById('length').value);
	var arrNew = [];
	for (var n = 0; n<arr.length; n++)
	{
		if (arr[n].length > i)
		{
			arrNew.push(arr[n]);
		}
	}

document.getElementById('resultSeq').innerHTML += arrNew;
document.getElementById('hiddenBtn').style.display = "block";



}

function charFreq()
{
	var str = document.getElementById('sentence').value;
	var obj = new Object();

	for (var i = 0; i<str.length; i++)
	{		
		obj[i] = str[i];
		var result = document.createElement('p');
		result.innerHTML = str[i];
		resultObj.appendChild(result);

	}
	
document.getElementById('submit').style.display = "none";
document.getElementById('sentence').style.display = "none";
document.getElementById('test').style.display = "none";
document.getElementById('btn').style.display = "block";

	console.log(obj);
}


function finalStep()
{
document.getElementById('num').style.display = "none";
document.getElementById('last').style.display = "none";
document.getElementById('btn').style.display = "none";
document.getElementById('resultObj').style.display = "none";
document.getElementById('hidden').style.display = "block";
}

function backToFirst()
{
document.getElementById('10').style.display = "none";
document.getElementById('1').style.display = "block";
}