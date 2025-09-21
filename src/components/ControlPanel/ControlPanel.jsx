import { Box, Button, Typography } from '@mui/joy/';
import { UseUsersContext } from "../../context/users/context";
import { LiveClock } from '../LiveClock/LiveClock';
import { ModalWindow } from "../Modal/ModalWindow";

export const ControlPanel = ({ componentModal }) => {
    const { setEndIndex, perPage, list, navigate, setModalStatus, setActionForm, change } = UseUsersContext()

    const addUserProces = () => {
        setModalStatus(true)
        setActionForm('add')

    }
    return (
        <Box className="control-panel" sx={{
            p: 2, display: 'flex', justifyContent: 'space-evenly', marginTop: '3vh', borderTopLeftRadius: '25px', borderTopRightRadius: '25px',
            boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.3)', backgroundColor: 'rgba(68, 231, 249, 0.3)'
        }}  >
            {componentModal === 'forDelete' ? (
                <>
                    <Typography color="neutral" level="h4" variant="plain">
                        <LiveClock />
                    </Typography>
                    <Button variant="outlined" sx={{ minWidth: '5vw', minHeight: '3vh' }} onClick={() => setEndIndex(prev => prev + perPage)}>&darr;</Button>
                </>
            )
                : (
                    <>
                        <Button sx={{ minWidth: '10vw', minHeight: '5vh', }} disabled={change} onClick={() => navigate(-1)}>До користувачів</Button>
                        <Button variant="outlined" sx={{ minWidth: '10vw', minHeight: '5vh', }} disabled={change} onClick={addUserProces}>+Користувач</Button>
                    </>
                )}

            <Typography sx={{ margin: '5px', width: '20vw', fontSize: '1.8vw', alignSelf: 'center' }} color="neutral" level="h4" variant="plain">
                Кількість користувачів: {list.length}
            </Typography>
            <ModalWindow componentModal={componentModal} />
        </Box>
    )
}