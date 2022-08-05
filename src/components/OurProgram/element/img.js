import './img.css'

export default function Img_OP(props){
    
    const {img_name} = props; 

    return(
        <div className="op_img" style={{ backgroundImage: 'url(../assets/ourProgram/'+img_name+'.webp)'}}></div>
    )
}