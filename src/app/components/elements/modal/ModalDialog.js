import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import style from './ModalDialog.module.css';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 500,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

export default function ModalDialog({ setModal, textMessage }) {

    return (
        <div>
            <Modal open={true} aria-describedby="modal-modal-description">
                <Box sx={modalStyle}>

                    <div className={style.textWrap}>
                        {textMessage}
                    </div>

                    <div className={style.buttonWrap}>
                        <Button variant="contained" onClick={() => setModal(false)}>Close</Button>
                    </div>

                </Box>
            </Modal>
        </div>
    );

}