import { Outlet } from "react-router-dom";
import Header from "../Pages/HomePage/Header";
import Footer from "../Pages/HomePage/Footer";
import {useEffect, useState} from "react";
import {GetAllPosts, GetFeaturedPost, GetSection} from "../setup/axios/providers";

const SharedLayout = () => {
    const [section, setSection] = useState([]);

    useEffect(() => {
        // Fetch section data
        GetSection()
            .then((sectionData) => {
                console.log(sectionData);
                setSection(sectionData.data);
            })
            .catch((error) => {
                console.error('Error in GetSection:', error);
            });
        
    }, []);
    
    return (
        <div className="shared-layout">
            <Header title="Forum Dyskusyjne" sections={section} />
            <Outlet />
        </div>
    );
};

export default SharedLayout;
