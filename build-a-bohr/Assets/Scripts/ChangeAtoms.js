﻿#pragma strict

// global vars used to tell the instantiater how many particles to create
public static var protons = 0.00;
public static var neutrons = 0.00;


function Start ()	{
	protons = 0.0;
	neutrons = 0.0;

}

function Update () {
 
}

// Convert user input to a number
function NumberOfProtons(howManyP : String) {
	try {
		protons = parseInt(howManyP);
	} catch(e) {
		Debug.Log("Empty string passed to parseInt in function NumberOfProtons()");
	}
}

function NumberOfNeutrons(howManyN : String) {
	try {
		neutrons = parseInt(howManyN);
	} catch(e) {
		Debug.Log("Empty string passed to parseInt in function NumberOfNeutrons()");
	}
}