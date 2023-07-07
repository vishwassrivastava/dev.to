import react from "react";
import Button from "../Button/Button";
import { Box, Flex, MantineTheme, NavLink, useMantineTheme, Image } from "@mantine/core";
import { AiFillHome } from "react-icons/ai";
import { theme } from "../../mantineConfig";
import Mainconntainerbigpost from "../Maincontainerbigpost/Maincontainerbigpost";



const Maincontainer = () => {
  const theme = useMantineTheme();
  const useStyles = {

    maincontainerheader: () => ({
      'height': '10000px',
      'width': '100%',

    }),



  }

  return (
    <>

        <Box sx={(theme) => ({
        'width': '100%',
        'max-width': '650px',
        'height': 'max-content',
        'min-height': 'calc(: any100vh: any - 56px)',
        'padding-left': '10px',
        'margin-right': '10px',

        'border-radius': '5px',

        })}>


        <Box sx={(theme) => ({
          'height': '100%',
          'width': '100%',

        })}>
          <Flex
            mih={50}

            gap="l"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            <Box ><Button mt={2} full variant="subtle" icon={<></>} hoverLabelColor="blue" color="gray" bgHoverColor="white">Relevant</Button></Box>
            <Box>
              <Button mt={2} full variant="subtle" icon={<></>} hoverLabelColor="blue" color="gray" bgHoverColor="white">Top</Button>

            </Box>
            <Box>
              <Button mt={2} full variant="subtle" icon={<></>} hoverLabelColor="blue" color="gray" bgHoverColor="white">Latest</Button>

            </Box>
          </Flex>
        </Box>
        <Box sx={(theme) => ({
          'background-color': 'white',
          'border-radius': '10px'
         })}>
        
          <Mainconntainerbigpost />
                     
       
        </Box>
        <Box sx={(theme)=>({
                 'background-color':'white',
                   'height':'242px',
                   'width':'100%,',
                   'radius':'10px',
                   
                   'margin-top':'30px',
                   
                   'border-radius':'10px'
             })} >

             </Box> 
        </Box>

        <style jsx>
          {
            `
          
            
           
                .div1-header,.div2-header,.div3-header{
                  height:30%;
                  display:inline-block;
                 
                }

               
           
              
               
                .namediv{
                  height:100%;
                  width:50px;
                  border:2px solid red;
                  margin-left:10px;
                  margin-top:10px;
                }
                .div2{
                  margin-left:80px;
                  height:10opx;
                  border:2px solid red;
                  font-size:28px;
                  max-width:570px;
                   
                }

                
           `}

        </style>
      </>
      )}


      export default Maincontainer;

              
