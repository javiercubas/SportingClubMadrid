import './img.css'

export default function Img_OP(props){
    
    const {img_url} = props; 

    return(
        <div className="op_img" style={{ backgroundImage: 'url(https://clever-neumann.82-223-205-248.plesk.page'+img_url+')'}}></div>
    )
}