import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import  FormGroup from '@mui/material/FormGroup';
import  FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({theme}) => ({}))

export default function SwitchTheme({changeTheme}) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked)
        changeTheme()
    };

    return(
        <FormGroup>
            <FormControlLabel  
                control={<MaterialUISwitch checked={checked}
                onChange={handleChange} />}
                label=""
            >
            </FormControlLabel>
        </FormGroup>
    )
}