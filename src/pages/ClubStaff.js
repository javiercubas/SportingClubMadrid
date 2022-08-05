import './ClubStaff.css';
import StaffCard1 from '../components/StaffCard/StaffCard1';
import StaffCard2 from '../components/StaffCard/StaffCard2';
export default function ClubStaff(){
    return(
        <div class="clubStaff">
            
            <div class="clubStaff__div">
                <h2 className='div__title'>Coaching Men's Staff</h2>
                <hr class="clubStaff__hr"/>
                <div class="div__grid">
                    <StaffCard1 
                        name="Alex Sánchez"
                        task="Head Coach"
                        lista={["UEFA 'Pro' License",
                            "PhD candidate Sports Psychology, Master's in Cognitive Neuroscience and Pshychobiology, Official Master in Sport Psychology Research",
                            "BS Sports and Physical Activity Science",
                            "Director of the International Masters in Football",
                            "Coaching and Management program at Real Madrid",
                            "Postgraduate School",
                            "Postgraduate School",
                            "Former Methodology Director at Getafe CF, Former Coach Alcorcon AD's U-18, Experience coaching in Spain, Italy, Angola and Oman"]}/>
                    <StaffCard2
                        name="José Santos"
                        task="Assistant Coach"
                        lista={[
                            "UEFA 'Pro' License",
                            "Head Coach of CDC Moscardo 'B' in Segunda Regional senior division",
                            "Head Coach of CDC Moscardo Infantil U-16",
                            "7 years of experience coaching in Spain"]}/>
                    <StaffCard1
                        name="Fabián Pozo"
                        task="Conditioning Coach"
                        lista={[
                            "FC Barcelona Innovation Hub",
                            "Strength training and performance rehab, Training Methodology, What to train",
                            "MBA Sports Management Universidad Europea Madrid",
                            "Coaching experience at CD Mostoles",
                            "Certified Personal trainer"]}/>
                </div>
            </div> 
            <div class="clubStaff__div">
                <h2 className='div__title'>Coaching Women's Staff</h2>
                <hr class="clubStaff__hr"/>
                <div class="div__grid">
                    <StaffCard1 
                        name="Alex Ferreira"
                        task="Head coach"
                        lista={[
                            "Master's candidate in International Football Coach and Management from Escuela Universitaria Real Madrid",
                            "USSF'D' License",
                            "Coaching Experience at the Senior level with Madrid CFF (Women's First Division)",
                            "Youth coaching at CD Canillas, North Huntington Beach FC, Earlham College, and Mater Dei HS"]}/>
                    <StaffCard2
                        name="Rachel Esteban"
                        task="Assitant Coach"
                        lista={[
                            "UEFA 'A' License, PhD Women's Football development",
                            "Coaching experience at Madrid CFF & Union Zona Norte",
                            "Many experiences in Director roles for Entrepreneurial oriented programs",
                            "As a Program Specialist, developed several project in Qatar for the 2022 World Cup"]}/>
                    <StaffCard1
                        name="Edu del Cura"
                        task="Conditioning Coach"
                        lista={[
                            "EUFA 'Pro' License, Master's in Coaching Methodology",
                            "B.S. Exercise Science",
                            "Head and Assistant Coach for AD Villaviciosa de Odon (3ª RFEF) and CD Valle de Esgüés (3ª RFEF)",
                            "Real Madrid Foundation Head Coach in the USA",
                            "FC Barcelona's training academy in Denmark. Developer of the Female BSF (Danish Female Superleague) Training Methodoly for the Youth Team"]}/>
                </div>
            </div>
            <div class="clubStaff__div">
                <h2 className='div__title'>Aditional Staff</h2>
                <hr class="clubStaff__hr"/>
                <div class="div__grid">
                    <StaffCard1 
                            name="Javier Campos"
                            task="GKs Coach"
                            lista={["B.S Exercise Science at Universidad Europea Madrid",
                                "Coaching experience at AD Alcorcon and Tres Cantos CF",]}/>
                    <StaffCard2
                        name="Miguel Mallo"
                        task="Psysiotherapist"
                        lista={[
                            "B.S Exercise Science and Physical Therapy at Universidad Europea de Madrid",
                            "Expertise in Manual Therapies and Dry Needling",
                            "Physiotherapist experience in CD Internacional de Móstoles",
                            "Conditioning coach in Getafe CF",
                            "Coach at Fundación Atlético Madrid"]}/>
                </div>
            </div> 
        </div>
    );
}