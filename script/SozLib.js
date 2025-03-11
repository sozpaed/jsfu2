/*
 * Klassen Bibliothek
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 16.10.2021)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * SozMath -> allgemeine mathematische Berechnungen
 * SozCalc -> Berechnungen von Grundrechenarten bei zwei Werten
 * SozArc -> zur Behandlung von Winkeln (Canvas)
 * SozLine -> zur Behandlung von Linien (Canvas)
 * SozText -> zur Behandlung von Texten (Canvas)
 * SozTriangle -> zur Behandlung von Dreiecken (Canvas)
 * SozNoten -> zur Behandlung von Noten
 * SozCube -> zur Behandlung von Würfeln
 * 
 * Lizenz
 * ++++++++++++++++++++++++++++
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (16.10.2021)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

//Strict Mode iat aktiviert
'use strict';

/*
 * SozMath
 * -----------------------------
 * Allgemeine mathematischen Berechnungen
*/
class SozMath {
  /*
    * Attribute
    * ****************************
    * - #myMathNumber : int -> der Wert zum Bearbeiten
  */
  #myMathNumber;
  
  /*
    * Konstruktor
    * ****************************
    * - #myMathNumber : int -> der Wert zum Bearbeiten
  */
  constructor(myMathNumber) {
    this.#myMathNumber = myMathNumber ? myMathNumber : this.#myMathNumber;
  }

  /*
    * Methoden
    * ****************************
    * getMathNumber
    * getRandomOfMathNumber
    * getRadFromGrad
    * getOppositeGrad
  */

  /*
    * getMathNumber -> (get)
    * ////////////////////////////
    * Gibt myMathNumber zurück
  */
  get getMathNumber() {
    return this.#myMathNumber;
  }
  
  /*
    * getRandomOfMathNumber -> (get)
    * ////////////////////////////
    * Gibt eine zufällige Zahl wieder. myMathNumber gibt die Grenze des
    * Bereiches der zufälligen Zahlen an.
  */
  get getRandomOfMathNumber() {
    let zZahl = Math.floor(Math.random() * this.#myMathNumber) + 1;
    return zZahl;
  }
  
  /*
    * getRadFromGrad -> (get)
    * ////////////////////////////
    * Gibt gibt den Radiant von myMathNumber wieder
  */
  get getRadFromGrad() {
    let radFromGrad = this.#myMathNumber * (Math.PI/180);
    return radFromGrad;
  }
  
  /*
    * getOppositeGrad -> (get)
    * ////////////////////////////
    * Gibt gibt die Differenz von 360 - myMathnumber wieder
    * Ist bedeutsam für das zeichnen von Winkeln mit arc
  */
  get getOppositeGrad() {
    let oppositeGrad = 360 - this.#myMathNumber;
    return oppositeGrad;
  }
}

/*
 * SozCalc
 * -----------------------------
 * Berechnungen von Grundrechenarten
*/
class SozCalc {
  /*
    * Attribute
    * ****************************
    * - #calcNumberOne : int -> erster Wert für die Berechnungen
    * - #calcNumberTwo : int -> zweiter Wert für die Berechnungen
  */
  #calcNumberOne;
  #calcNumberTwo;
  
  /*
    * Konstruktor
    * ****************************
    * - #calcNumberOne : int -> erster Wert für die Berechnungen
    * - #calcNumberTwo : int -> zweiter Wert für die Berechnungen
  */
  constructor(calcNumberOne,calcNumberTwo) {
    this.#calcNumberOne = calcNumberOne ? calcNumberOne : this.#calcNumberOne;
    this.#calcNumberTwo = calcNumberTwo ? calcNumberTwo : this.#calcNumberTwo;
  }

  /*
    * Methoden
    * ****************************
    * getCalcNumberOne
    * getCalcNumberTwo
    * getRadFromGrad
    * getOppositeGrad
  */

  /*
    * getCalcNumberOne -> (get)
    * ////////////////////////////
    * Gibt calcNumberOne zurück
  */
  get getCalcNumberOne() {
    return this.#calcNumberOne;
  }
  
  /*
    * getCalcNumberTwo -> (get)
    * ////////////////////////////
    * Gibt calcNumberTwo zurück
  */
  get getCalcNumberTwo() {
    return this.#calcNumberTwo;
  }

  /*
    * getResultOfMultiplication -> (get)
    * ////////////////////////////
    * Gibt den Wert einer Multiplikation zurück
  */
  get getResultOfMultiplication() {
    let getResult = this.#calcNumberOne * this.#calcNumberTwo;
    return getResult;
  }
}

/*
 * SozArc
 * -----------------------------
 * Zum "Behandeln" von Winkeln (Canvas)
*/
class SozArc {

