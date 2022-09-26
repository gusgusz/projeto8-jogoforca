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
    const [arrayWord, setArrayWord] = react.useState([]) ;
    const [allL, setAllL] = react.useState([]);
    const [wrongL, setWrongL] = react.useState([]);
    const [rImage, setRImage] = react.useState(forca0);
    const [resultsL, setResultsL] = react.useState("");
    const [tryit, setTryit] = react.useState("");

   



    function chooseWord() {
        if (word == "") {
            const randonIndex = Math.floor(Math.random() * words.length);
            const pal = words[randonIndex]
            setWord(pal.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""));
            renderWord(pal.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""))
        }
        else {
            setAllL([])
            setWrongL([])
            setRImage(forca0)
            setResultsL("")
            setTryit("")
            const randonIndex = Math.floor(Math.random() * words.length);
            const pal = words[randonIndex]
            setWord(pal.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""));
            renderWord(pal.toLowerCase().normalize("NFD").replace(/[^a-zA-Z\s]/g, ""))
        }
        
    }

    console.log("palavra",word)
    function renderWord(w) {
        let arrayb = [];
        for (let i = 0; i < w.length; i++) {
            arrayb.push(w[i])
            if (i == w.length - 1) {
                setArrayWord(arrayb)
            }
        }
    }

    function letterClick(le) {
        const wrArr = wrongL.length + 1;
        const all = [...allL, le]

  
        
        if(!allL.includes(le) && resultsL == "") {
           setAllL(all)
            
            for(let i = 0;i < word.length;i++){
                if(word[i] == le){
                    console.log("acertei")
                    console.log("vitoria", victory(all))
                    return true
                    
                }
              
            }
           
            setWrongL([le, ...wrongL])
            console.log("entrei no errado", wrongL)
            chooseImport(wrArr)
            losted(wrArr)
            return false
            
        }
        
          
 }
        
    
    function finalTry(p) {
     if(resultsL == ""){
       if(p == word){
        setResultsL("win")
       }
       else{
        setResultsL("lost")
       }}
    }
        
       
        
    
    // console.log(allL)
    // console.log("letra certa", rigthL)
    // console.log("letra errada", wrongL)
    


    return (
        <>
            <div>
                <img data-identifier="game-image" src={rImage}></img>
                <div className="word" data-identifier="word">
                    {arrayWord.map((l,index) => allL.includes(l) || (resultsL == "win" ||resultsL == "lost") ?
                        <div key={index} className={`letter ${resultsL}`}>{l}</div> :
                        <div key={index} className="letter">__</div>
                    )}



                </div>

                <button className="choose" data-identifier="choose-word" onClick={() => chooseWord()}>Escolher Palavra</button>
            </div>
            <div className="alphabet">
                {letters.map((l, index) =>
                    <button  className={(word == "" || allL.includes(l) || resultsL == !"" ) ? "" : "blue"}
                        data-identifier='letter'
                        key={index}
                        onClick={() => letterClick(l)}>
                        {l}
                    </button>)}
            </div>

            <div className="try-it">
                Já sei a palavra
                <input 
                placeholder="tentar" 
                data-identifier="type-guess"
                value={tryit}
                onChange={event => setTryit(event.target.value)} />
                <button data-identifier="guess-button" onClick={() => finalTry(tryit)} className="try">Chutar</button>
            </div>
        </>
    )


        function victory(all){
            console.log("word",arrayWord)
            console.log("todas", all)
            if(resultsL === "") { 
                for(let i = 0; i<arrayWord.length; i++){
                console.log(!all.includes(arrayWord[i]))
                if(!all.includes(arrayWord[i])){
                    
                    return false
                }
               
            }
            setResultsL("win")
            return true}
         
        }

        function losted(len){
         if(resultsL =="") { 
             if(len == 6) {


                setResultsL("lost") 
            }}
        }


   
    function chooseImport(wro) {
        if (word != "") {

            if (wro == 0) {
                setRImage(forca0)
            }
            else if (wro == 1) {
                setRImage(forca1)
            }
            else if (wro == 2) {
                setRImage(forca2)
            }
            else if (wro == 3) {
                setRImage(forca3)
            }
            else if (wro == 4) {
                setRImage(forca4)
            }
            else if (wro == 5) {
                setRImage(forca5)
            }
            else {
                setRImage(forca6)
            }
        }




    }
}





















    // function letterClick(letter) {
    //     if (word != "" && resultsL == "") {
    //         if (!allL.includes(letter)) {
    //             setAllL([...allL, letter])
    //             for (let i = 0; i < word.length; i++) {
    //                 console.log(letter, word[i])
    //                 if (letter == word[i]) {
    //                     console.log("entrei no if")
    //                     const newL = [...rigthL, letter]
    //                     setRigthL(newL)
    //                     resultsW();
    //                 }
    //             }
                
    //                 console.log("if errado")
    //                 setwroL([...wrongL, letter])
    //                 resultsW();
    //                 chooseImport()
                
    //         }

    //         chooseImport()

    //         console.log("errado", wrongL)
    //         console.log("certo",rigthL)
    //         console.log("tudas as letras", allL)

    //     }
    // }
