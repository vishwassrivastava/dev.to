import react from "react";
import Button from "../Button/Button";
import { Box, Flex, MantineTheme, NavLink, useMantineTheme, Image } from "@mantine/core";
import { AiFillHome } from "react-icons/ai";
import { theme } from "../../mantineConfig";


const Mainconntainerbigpost=()=>{


    return(
      <>
        
         <Box>
            <Image width={'100%'} height={'100%'} radius="md" src="https://res.cloudinary.com/practicaldev/image/fetch/s--uGsDsDL5--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xb11pfutgzt646g0n239.png" alt="Random image" />
             <Box sx={(theme)=>({
                 'background-color':'white',
                   'height':'200px',
                   'width':'100%,',
                   'radius':'10px'
             })} >
                
             </Box>
        </Box>
          
           
              

        
      </>

    )

    

      
    
}

export default Mainconntainerbigpost;