  /*
    * Attribute
    * ****************************
    * - #winkelName : String -> Name (Art) des Winkels
    * - #winkelPicture : String -> HTML-Code / Pfad zum Bild eines Winkels
    * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
    * - #xValue : int -> X-Wert des Scheitelpunktes
    * - #yValue : int -> Y-Wert des Scheitelpunktes
    * - #winkelRadius : int -> Länge des Radius für Winkelkreis
    * - #styleOfStroke : String -> Farbangabe zu strokeStyle
    * - #winkelLineWidth : int -> Schriftgrößenangabe für lineWidth
    * - #winkelLineCap : String -> Stilangabe für lineCap
    * - #winkelLineJoin : String -> Stilangabe für lineJoin
    * - #winkelEnd : int -> Wert für zweiten Winkel
 */

  #winkelName;
  #winkelPicture;
  #getContext;
  #xValue;
  #yValue;
  #winkelRadius;
  #styleOfStroke;
  #winkelLineWidth;
  #winkelLineCap;
  #winkelLineJoin;
  #winkelEnd;
  
  /*
    * Konstruktor
    * ****************************
    * - #winkelName : String -> Name (Art) des Winkels
    * - #winkelPicture : String -> HTML-Code / Pfad zum Bild eines Winkels
    * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId) -> document.getElementById(getContext).getContext('2d')
    * - #xValue : int -> X-Wert des Scheitelpunktes
    * - #yValue : int -> Y-Wert des Scheitelpunktes
    * - #winkelRadius : int -> Länge des Radius für Winkelkreis
    * - #styleOfStroke : String -> Farbangabe zu strokeStyle
    * - #winkelLineWidth : int -> Schriftgrößenangabe für lineWidth
    * - #winkelLineCap : String -> Stilangabe für lineCap
    * - #winkelLineJoin : String -> Stilangabe für lineJoin
    * - #winkelEnd : int -> Wert für zweiten Winkel
  */
  constructor(winkelName,winkelPicture,getContext, xValue, yValue,winkelRadius, styleOfStroke, winkelLineWidth, winkelLineCap, winkelLineJoin,winkelEnd) {
    this.#winkelName = winkelName ? winkelName : this.#winkelName;
    this.#winkelPicture = winkelPicture ? winkelPicture : this.#winkelPicture;
    this.#getContext = document.getElementById(getContext).getContext('2d') ? document.getElementById(getContext).getContext('2d') : this.#getContext;
    this.#xValue = xValue ? xValue : this.#xValue;
    this.#yValue = yValue ? yValue : this.#yValue;
    this.#winkelRadius = winkelRadius ? winkelRadius : this.#winkelRadius;
    this.#styleOfStroke = styleOfStroke ? styleOfStroke : this.#styleOfStroke;
    this.#winkelLineWidth = winkelLineWidth ? winkelLineWidth : this.#winkelLineWidth;
    this.#winkelLineCap = winkelLineCap ? winkelLineCap : this.#winkelLineCap;
    this.#winkelLineJoin = winkelLineJoin ? winkelLineJoin : this.#winkelLineJoin;
    this.#winkelEnd = winkelEnd ? winkelEnd : this.#winkelEnd;
  }
  
  /*
    * Methoden
    * ****************************
    * getWinkelName
    * getWinkelPicture
    * getWinkelContext
    * getWinkelXValue
    * getWinkelYValue
    * getWinkelRadius
    * getWinkelStyleOfStroke
    * drawArc -> Aktion
  */

  /*
    * getWinkelName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von winkelName wieder
  */
  get getWinkelName() {
      return this.#winkelName;
  }

  /*
    * getWinkelPicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von winkelPicture wieder
  */
  get getWinkelPicture() {
      return this.#winkelPicture;
  }

  /*
    * getWinkelContext -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von getContext wieder
  */
  get getWinkelContext() {
      return this.#getContext;
  }

  /*
    * getWinkelXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von xValue wieder
  */
  get getWinkelXValue() {
      return this.#xValue;
  }

  /*
    * getWinkelYValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von yValue wieder
  */
  get getWinkelYValue() {
      return this.#yValue;
  }

  /*
    * getWinkelRadius -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von winkelRadius wieder
  */
  get getWinkelRadius() {
      return this.#winkelRadius;
  }

