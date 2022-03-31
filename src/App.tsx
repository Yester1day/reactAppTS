import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function hello() {
    alert('Hello IT-KAMASUTRA')
}
hello();


function App(props: any ) {
    console.log("App rendered")
    return (

        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={1}/>
            <Accordion titleValue={"Menu"} />
            <Accordion titleValue={"Users"}/>
            <Rating value={ 5 }/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendered")
    return <h1>{ props.title }</h1>



}


export default App;