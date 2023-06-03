import TextField from '@mui/material/TextField';

export default function RegularInput({ inputName, labelName }) {

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