  /*
    * getWinkelStyleOfStroke -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von styleOfStroke wieder
  */
  get getWinkelStyleOfStroke() {
      return this.#styleOfStroke;
  }

  /*
    * drawArc -> Aktion
    * ////////////////////////////
    * Zeichnet den Winkel
  */
  drawArc() {
    this.#getContext.beginPath();
    this.#getContext.arc(this.#xValue, this.#yValue, this.#winkelRadius, 0, this.#winkelEnd,true);
    this.#getContext.strokeStyle = this.#styleOfStroke;
    this.#getContext.lineCap = this.#winkelLineCap;
    this.#getContext.lineJoin = this.#winkelLineJoin;
    this.#getContext.lineWidth = this.#winkelLineWidth;
    this.#getContext.stroke();
  }

}

/*
 * SozLine
 * -----------------------------
 * Zum "Behandeln" von Linien (Canvas)
*/
class SozLine {

  /*
     * Attribute
     * ****************************
     * - #LinieName : String -> Name (Art) der Linie
     * - #LiniePicture : String -> HTML-Code / Pfad zum Bild einer Linie
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #mXValue : int -> x-Wert für moveTo
     * - #mYValue : int -> y-Wert für moveTo
     * - #lXValue : int -> x-Wert für lineTo
     * - #lYValue : int -> y-Wert für lineTo
     * - #styleOfStroke : String -> Farbwert für strokeStyle
     * - #lWidth : int -> Wert für lineWidth
     * - #winkelLineCap : String -> Stilangabe für lineCap
     * - #winkelLineJoin : String -> Stilangabe für lineJoin
     * 
  */
  #linieName;
  #liniePicture;
  #getContext;
  #mXValue;
  #mYValue;
  #lXValue;
  #lYValue;
  #styleOfStroke;
  #lWidth;
  #lLineCap;
  #llineJoin;
  
  /*
     * Konstruktor
     * ****************************
     * - #LinieName : String -> Name (Art) der Linie
     * - #LiniePicture : String -> HTML-Code / Pfad zum Bild einer Linie
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId) -> document.getElementById(getContext).getContext('2d')
     * - #mXValue : int -> x-Wert für moveTo
     * - #mYValue : int -> y-Wert für moveTo
     * - #lXValue : int -> x-Wert für lineTo
     * - #lYValue : int -> y-Wert für lineTo
     * - #styleOfStroke : String -> Farbwert für strokeStyle
     * - #lWidth : int -> Wert für lineWidth
     * - #winkelLineCap : String -> Stilangabe für lineCap
     * - #winkelLineJoin : String -> Stilangabe für lineJoin
     * 
  */
  constructor(linieName,liniePicture,getContext,mXValue,mYValue,lXValue,lYValue,styleOfStroke,lWidth,lLineCap,llineJoin) {
    this.#linieName = linieName ? linieName : this.#linieName;
    this.#liniePicture = liniePicture ? liniePicture : this.#liniePicture;
    this.#getContext = document.getElementById(getContext).getContext('2d') ? document.getElementById(getContext).getContext('2d') : this.#getContext;
    this.#mXValue = mXValue ? mXValue : this.#mXValue;
    this.#mYValue = mYValue ? mYValue : this.#mYValue;
    this.#lXValue = lXValue ? lXValue : this.#lXValue;
    this.#lYValue = lYValue ? lYValue : this.#lYValue;
    this.#styleOfStroke = styleOfStroke ? styleOfStroke : this.#styleOfStroke;
    this.#lWidth = lWidth ? lWidth : this.#lWidth;
    this.#lLineCap = lLineCap ? lLineCap : this.#lLineCap;
    this.#llineJoin = llineJoin ? llineJoin : this.#llineJoin;
  }
  
  /*
    * Methoden
    * ****************************
    * getLinieName
    * getLiniePicture
    * getLinieContext
    * getLiniemXValue
    * getLiniemYValue
    * getLinielXValue
    * getLinielYValue
    * getLinieStyleOfStroke
    * getLinielWidth
    * drawLine
  */

  /*
    * getLinieName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von linieName wieder
  */
  get getLinieName() {
      return this.#linieName;
  }

  /*
    * getLiniePicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von liniePicture wieder
  */
  get getLiniePicture() {
      return this.#liniePicture;
  }

  /*
    * getLinieContext -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von getContext wieder
  */
  get getLinieContext() {
      return this.#getContext;
  }

  /*
    * getLiniemXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mXValue wieder
  */
  get getLiniemXValue() {
      return this.#mXValue;
  }

  /*
    * getLiniemYValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mYValue wieder
  */
  get getLiniemYValue() {
      return this.#mYValue;
  }

