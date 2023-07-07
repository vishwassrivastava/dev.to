import Button from "../Button/Button";
import { RxHamburgerMenu } from 'react-icons/rx';
import {LuSearch } from 'react-icons/lu';
import { useMediaQuery } from '@mantine/hooks';
import { MantineColor, useMantineTheme } from "@mantine/core";

import Search from './../Search/Search';


const Navbar = () => {
    const tabletScreen = useMediaQuery('(min-width: 750px)');
    const theme = useMantineTheme();
    return(
        <>
             <div className="header">
        <div className="wrapper">
            <div className="header-child-container">
                {
                    // tabletScreen ? <></>: <Button icon={<RxHamburgerMenu size={20}/>} loginBtn={true}/>
                }

           
                <div className="logo"></div>
                <div className="left-search">
                <Search />
                </div>

            </div>
            <div className="header-child-container">
                {
                    // tabletScreen ? <></> : <Button icon={<LuSearch size={20} />} loginBtn={true} />
                }
                {
                //   tabletScreen ?  <Button title="login" loginBtn={true} /> : <></>
                }
                 <Button variant="subtle" icon={<></>}hoverLabelColor={theme.colors.primary[0]} color="gray" bgHoverColor="#ededed">Log in</Button> 
                <Button  variant="outline" hoverLabelColor="white" color={theme.colors.primary[0]}  bgHoverColor={theme.colors.primary[0]}icon={<></>} full>Create account</Button>
            
                
            </div>
        </div>
        
     
    </div>
    <style jsx>
        {
            `
            .header{
                display: flex;
                height:56px;
                width:100%;
                
                justify-content:  center;
                padding:0px 10px;
                border-bottom:1px solid rgba(0,0,0, 0.2);
              
            }

            
        .wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            max-width: 1280px;
            
        }

        .header-child-container{
         
            height: 100%;
         
            display:flex;
            align-items: center;
            gap:10px;
        }


        


 


       .logo{
           height: 40px;
           width:50px;
           border-radius: 5px;
           background-color: black;
       }

       .search{
        height:40px;
        width:40px;
        background-color:grey;
        border-radius: 5px;
    }
  



  

    @media screen and (min-width: 750px) {

        .ham {
            display: none;
        }


        .left-search {
            display: inline-block;
        }

        .login {
            display: inline-block;
        }

        .search {
            display: none;
        }
    }
            
            
            
            `
        }
    </style>
        </>
    )
}

export default Navbar;