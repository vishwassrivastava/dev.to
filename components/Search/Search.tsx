import { Input, MantineTheme, Tooltip } from '@mantine/core';
import { AiOutlineSearch } from 'react-icons/ai';
import { theme } from '../../mantineConfig';

const Search=()=> {

  const useStyles = (theme: MantineTheme) => ({
    wrapper: {
      'max-height': '40px',
      height: theme.other.height.md,
      width: '420px',
    },
   
  }
  
  )
  
    
  return (
    <Input styles={useStyles} placeholder="Search..." rightSection={ <AiOutlineSearch /> }  />
  );
}

export default Search;