  /*
    * getLinielXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lXValue wieder
  */
  get getLinielXValue() {
      return this.#lXValue;
  }

  /*
    * getLinielYValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lYValue wieder
  */
  get getLinielYValue() {
      return this.#lYValue;
  }

  /*
    * getLinieStyleOfStroke -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von styleOfStroke wieder
  */
  get getLinieStyleOfStroke() {
      return this.#styleOfStroke;
  }

  /*
    * getLinielWidth -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lWidth wieder
  */
  get getLinielWidth() {
      return this.#lWidth;
  }

  /*
    * drawLine -> Aktion
    * ////////////////////////////
    * Zeichnet die Linie
  */
  drawLine() {
      this.#getContext.beginPath();
      this.#getContext.moveTo(this.#mXValue,this.#mYValue);
      this.#getContext.lineTo(this.#lXValue, this.#lYValue);
      this.#getContext.lineWidth = this.#lWidth;
      this.#getContext.strokeStyle = this.#styleOfStroke;
      this.#getContext.lineCap = this.#lLineCap;
      this.#getContext.lineJoin = this.#llineJoin;
      this.#getContext.stroke();
  }

}

/*
 * SozText
 * -----------------------------
 * Zum "Behandeln" von Texten (Canvas)
*/
class SozText {

  /*
     * Attribute
     * ****************************
     * - #textName : String -> Name (Art) der Text
     * - #textPicture : String -> HTML-Code / Pfad zum Bild einer Text
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #tXValue : int -> x-Wert für fillText
     * - #tYValue : int -> y-Wert für fillText
     * - #fontStyle : string -> Angaben für font
     * - #dText : string -> Text für fillText
     * - #fontFillStyle : String -> Farbwert für fillStyle
     * 
  */
  #textName;
  #textPicture;
  #getContext;
  #tXValue;
  #tYValue;
  #fontStyle;
  #dText;
  #fontFillStyle;
  
  /*
     * Konstruktor
     * ****************************
     * - #textName : String -> Name (Art) der Text
     * - #textPicture : String -> HTML-Code / Pfad zum Bild einer Text
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId) -> document.getElementById(getContext).getContext('2d')
     * - #tXValue : int -> x-Wert für fillText
     * - #tYValue : int -> y-Wert für fillText
     * - #fontStyle : string -> Angaben für font
     * - #dText : string -> Text für fillText
     * - #fontFillStyle : String -> Farbwert für fillStyle
     * 
  */
  constructor(textName,textPicture,fontStyle,getContext,dText,tXValue,tYValue,fontFillStyle) {
    this.#textName = textName ? textName : this.#textName;
    this.#textPicture = textPicture ? textPicture : this.#textPicture;
    this.#getContext = document.getElementById(getContext).getContext('2d') ? document.getElementById(getContext).getContext('2d') : this.#getContext;
    this.#tXValue = tXValue ? tXValue : this.#tXValue;
    this.#tYValue = tYValue ? tYValue : this.#tYValue;
    this.#fontStyle = fontStyle ? fontStyle : this.#fontStyle;
    this.#dText = dText ? dText : this.#dText;
    this.#fontFillStyle = fontFillStyle ? fontFillStyle : this.#fontFillStyle;
  }
  
  /*
    * Methoden
    * ****************************
    * getTextName
    * getTextPicture
    * getTextContext
    * getTexttXValue
    * getTexttXValue
    * getTextFontStyle
    * getTextDText
    * getTextFontFillStyle
  */

  /*
    * getTextName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von textName wieder
  */
  get getTextName() {
      return this.#textName;
  }

  /*
    * getTextPicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von textPicture wieder
  */
  get getTextPicture() {
      return this.#textPicture;
  }

  /*
    * getTextContext -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von getContext wieder
  */
  get getTextContext() {
      return this.#getContext;
  }

  /*
    * getTexttXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von tXValue wieder
  */
  get getTexttXValue() {
      return this.#tXValue;
  }

  /*
    * getTexttXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von tXValue wieder
  */
  get getTexttXValue() {
      return this.#tXValue;
  }

  /*
    * getTextFontStyle -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von fontStyle wieder
  */
  get getTextFontStyle() {
      return this.#fontStyle;
  }

  /*
    * getTextDText -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von dText wieder
  */
  get getTextDText() {
      return this.#dText;
  }

  /*
    * getTextFontFillStyle -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von fontFillStyle wieder
  */
  get getTextFontFillStyle() {
      return this.#fontFillStyle;
  }

