import React from 'react';
import { TextField, Grid, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const theme = createMuiTheme({
    typography: { fontFamily: `'Nunito', sans-serif` },
});

const FormInput = ({name, label}) => 
{
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                render={({ field }) => <MuiThemeProvider theme={theme}><TextField {...field} required label={label} fullWidth /></MuiThemeProvider>}
                as={TextField} 
                defaultValue=""
                control={control} 
                name={name} 
                label={label}
            />
        </Grid>
    )
}

export default FormInput;
