import { ClimbingBoxLoader } from "react-spinners";
import {useEffect} from "react";


export default function Loader(){
	useEffect(()=>{
		setTimeout(()=>{
			console.log("asdasda");
		},5000)
	},[]);
		
	return(
		<div>
			<ClimbingBoxLoader color="#36d7b7" />
		</div>
	)
}