  /*
    * drawText -> Aktion
    * ////////////////////////////
    * Zeichnet den Text
  */
  drawText() {
    this.#getContext.font = this.#fontStyle;
    this.#getContext.fillStyle = this.#fontFillStyle;
    this.#getContext.fillText(this.#dText, this.#tXValue, this.#tYValue);
  }

}

/*
 * SozTriangle
 * -----------------------------
 * Zum "Behandeln" von Dreiecken (Canvas)
*/
class SozTriangle {

  /*
     * Attribute
     * ****************************
     * - #dreieckName : String -> Name (Art) des Dreiecks
     * - #dreieckPicture : String -> HTML-Code / Pfad zum Bild eines Dreiecks
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #trXValue1 : int -> x-Wert für moveTo
     * - #trXValue2 : int -> y-Wert für moveTo
     * - #lTrXValue1 : int -> x-Wert für lineTo
     * - #lTrYValue1 : int -> y-Wert für lineTo
     * - #lTrXValue2 : int -> x-Wert für lineTo
     * - #lTrYValue2 : int -> y-Wert für lineTo
     * - #trStyleOfStroke : String -> Farbwert für strokeStyle
     * - #trLineWidth : int -> Wert für lineWidth
     * - #trFillStyle : String -> Stilangabe für fillStyle
  */
  #dreieckName;
  #dreieckPicture;
  #getContext;
  #mTrXValue;
  #mTrYValue;
  #lTrXValue1;
  #lTrYValue1;
  #lTrXValue2;
  #lTrYValue2;
  #trFillStyle;
  #trLineWidth;
  #trStyleOfStroke;
  
  /*
     * Konstruktor
     * ****************************
     * - #dreieckName : String -> Name (Art) des Dreiecks
     * - #dreieckPicture : String -> HTML-Code / Pfad zum Bild eines Dreiecks
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #trXValue1 : int -> x-Wert für moveTo
     * - #trXValue2 : int -> y-Wert für moveTo
     * - #lTrXValue1 : int -> x-Wert für lineTo
     * - #lTrYValue1 : int -> y-Wert für lineTo
     * - #lTrXValue2 : int -> x-Wert für lineTo
     * - #lTrYValue2 : int -> y-Wert für lineTo
     * - #trStyleOfStroke : String -> Farbwert für strokeStyle
     * - #trLineWidth : int -> Wert für lineWidth
     * - #trFillStyle : String -> Stilangabe für fillStyle
  */
  constructor(dreieckName,dreieckPicture,getContext,mTrXValue,mTrYValue,lTrXValue1,lTrYValue1,lTrXValue2,lTrYValue2,trStyleOfStroke,trLineWidth,trFillStyle) {
    this.#dreieckName = dreieckName ? dreieckName : this.#dreieckName;
    this.#dreieckPicture = dreieckPicture ? dreieckPicture : this.#dreieckPicture;
    this.#getContext = document.getElementById(getContext).getContext('2d') ? document.getElementById(getContext).getContext('2d') : this.#getContext;
    this.#mTrXValue = mTrXValue ? mTrXValue : this.#mTrXValue;
    this.#mTrYValue = mTrYValue ? mTrYValue : this.#mTrYValue;
    this.#lTrXValue1 = lTrXValue1 ? lTrXValue1 : this.#lTrXValue1;
    this.#lTrYValue1 = lTrYValue1 ? lTrYValue1 : this.#lTrYValue1;
    this.#lTrXValue2 = lTrXValue2 ? lTrXValue2 : this.#lTrXValue2;
    this.#lTrYValue2 = lTrYValue2 ? lTrYValue2 : this.#lTrYValue2;
    this.#trStyleOfStroke = trStyleOfStroke ? trStyleOfStroke : this.#trStyleOfStroke;
    this.#trLineWidth = trLineWidth ? trLineWidth : this.#trLineWidth;
    this.#trFillStyle = trFillStyle ? trFillStyle : this.#trFillStyle;
  }
  
  /*
    * Methoden
    * ****************************
    * getDreieckName
    * getDreieckPicture
    * getDreieckContext
    * getDreieckmXValue
    * getDreieckmYValue
    * getDreiecklXValueOne
    * getDreiecklYValueOne
    * getDreiecklXValueTwo
    * getDreiecklYValueTwo
    * getDreieckStyleOfStroke
    * getDreieckTrLineWidth
    * drawTriangle
  */

  /*
    * getLinieName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von dreieckName wieder
  */
  get getDreieckName() {
      return this.#dreieckName;
  }

