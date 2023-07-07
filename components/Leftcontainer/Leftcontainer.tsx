import React from "react";
import Button from "../Button/Button";
import { Box, Flex, useMantineTheme, MediaQuery, MantineTheme, Title, Text, NavLink, ActionIcon } from "@mantine/core";
import { AiFillHome, AiOutlineOrderedList } from "react-icons/ai";
import { MdPodcasts } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { BsTwitter, BsFacebook, BsGithub, BsInstagram, BsTwitch, BsMastodon } from "react-icons/bs";




const Leftcontainer = () => {
    const theme = useMantineTheme();
    const useStyles = {
        bp1: (theme: MantineTheme) => ({
            width: '40%',
            'max-width': '240px',
            height: 'max-content',
            'min-height': 'calc(100vh - 56px)',
            'background-color': '#ededed',
            'border': '5px',
            display: 'none',
        }),
        bp2: (theme: MantineTheme) => ({
            display: 'inline-block',
            

        }),
        bp3: (theme: MantineTheme) => ({
            display: 'inline-block',
            width: '300px',

        }),
        upper: (_theme: MantineTheme) => ({
            height: '50%',
            width: '100%',
            'max-height': '420px',
            'background-color': '#FFF',

            'font-size': '16px',
            'line-height': '24px',
            'border-radius': '10px',
            'box-shadow': 'rgba(23,23,23,0.05) 0px 0px 0px 1px',
            'margin-bottom': '20px',
        }),
        link: (theme: MantineTheme) => ({
            root: {
                'margin-top': '5px',
                'margin-bottom': '5px',
                "&:hover": {
                    'background-color': 'lightblue',
                    'text-decoration': 'underline',
                    'border-radius': '2px'
                }
            }
        }),

        middle: () => ({
            'display': 'flex',
            'flex-direction': 'column',
            'background-color': '#ededed',
           
        })








    }

    return (
        <>

            <MediaQuery
                query="(min-width: 1050px)"
                styles={useStyles.bp3}


            >
                <MediaQuery
                    query="(min-width: 750px)"
                    styles={useStyles.bp2}

                >
                    <MediaQuery
                        query="(min-width: 0px)"
                        styles={useStyles.bp1}
                    >
                        <Flex direction="column" >
                            <Box sx={(theme) => ({ backgroundColor: theme.colors.primary[1], padding: theme.spacing.md })} styles={useStyles.upper}>
                                <Title order={3} mb={15} >DEV Community is a community of 1,091,852 amazing developers</Title>
                                <Text mb={15}>We're a place where coders share, stay up-to-date and grow their careers.</Text>

                                <Button variant="outline" hoverLabelColor="white" color={theme.colors.primary[0]} bgHoverColor={theme.colors.primary[0]} icon={<></>} full>Create account</Button>


                                <Button mt={15} full variant="subtle" icon={<></>} hoverLabelColor="white" color="gray" bgHoverColor={theme.colors.primary[0]}>Log in</Button>


                            </Box>
                            <Box styles={useStyles.middle}>
                                <NavLink styles={useStyles.link} label="Home" icon={<AiFillHome />} />
                                <NavLink styles={useStyles.link} label="Reading list" icon={<AiOutlineOrderedList />} />
                                <NavLink styles={useStyles.link} label="Listings" icon={<GoTasklist />} />
                                <NavLink styles={useStyles.link} label="Podcasts" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Videos" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Home" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Tags" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="FAQ" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Forem Shop" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Sponsors" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="About" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Contact" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Guides" icon={<MdPodcasts />} />
                                <NavLink styles={useStyles.link} label="Software comparisons" icon={<MdPodcasts />} />

                                <div className="social-Tags">
                                    <ActionIcon color="blue" variant="subtle"><BsTwitter size="1rem" /></ActionIcon>

                                    <ActionIcon color="blue" variant="subtle"><BsFacebook size="1rem" /></ActionIcon>

                                    <ActionIcon color="blue" variant="subtle"><BsGithub size="1rem" /></ActionIcon>

                                    <ActionIcon color="blue" variant="subtle"><BsInstagram size="1rem" /></ActionIcon>

                                    <ActionIcon color="blue" variant="subtle"><BsTwitch size="1rem" /></ActionIcon>

                                    <ActionIcon color="blue" variant="subtle"><BsMastodon size="1rem" /></ActionIcon>

                                </div>
                                <div className="Popular-tags">
                                    <h3 className="popular-tags">Popular-tags</h3>
                                    <div className="li-popular-tags">
                                        <NavLink styles={useStyles.link} label="#webdev" />

                                        <NavLink styles={useStyles.link} label="#javascript" />

                                        <NavLink styles={useStyles.link} label="#beginner" />

                                        <NavLink styles={useStyles.link} label="#programming" />

                                        <NavLink styles={useStyles.link} label="#tutorial" />

                                        <NavLink styles={useStyles.link} label="#React" />

                                        <NavLink styles={useStyles.link} label="#Python" />

                                        <NavLink styles={useStyles.link} label="#Nodejs" />

                                        <NavLink styles={useStyles.link} label="#MongoDB" />

                                        <NavLink styles={useStyles.link} label="#Nextjs" />

                                        <NavLink styles={useStyles.link} label="#Typescript" />


                                    </div>
                                </div>
                            </Box>

                        </Flex>
                    </MediaQuery>
                </MediaQuery>
            </MediaQuery>
            <style jsx>
                {
                    `
              

             

               
                .left-contain-upper-login{
    
                    height:40px;
                    width: 179px;
                    border: none;
                    background-color: #FFFF;
                    font-size: 16px;
                    margin-top: 8px;
                   
                }
                .left-contain-upper-login:hover{
                   background-color: lightskyblue;
                   text-decoration: underline;
                   border-radius: 5px;
                   color: lightskyblue;
                   border: none;
                   color: white;
                }
                .big-create-account:hover{
                    background-color: blue;
                    color: white;
                    text-decoration: underline;
                }
                .link-middle-left{
                    display: block;
                }
               
            
                li{
                    padding: 10px;
                    list-style-type: none;
                    text-decoration: none;
                    color: black;
                    cursor: pointer;
                    
                }
                li:hover{
                    background-color: lightskyblue;
                    border: none;
                    border-radius: 5px;
                    text-decoration: underline;
                    color: blue;
                }
                .fa-home:hover{
                    background-color: lightblue;
                }
                .social-Tags{
                    padding: 5px;
                    margin-top: 8px;
                    margin-bottom: 8px;
                    display: flex;
                }
                .li-popular-tags{
                       overflow-y: scroll;
                       height: 300px;
                       color: black;
                }
                a{
                    color: black;
                }
                li:hover{
                    color: blue;
                }
                
                i{
                    margin-right:5px;
                }

                h2{
                    padding: 20px 0 8px 12px; 
                    font-size: 16px; 
                    font-weight: 700;
                }
                .popular-tags{
                    padding:5px ; 
                    margin-left: 5px;
                }
                @media screen and (min-width: 750px) {

            

          
                 
                    
                   
                    
        }
        .login-padd{
            margin-top:10px;
        }

     
                `
                }
            </style>


        </>)
}

export default Leftcontainer;