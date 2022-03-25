import CVCanvas from "../components/cv/CVCanvas";
import CVHtml from "../components/cv/CVHtml";


export default function CV() {
    return (
        <div className="CV-page" style={{width: '80%', height: '100%', display: 'flex'}}>
            <CVHtml />
            {/* <CVCanvas /> */}
        </div>
    )
}