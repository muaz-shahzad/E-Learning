import React from "react";
import "../index.css"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GundiImg from "../Components/GundiImg";
import GundliCard from "../Components/GundliCard";
// import {TeamCard} from "./Alldata";
import {TeamCard} from '../Alldata'


function Team()
{
    return(
        <>
        <Header/>
        <GundiImg/>
        {TeamCard.map((val,key)=>{
            return(
                <GundliCard
                         img1={val.img1}
                         img2={val.img2}
                         img3={val.img3}
                         img4={val.img4}
                         img5={val.img5}
                         img6={val.img6}
                         name1={val.name1}
                         name2={val.name2}
                         name3={val.name3}
                         name4={val.name4}
                         name5={val.name5}
                         name6={val.name6}
                         name7={val.name7}
                         name8={val.name8}
                         skilll={val.skilll}
                         skill2={val.skill2}
                         skill3={val.skill3}
                         skill4={val.skill4}
                         skill5={val.skill5}
                       
                />

            )
        })}
        <Footer/>


        </>
    )
}
export default Team;