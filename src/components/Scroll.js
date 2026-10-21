import styled , {keyframes} from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons"

const animatedScroll = keyframes`
0% , 100% {transform:translateY(0)}
50% {transform:translateY(-5px)}
`
const ScrollComponent = styled(FontAwesomeIcon)`
    position:fixed;
    bottom:1.4rem;
    right:1.4rem;
    width:1.7rem;
    height:50px;
    color:green;
    cursor:pointer;
    transition:0.3s all;
    animation-name:${animatedScroll};
    animation-duration:1s;
    animation-iteration-count:infinite;
    animation-timing-function:ease-in-out;
    &:hover{
    color:rgba(16, 185, 129, 0.15);
    scale: 1.3
    }
`
function Scroll (){
    return <div>
        <div>
            <ScrollComponent icon={faArrowAltCircleUp}/>
        </div>
    </div>
}
export default Scroll;