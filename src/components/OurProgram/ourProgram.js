import './ourProgram.css'
import Img_OP from './element/img'

export default function OurProgramPage() {

    return (
        <div className="box_principal">
            <div className="our_program_title">
                <h3 className="our_program_title_main">Our Program</h3>
            </div>
            <hr className="our_program_separator" />
            <div className="content_our_program">
                <Img_OP img_name="op1"/>
                <Img_OP img_name="op1"/>
                <Img_OP img_name="op1"/>
                <Img_OP img_name="op1"/>
                <Img_OP img_name="op1"/>
                <Img_OP img_name="op1"/>
            </div>
        </div>
    )
}