import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginForm from './Auth/LoginForm';
import SignupForm from './Auth/SignupForm';
import DetectLangauge from './DetectLanguage';
import SupportedLanguages from './SupportedLangauges';


function AppRoutes(){
    return (
        <div>
            <Routes>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/login' Component={LoginForm}/>
                <Route exact path='/signup' Component={SignupForm}/>
                <Route exact path='/detect' Component={DetectLangauge} />
                <Route exact path='/supportedlanguages' Component={SupportedLanguages} />

            </Routes>
        </div>
    )
};


export default AppRoutes;