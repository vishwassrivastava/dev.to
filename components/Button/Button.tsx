import React from "react";


import { Button as MantineButton, Variants, useMantineTheme, createStyles, MantineTheme, MantineColor } from '@mantine/core';


interface IProps {
   variant: Variants<"outline" | "white" | "light" | "default" | "filled" | "gradient" | "subtle">
   icon: React.ReactNode;
   children: React.ReactNode;
   full?: boolean;
   color: string;
   bgHoverColor: string;
   hoverLabelColor: string;
   mt?: number;
}





const Button = ({icon, variant,  children, full=false, color, bgHoverColor, hoverLabelColor, mt = 0}: IProps) => {

   
    
const useStyles = (theme : MantineTheme) => ({
    root: {
        height: theme.other.height.md,
        border: variant === 'outline' ? `1px solid ${color}` : '',
        width: full ? '100%' : 'auto',
        transition: theme.other.defaultTransition,
        color: color,
        "&:hover": {
            background: bgHoverColor,
            textDecoration: 'underline',
            color: hoverLabelColor,
            'text-decoration-color': hoverLabelColor,
          
        },

    
     
        
    },
  
});

    
    

   
    return(
        <>
        <MantineButton size="md" styles={useStyles} leftIcon={icon} variant={variant} mt={mt}>{children}</MantineButton>
        </>
    )
}

export default Button;