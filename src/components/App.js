import react from "react";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";
import palavras from "./palavras.js";

const words = palavras;

export default function App() {

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [word, setWord] = react.useState("");
    const [arrayWord, setArrayWord] = react.useState([]);
    const [wrongL, setWrongL] = react.useState([]);
    const [rigthL, setRigthL] = react.useState([]);
    const [allL, setAllL] = react.useState([]);
    const [rImage, setRImage] = react.useState(forca0);


    function chooseWord() {
        if (word == "") {
            const randonIndex = Math.floor(Math.random() * words.length);
            setWord(words[randonIndex]);
        }

        let arrayb = [];
        for (let i = 0; i < word.length; i++) {
            arrayb.push(word[i])
            if (i == word.length - 1) {
                setArrayWord(arrayb)
            }
        }
    }

 

    function letterClick(letter){
       if(!allL.includes(letter))
        { for(let i = 0;i < word.length;i++){
            if(letter == word[i]){
                return setRigthL([...rigthL, letter]) && setAllL([...allL, letter])
                
            }
        }
          setWrongL([...wrongL, letter])
           setAllL([...allL, letter]) 
          
            
         
        }
        chooseImport()
    }
    
   

    return (
        <>
            <div>
                <img src={rImage}></img>
                <div className="word">
                    {arrayWord.map((l) => rigthL.includes(l) ? 
                    <div className="letter">{l}</div> :
                    <div className="letter">__</div>
                )}



                </div>

                <button className="choose" data-identifier="choose-word" onClick={() => chooseWord()}>Escolher Palavra</button>
            </div>
            <div className="alphabet">
                {letters.map((l, index) =>
                    <button data-identifier='letter' key={index} onClick={() => letterClick(l)}>
                        {l}
                    </button>)}
            </div>

            <div className="try-it">
                    Já sei a palavra 
                    <input></input>
                    <button className="try">Chutar</button>
            </div>
        </>
    )






    function chooseImport(){
        if(wrongL.length ==0) {
            setRImage(forca0)
        }
        else if(wrongL.length ==1){
            setRImage(forca1)
        }
        else if(wrongL.length ==2){
            setRImage(forca2)
        }
        else if(wrongL.length ==3){
            setRImage(forca3)
        }
        else if(wrongL.length ==4){
            setRImage(forca4)
        }
        else if(wrongL.length ==5){
            setRImage(forca5)
        }
        else {
            setRImage(forca6)
        }
            
    
                
           
    }
}