  /*
    * getDreieckPicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von dreieckPicture wieder
  */
  get getDreieckPicture() {
      return this.#dreieckPicture;
  }

  /*
    * getDreieckContext -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von getContext wieder
  */
  get getDreieckContext() {
      return this.#getContext;
  }

  /*
    * getDreieckmXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mTrXValue wieder
  */
  get getDreieckmXValue() {
      return this.#mTrXValue;
  }

  /*
    * getDreieckmYValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mTrYValue wieder
  */
  get getDreieckmYValue() {
      return this.#mTrYValue;
  }

  /*
    * getDreiecklXValueOne -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lTrXValue1 wieder
  */
  get getDreiecklXValueOne() {
      return this.#lTrXValue1;
  }

  /*
    * getDreiecklYValueOne -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lTrYValue1 wieder
  */
  get getDreiecklYValueOne() {
      return this.#lTrYValue1;
  }

  /*
    * getDreiecklXValueTwo -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von lTrXValue2 wieder
  */
  get getDreiecklXValueTwo() {
    return this.#lTrXValue2;
}

/*
  * getDreiecklYValueTwo -> (get)
  * ////////////////////////////
  * Gibt gibt den Wert von lTrYValue2 wieder
*/
get getDreiecklYValueTwo() {
    return this.#lTrYValue2;
}

  /*
    * getDreieckStyleOfStroke -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von trStyleOfStroke wieder
  */
  get getDreieckStyleOfStroke() {
      return this.#trStyleOfStroke;
  }

  /*
    * getDreieckTrLineWidth -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von trLineWidth wieder
  */
  get getDreieckTrLineWidth() {
      return this.#trLineWidth;
  }

  /*
    * drawTriangle -> Aktion
    * ////////////////////////////
    * Zeichnet die Dreieck
  */
  drawTriangle() {
    this.#getContext.beginPath();
    this.#getContext.strokeStyle = this.#trStyleOfStroke;
    this.#getContext.moveTo(this.#mTrXValue, this.#mTrYValue);
    this.#getContext.lineTo(this.#lTrXValue1, this.#lTrYValue1);
    this.#getContext.lineTo(this.#lTrXValue2, this.#lTrYValue2);
    this.#getContext.fillStyle = this.#trFillStyle;
    this.#getContext.lineWidth = this.#trLineWidth;
    this.#getContext.fill();
    this.#getContext.stroke();
  }
}

/*
 * SozRec
 * -----------------------------
 * Zum "Behandeln" von Vierecken (Canvas)
*/
class SozRec {

  /*
     * Attribute
     * ****************************
     * - #recName : String -> Name (Art) des Vierecks
     * - #recPicture : String -> HTML-Code / Pfad zum Bild eines Vierecks
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #mRecXValue : int -> x-Wert für Vierecks
     * - #mRecYValue : int -> y-Wert für Vierecks
     * - #trStyleOfStroke : String -> Farbwert für strokeStyle
     * - #trLineWidth : int -> Wert für lineWidth
     * - #recLineHeight : int -> Wert für lineHeight
     * - #trFillStyle : String -> Stilangabe für fillStyle
  */
  #recName;
  #recPicture;
  #getContext;
  #mRecXValue;
  #mRecYValue;
  #recFillStyle;
  #recLineWidth;
  #recLineHeight;
  #recStyleOfStroke;
  
  /*
     * Konstruktor
     * ****************************
     * - #recName : String -> Name (Art) des Vierecks
     * - #recPicture : String -> HTML-Code / Pfad zum Bild eines Vierecks
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #mRecXValue : int -> x-Wert für Vierecks
     * - #mRecYValue : int -> y-Wert für Vierecks
     * - #recStyleOfStroke : String -> Farbwert für strokeStyle
     * - #recLineWidth : int -> Wert für lineWidth
     * - #recLineHeight : int -> Wert für lineHeight
     * - #recFillStyle : String -> Stilangabe für fillStyle
  */
  constructor(recName,recPicture,getContext,mRecXValue,mRecYValue,recStyleOfStroke,recLineWidth,recLineHeight,recFillStyle) {
    this.#recName = recName ? recName : this.#recName;
    this.#recPicture = recPicture ? recPicture : this.#recPicture;
    this.#getContext = document.getElementById(getContext).getContext('2d') ? document.getElementById(getContext).getContext('2d') : this.#getContext;
    this.#mRecXValue = mRecXValue ? mRecXValue : this.#mRecXValue;
    this.#mRecYValue = mRecYValue ? mRecYValue : this.#mRecYValue;
    this.#recStyleOfStroke = recStyleOfStroke ? recStyleOfStroke : this.#recStyleOfStroke;
    this.#recLineWidth = recLineWidth ? recLineWidth : this.#recLineWidth;
    this.#recLineHeight = recLineHeight ? recLineHeight : this.#recLineHeight;
    this.#recFillStyle = recFillStyle ? recFillStyle : this.#recFillStyle;
  }
  
