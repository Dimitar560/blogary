import { TextField } from '@mui/material';


export default function UsernameInput({ inputName, labelName }) {

    function handleValidation(e) {
        let value = e.currentTarget.value;
    }

    return (
        <>
            <TextField
                sx={{
                    '& label.Mui-focused': {
                        color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                        },
                        '&:hover fieldset': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'white',
                        },
                    },
                }}
                fullWidth
                id="standard-basic"
                label={labelName}
                variant="standard"
                name={inputName}
                onChange={handleValidation}
            />
        </>
    );

};