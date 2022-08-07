import './img.css'

export default function Img_OP(props){
    
    const {img_url} = props; 

    return(
        <div className="op_img" style={{ backgroundImage: 'url(http://127.0.0.1:1337'+img_url+')'}}></div>
    )
}