  /*
    * Methoden
    * ****************************
    * getRecName
    * getRecPicture
    * getRecContext
    * getRecmXValue
    * getRecmYValue
    * getRecStyleOfStroke
    * getRecLineWidth
    * getRecLineHeight
  */

  /*
    * getRecName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von recName wieder
  */
  get getRecName() {
      return this.#recName;
  }

  /*
    * getRecPicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von recPicture wieder
  */
  get getRecPicture() {
      return this.#recPicture;
  }

  /*
    * getDreieckContext -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von getContext wieder
  */
  get getRecContext() {
      return this.#getContext;
  }

  /*
    * getRecmXValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mRecXValue wieder
  */
  get getRecmXValue() {
      return this.#mRecXValue;
  }

  /*
    * getRecmYValue -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von mRecYValue wieder
  */
  get getRecmYValue() {
    return this.#mRecYValue;
  }

  /*
    * getRecStyleOfStroke -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von recStyleOfStroke wieder
  */
  get getRecStyleOfStroke() {
      return this.#recStyleOfStroke;
  }

  /*
    * getRecLineWidth -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von recLineWidth wieder
  */
  get getRecLineWidth() {
      return this.#recLineWidth;
  }

  /*
    * getRecLineHeight -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von recLineHeight wieder
  */
  get getRecLineHeight() {
    return this.#recLineHeight;
  }

  /*
    * drawRec -> Aktion
    * ////////////////////////////
    * Zeichnet die Vierecke
  */
  drawRec() {
    this.#getContext.beginPath();
    this.#getContext.strokeStyle = this.#recStyleOfStroke;
    this.#getContext.fillStyle = this.#recFillStyle;
    this.#getContext.fillRect(this.#mRecXValue, this.#mRecYValue, this.#recLineWidth, this.#recLineHeight);
    this.#getContext.stroke();
  }
}

/*
 * SozNoten
 * -----------------------------
 * Zum "Behandeln" von Noten
*/
class SozNoten {
  /*
    * Attribute
    * ****************************
    * - #notenName : String -> Name (Art) der Note
    * - #notenPicture : String -> HTML-Code / Pfad zum Bild einer Note
  */
  #notenName;
  #notenPicture;
  
  /*
    * Konstruktor
    * ****************************
    * - #notenName : String -> Name (Art) der Note
    * - #notenPicture : String -> HTML-Code / Pfad zum Bild einer Note
  */
  constructor(notenName,notenPicture) {
    this.#notenName = notenName ? notenName : this.#notenName;
    this.#notenPicture = notenPicture ? notenPicture : this.#notenPicture;
  }
  
  /*
    * getNotenName -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von notenName wieder
  */
  get getNotenName() {
      return this.#notenName;
  }

  /*
    * getNotenPicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von notenPicture wieder
  */
  get getNotenPicture() {
      return this.#notenPicture;
  }
}

/*
 * SozCube
 * -----------------------------
 * Zum "Behandeln" von Würfeln
*/
class SozCube {
  /*
     * Attribute
     * ****************************
     * - #cubeNumber : int -> Anzahl Augen auf dem Würfel
     * - #cubePicture : String -> HTML-Code / Pfad zum Bild eines Würfels
  */
  #cubeNumber;
  #cubePicture;

  /*
     * Konstruktor
     * ****************************
     * - #cubeNumber : int -> Anzahl Augen auf dem Würfel
     * - #cubePicture : String -> HTML-Code / Pfad zum Bild eines Würfels
  */
  constructor(cubeNumber,cubePicture) {
    this.#cubeNumber = cubeNumber ? cubeNumber : this.#cubeNumber;
    this.#cubePicture = cubePicture ? cubePicture : this.#cubePicture;
  }
  
  /*
    * getCubeNumber -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von cubeNumber wieder
  */
  get getCubeNumber() {
      return this.#cubeNumber;
  }

