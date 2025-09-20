import { UseUsersContext } from "../../context/users/context";
import { LiveClock } from '../LiveClock/LiveClock';
import { ModalWindow } from "../Modal/ModalWindow"
import { Box, Button, Typography } from '@mui/joy/';

export const ControlPanel = ({ componentModal }) => {
    const { setEndIndex, perPage, list, navigate, setModalStatus, setActionForm } = UseUsersContext()

    const addUserProces = () => {
        setModalStatus(true)
        setActionForm('add')

    }
    return (
        <Box sx={{
            p: 2, display: 'flex', justifyContent: 'space-evenly', marginTop: '3vh', borderTopLeftRadius: '25px', borderTopRightRadius: '25px',
            boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.3)', backgroundColor: 'rgba(68, 231, 249, 0.3)'
        }}  >
            {componentModal === 'forDelete' ? (
                <>
                    <Typography color="neutral" level="h4" variant="plain">
                        <LiveClock />
                    </Typography>
                    <Button onClick={() => setEndIndex(prev => prev + perPage)}>відкрити щє</Button>
                </>
            )
                : (
                    <>
                        <Button onClick={() => navigate(-1)}>До користувачів</Button>
                        <Button onClick={addUserProces}>Додати користувача</Button>
                    </>
                )}

            <Typography color="neutral" level="h4" variant="plain">
                Кількість користувачів: {list.length}
            </Typography>
            <ModalWindow componentModal={componentModal} />
        </Box>
    )
}