  /*
    * getCubePicture -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von cubePicture wieder
  */
  get getCubePicture() {
      return this.#cubePicture;
  }
}

/*
 * SozPoint
 * -----------------------------
 * Zum "Behandeln" von Würfeln
*/
class SozPoint {
  /*
     * Attribute
     * ****************************
     * - #dreieckName : String -> Name (Art) des Dreiecks
     * - #dreieckPicture : String -> HTML-Code / Pfad zum Bild eines Dreiecks
     * - #getContext : String -> der Kontext aus innerHTML (document.getElementbyId)
     * - #trXValue1 : int -> x-Wert für moveTo
     * - #trXValue2 : int -> y-Wert für moveTo
     * - #lTrXValue1 : int -> x-Wert für lineTo
     * - #lTrYValue1 : int -> y-Wert für lineTo
     * - #lTrXValue2 : int -> x-Wert für lineTo
     * - #lTrYValue2 : int -> y-Wert für lineTo
     * - #trStyleOfStroke : String -> Farbwert für strokeStyle
     * - #trLineWidth : int -> Wert für lineWidth
     * - #trFillStyle : String -> Stilangabe für fillStyle
  */
  #getSozPointID;
  #sozPointColor;

  /*
     * Konstruktor
     * ****************************
     * - #cubeNumber : int -> Anzahl Augen auf dem Würfel
     * - #cubePicture : String -> HTML-Code / Pfad zum Bild eines Würfels
  */
  constructor(getSozPointID,sozPointColor) {
    this.#getSozPointID = getSozPointID ? getSozPointID : this.#getSozPointID;
    this.#sozPointColor = sozPointColor ? sozPointColor : this.#sozPointColor;
  }
  
  /*
    * getCubeNumber -> (get)
    * ////////////////////////////
    * Gibt gibt den Wert von cubeNumber wieder
  */
  get getSozPointColor() {
    return this.#sozPointColor;
  }

  get getSozPointID() {
    return this.#getSozPointID;
  }

  setSozWallByRandom() {

    let i = 0;
    let steps = 10;

    while (i < steps) {
      const createZufallZahl = new SozMath(100);
        let geworfen = createZufallZahl.getRandomOfMathNumber;
        const getCellClassOfCubeOne = document.getElementById(geworfen);
        getCellClassOfCubeOne.style.background = 'green';
        i++;
    }
  }

  startSozPoint() {
    const getCellClassOfCubeOne = document.getElementById(this.#getSozPointID);
    getCellClassOfCubeOne.style.background = this.#sozPointColor;

    const returnStartSozPoint = new SozPoint(this.#getSozPointID,this.#sozPointColor);
    return returnStartSozPoint;
  }

  moveSozPoint(numberOfID,direction) {

    function setSozPoint(nOID,sPSOS) {
      const getCellClassOfCubeOne = document.getElementById(nOID);
      getCellClassOfCubeOne.style.background = sPSOS;
    }

    let setNumberOfID = parseFloat(numberOfID);
    let steps = 2;
    let i = 0;
    let blueSozPoint = 0;
    
    switch (direction) {
      case 'forward':
        //setNumberOfID = parseFloat(numberOfID);
        while (i <= steps) {
          let minNumberOfID = setNumberOfID - 1;
          let blueSozPoint = setSozPoint(setNumberOfID,this.#sozPointColor);
    
          if (minNumberOfID >= parseFloat(numberOfID)) {
           setSozPoint(minNumberOfID,'#817a92');
          }         

          setNumberOfID++;
          i++;
        }
        break;

        case 'backward':
          setNumberOfID -= 1;
          while (i < steps) {
            let minNumberOfID = setNumberOfID + 1;
            let blueSozPoint = setSozPoint(setNumberOfID,this.#sozPointColor);
      
            if (minNumberOfID <= parseFloat(numberOfID)) {
             setSozPoint(minNumberOfID,'#817a92');
            }
            
            setNumberOfID--;
            i++;
          }
          break;

        case 'up':
          setNumberOfID -= 1;
          while (i < steps) {
              setSozPoint(setNumberOfID,'#817a92');
              setNumberOfID -=10;
              let blueSozPoint = setSozPoint(setNumberOfID,this.#sozPointColor);
              
              i++;
            }
          break;

        case 'down':
          setNumberOfID -= 1;
          while (i < steps) {
            setSozPoint(setNumberOfID,'#817a92');
            setNumberOfID +=10;
            let blueSozPoint = setSozPoint(setNumberOfID,this.#sozPointColor);
            
            i++;
          }
            break;
    
      default:
        let blueSozPoint = 0;
        break;
    }

    const returnMoveSozPoint = new SozPoint(setNumberOfID,this.#sozPointColor);

    return returnMoveSozPoint;
  }
}